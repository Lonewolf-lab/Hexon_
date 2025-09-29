import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    // Parse request body
    const body = await request.json().catch(() => null);
    const { message } = body || {};

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message is required and must be a non-empty string' },
        { status: 400 }
      );
    }

    // Validate message length (prevent extremely long messages)
    if (message.length > 10000) {
      return NextResponse.json(
        { error: 'Message is too long. Maximum length is 10,000 characters.' },
        { status: 400 }
      );
    }

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    // Generate streaming content
    const result = await model.generateContentStream(message);

    // Create a readable stream
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            if (chunkText) {
              // Send in OpenAI-compatible format for frontend compatibility
              const openAIFormat = {
                choices: [{
                  delta: {
                    content: chunkText
                  }
                }]
              };
              controller.enqueue(encoder.encode(`data: ${JSON.stringify(openAIFormat)}\n\n`));
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    
    // Handle specific error types
    if (error instanceof Error) {
      // Handle rate limiting
      if (error.message.includes('quota') || error.message.includes('rate limit')) {
        return NextResponse.json(
          { error: 'API rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }
      
      // Handle authentication errors
      if (error.message.includes('API key') || error.message.includes('authentication')) {
        return NextResponse.json(
          { error: 'Authentication failed. Please check API configuration.' },
          { status: 401 }
        );
      }
      
      // Handle network/connection errors
      if (error.message.includes('network') || error.message.includes('connection')) {
        return NextResponse.json(
          { error: 'Network error. Please check your connection and try again.' },
          { status: 503 }
        );
      }
    }
    
    // Generic error fallback
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods and CORS preflight
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to send messages.' },
    { status: 405 }
  );
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}