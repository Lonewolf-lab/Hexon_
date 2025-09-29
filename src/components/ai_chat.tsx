"use client";

import { useEffect, useRef, useCallback, useTransition } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
    ImageIcon,
    FileUp,
    Figma,
    MonitorIcon,
    CircleUserRound,
    ArrowUpIcon,
    Paperclip,
    PlusIcon,
    SendIcon,
    XIcon,
    LoaderIcon,
    Sparkles,
    Command,
    Bot,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react"
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
            const scrollHeight = textarea.scrollHeight;
            const newHeight = maxHeight
                ? Math.min(scrollHeight, maxHeight)
                : scrollHeight;
            textarea.style.height = `${newHeight}px`;
        }
    }, [minHeight, maxHeight]);

    return {
        textareaRef,
        adjustHeight,
    };

    useEffect(() => {
        adjustHeight();
    }, [adjustHeight]);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.addEventListener('input', adjustHeight);
            return () => textarea.removeEventListener('input', adjustHeight);
        }
    }, [adjustHeight]);
}

interface CommandSuggestion {
    icon: React.ReactNode;
    label: string;
    description: string;
    prefix: string;
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  containerClassName?: string;
  showRing?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, containerClassName, showRing = true, ...props }, ref) => {
    return (
      <div className={cn(
        "relative",
        containerClassName
      )}>
        <textarea
          className={cn(
            "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            showRing && "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
    isStreaming?: boolean;
}

export function AnimatedAIChat() {
    const [value, setValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [attachments, setAttachments] = useState<string[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [activeSuggestion, setActiveSuggestion] = useState<number>(-1);
    const [showCommandPalette, setShowCommandPalette] = useState(false);
    const [recentCommand, setRecentCommand] = useState<string | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoading, setIsLoading] = useState(false);
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 60,
        maxHeight: 200,
    });
    const [inputFocused, setInputFocused] = useState(false);
    const commandPaletteRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const commandSuggestions: CommandSuggestion[] = [
        { 
            icon: <ImageIcon className="w-4 h-4" />, 
            label: "Clone UI", 
            description: "Generate a UI from a screenshot", 
            prefix: "/clone" 
        },
        { 
            icon: <Figma className="w-4 h-4" />, 
            label: "Import Figma", 
            description: "Import a design from Figma", 
            prefix: "/figma" 
        },
        { 
            icon: <MonitorIcon className="w-4 h-4" />, 
            label: "Create Page", 
            description: "Generate a new web page", 
            prefix: "/page" 
        },
        { 
            icon: <Sparkles className="w-4 h-4" />, 
            label: "Improve", 
            description: "Improve existing UI design", 
            prefix: "/improve" 
        },
    ];

    const sendMessageToGemini = async (message: string, onChunk: (chunk: string) => void) => {
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            const reader = response.body?.getReader();
            if (!reader) {
                throw new Error('No reader available');
            }

            const decoder = new TextDecoder();
            let buffer = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n');
                buffer = lines.pop() || '';

                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const data = line.slice(6);
                        if (data === '[DONE]') {
                            return;
                        }
                        try {
                            const parsed = JSON.parse(data);
                            if (parsed.choices?.[0]?.delta?.content) {
                                onChunk(parsed.choices[0].delta.content);
                            }
                        } catch (e) {
                            console.error('Error parsing chunk:', e);
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Error sending message:', error);
            onChunk('Sorry, there was an error processing your message.');
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (value.startsWith('/')) {
            const matchingSuggestions = commandSuggestions.filter(s => 
                s.prefix.toLowerCase().includes(value.toLowerCase())
            );
            setShowCommandPalette(matchingSuggestions.length > 0);
        } else {
            setShowCommandPalette(false);
        }
    }, [value]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (commandPaletteRef.current && !commandPaletteRef.current.contains(event.target as Node)) {
                setShowCommandPalette(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (showCommandPalette && activeSuggestion >= 0) {
                selectCommandSuggestion(activeSuggestion);
            } else {
                handleSendMessage();
            }
        } else if (e.key === 'ArrowUp' && showCommandPalette) {
            e.preventDefault();
            setActiveSuggestion(prev => 
                prev <= 0 ? commandSuggestions.length - 1 : prev - 1
            );
        } else if (e.key === 'ArrowDown' && showCommandPalette) {
            e.preventDefault();
            setActiveSuggestion(prev => 
                prev >= commandSuggestions.length - 1 ? 0 : prev + 1
            );
        } else if (e.key === 'Escape') {
            setShowCommandPalette(false);
            setActiveSuggestion(-1);
        }
    };

    const handleSendMessage = async () => {
        if (!value.trim() || isLoading) return;

        const messageText = value.trim();
        setValue("");
        adjustHeight();
        setIsLoading(true);

        const userMessage: Message = {
            id: Date.now().toString(),
            content: messageText,
            role: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);

        const assistantMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "",
            role: 'assistant',
            timestamp: new Date(),
            isStreaming: true,
        };

        setMessages(prev => [...prev, assistantMessage]);

        await sendMessageToGemini(messageText, (chunk) => {
            setMessages(prev => prev.map(msg => 
                msg.id === assistantMessage.id 
                    ? { ...msg, content: msg.content + chunk }
                    : msg
            ));
        });

        setMessages(prev => prev.map(msg => 
            msg.id === assistantMessage.id 
                ? { ...msg, isStreaming: false }
                : msg
        ));

        setIsLoading(false);
    };

    const handleAttachFile = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) {
                setAttachments(prev => [...prev, file.name]);
            }
        };
        input.click();
    };

    const removeAttachment = (index: number) => {
        setAttachments(prev => prev.filter((_, i) => i !== index));
    };

    const selectCommandSuggestion = (index: number) => {
        const suggestion = commandSuggestions[index];
        setValue(suggestion.prefix + ' ');
        setShowCommandPalette(false);
        setActiveSuggestion(-1);
        textareaRef.current?.focus();
    };

    return (
        <>
            {/* Messages End Reference */}
            <div ref={messagesEndRef} />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
                {/* Animated Background Elements */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-normal filter blur-[128px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-normal filter blur-[128px] animate-pulse delay-700" />
                <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-fuchsia-500/20 rounded-full mix-blend-normal filter blur-[128px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>

            {/* Main Layout */}
            <div className="relative z-10 min-h-screen grid grid-rows-[auto_1fr_auto] max-w-7xl mx-auto">
                {/* Header */}
                <header className="px-6 py-8 border-b border-white/10 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">AI Assistant</h1>
                                <p className="text-sm text-white/60">Powered by advanced AI technology</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30">
                                <span className="text-xs font-medium text-green-400">Online</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="h-[calc(100vh-200px)] overflow-hidden px-6 py-6">
                    <div className="h-full max-w-4xl mx-auto">
                        <motion.div 
                            className="h-full flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {/* Messages Container */}
                            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                                <div className="space-y-6 pb-6">
                                    
                                    {messages.length === 0 && (
                                        <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 flex items-center justify-center mb-6">
                                                <Sparkles className="w-8 h-8 text-violet-400" />
                                            </div>
                                            <h2 className="text-2xl font-semibold text-white mb-3">Welcome to AI Assistant</h2>
                                            <p className="text-white/60 max-w-md mb-8">Start a conversation by typing a message below. I'm here to help with any questions or tasks you have.</p>
                                            <div className="grid grid-cols-2 gap-3 max-w-lg">
                                                {commandSuggestions.map((suggestion, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setValue(suggestion.prefix + ' ')}
                                                        className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200 text-left group"
                                                    >
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <div className="text-violet-400 group-hover:text-violet-300 transition-colors">
                                                                {suggestion.icon}
                                                            </div>
                                                            <span className="font-medium text-white text-sm">{suggestion.label}</span>
                                                        </div>
                                                        <p className="text-xs text-white/60">{suggestion.description}</p>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    
                                    {messages.map((message) => (
                                        <motion.div
                                            key={message.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={cn(
                                                "flex gap-3",
                                                message.role === 'user' ? "justify-end" : "justify-start"
                                            )}
                                        >
                                            {message.role === 'assistant' && (
                                                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-medium">
                                                    <Bot className="w-4 h-4" />
                                                </div>
                                            )}
                                            <div
                                                className={cn(
                                                    "max-w-[90%] rounded-2xl px-4 py-2 text-sm backdrop-blur-md",
                                                    message.role === 'user'
                                                        ? "bg-white/20 text-white border border-white/30 shadow-lg"
                                                        : "bg-white/10 text-white border border-white/20 shadow-lg backdrop-blur-xl"
                                                )}
                                            >
                                                <div className="prose prose-invert prose-sm max-w-none">
                                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                        {message.content}
                                                    </ReactMarkdown>
                                                </div>
                                                {message.isStreaming && <TypingDots />}
                                            </div>
                                            {message.role === 'user' && (
                                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-medium">
                                                    <CircleUserRound className="w-4 h-4" />
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </main>

                {/* Footer with Input Area */}
                <footer className="px-6 py-4 border-t border-white/10 backdrop-blur-sm">
                    <div className="max-w-4xl mx-auto">
                        <motion.div 
                            className="backdrop-blur-2xl bg-white/[0.02] rounded-2xl border border-white/[0.05] shadow-2xl relative"
                            initial={{ scale: 0.98 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            {/* Command palette */}
                            <AnimatePresence>
                                {showCommandPalette && (
                                    <motion.div 
                                        ref={commandPaletteRef}
                                        className="absolute left-4 right-4 bottom-full mb-2 backdrop-blur-xl bg-black/90 rounded-lg z-50 shadow-lg border border-white/10 overflow-hidden"
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        transition={{ duration: 0.15 }}
                                    >
                                        <div className="py-1 bg-black/95">
                                            {commandSuggestions.map((suggestion, index) => (
                                                <motion.div
                                                    key={suggestion.prefix}
                                                    className={cn(
                                                        "flex items-center gap-2 px-3 py-2 text-xs transition-colors cursor-pointer",
                                                        activeSuggestion === index 
                                                            ? "bg-white/10 text-white" 
                                                            : "text-white/70 hover:bg-white/5"
                                                    )}
                                                    onClick={() => selectCommandSuggestion(index)}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: index * 0.03 }}
                                                >
                                                    <div className="w-5 h-5 flex items-center justify-center text-white/60">
                                                        {suggestion.icon}
                                                    </div>
                                                    <div className="font-medium">{suggestion.label}</div>
                                                    <div className="text-white/40 text-xs ml-1">
                                                        {suggestion.prefix}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="p-4">
                                <Textarea
                                    ref={textareaRef}
                                    value={value}
                                    onChange={(e) => {
                                        setValue(e.target.value);
                                        adjustHeight();
                                    }}
                                    onKeyDown={handleKeyDown}
                                    onFocus={() => setInputFocused(true)}
                                    onBlur={() => setInputFocused(false)}
                                    placeholder="Ask me anything..."
                                    containerClassName="w-full"
                                    className={cn(
                                        "w-full px-4 py-3",
                                        "resize-none",
                                        "bg-transparent",
                                        "border-none",
                                        "text-white/90 text-sm",
                                        "focus:outline-none",
                                        "placeholder:text-white/20",
                                        "min-h-[60px]"
                                    )}
                                    style={{
                                        overflow: "hidden",
                                    }}
                                    showRing={false}
                                />
                            </div>

                            <AnimatePresence>
                                {attachments.length > 0 && (
                                    <motion.div 
                                        className="px-4 pb-3 flex gap-2 flex-wrap"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                    >
                                        {attachments.map((file, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex items-center gap-2 text-xs bg-white/[0.03] py-1.5 px-3 rounded-lg text-white/70"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                            >
                                                <span>{file}</span>
                                                <button 
                                                    onClick={() => removeAttachment(index)}
                                                    className="text-white/40 hover:text-white transition-colors"
                                                >
                                                    <XIcon className="w-3 h-3" />
                                                </button>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="p-4 border-t border-white/[0.05] flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <motion.button
                                        type="button"
                                        onClick={handleAttachFile}
                                        whileTap={{ scale: 0.94 }}
                                        className="p-2 text-white/40 hover:text-white/90 rounded-lg transition-colors relative group"
                                    >
                                        <Paperclip className="w-4 h-4" />
                                        <motion.span
                                            className="absolute inset-0 bg-white/[0.05] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                            layoutId="button-highlight"
                                        />
                                    </motion.button>
                                    <motion.button
                                        type="button"
                                        data-command-button
                                        onClick={(e) => {
                                            setShowCommandPalette(!showCommandPalette);
                                        }}
                                        whileTap={{ scale: 0.94 }}
                                        className={cn(
                                            "p-2 text-white/40 hover:text-white/90 rounded-lg transition-colors relative group",
                                            showCommandPalette && "bg-white/10 text-white/90"
                                        )}
                                    >
                                        <Command className="w-4 h-4" />
                                        <motion.span
                                            className="absolute inset-0 bg-white/[0.05] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                            layoutId="button-highlight"
                                        />
                                    </motion.button>
                                </div>
                                
                                <motion.button
                                    type="button"
                                    onClick={handleSendMessage}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isLoading || !value.trim()}
                                    className={cn(
                                        "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                                        "flex items-center gap-2",
                                        value.trim() && !isLoading
                                            ? "bg-white text-[#0A0A0B] shadow-lg shadow-white/10"
                                            : "bg-white/[0.05] text-white/40"
                                    )}
                                >
                                    {isLoading ? (
                                        <LoaderIcon className="w-4 h-4 animate-[spin_2s_linear_infinite]" />
                                    ) : (
                                        <SendIcon className="w-4 h-4" />
                                    )}
                                    <span>{isLoading ? 'Sending...' : 'Send'}</span>
                                </motion.button>
                            </div>
                        </motion.div>

                        {messages.length === 0 && (
                            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                                {commandSuggestions.map((suggestion, index) => (
                                    <motion.button
                                        key={suggestion.prefix}
                                        onClick={() => selectCommandSuggestion(index)}
                                        className="flex items-center gap-2 px-3 py-2 bg-white/[0.02] hover:bg-white/[0.05] rounded-lg text-sm text-white/60 hover:text-white/90 transition-all relative group"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {suggestion.icon}
                                        <span>{suggestion.label}</span>
                                        <motion.div
                                            className="absolute inset-0 border border-white/[0.05] rounded-lg"
                                            initial={false}
                                            animate={{
                                                opacity: [0, 1],
                                                scale: [0.98, 1],
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeOut",
                                            }}
                                        />
                                    </motion.button>
                                ))}
                            </div>
                        )}
                    </div>
                </footer>
            </div>

            {/* Mouse Follow Effect */}
            {inputFocused && (
                <motion.div 
                    className="fixed w-[50rem] h-[50rem] rounded-full pointer-events-none z-0 opacity-[0.02] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 blur-[96px]"
                    animate={{
                        x: mousePosition.x - 400,
                        y: mousePosition.y - 400,
                    }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 150,
                        mass: 0.5,
                    }}
                />
            )}
            </div>
        </>
    );
}

function TypingDots() {
    return (
        <div className="flex items-center ml-1">
            {[1, 2, 3].map((dot) => (
                <motion.div
                    key={dot}
                    className="w-1.5 h-1.5 bg-white/90 rounded-full mx-0.5"
                    initial={{ opacity: 0.3 }}
                    animate={{ 
                        opacity: [0.3, 0.9, 0.3],
                        scale: [0.85, 1.1, 0.85]
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: dot * 0.15,
                        ease: "easeInOut",
                    }}
                    style={{
                        boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
                    }}
                />
            ))}
        </div>
    );
}
