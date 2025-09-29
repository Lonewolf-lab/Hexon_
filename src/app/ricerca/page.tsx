"use client"

import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import { AnimatedAIChat } from "@/components/ai_chat"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-20">
        <AnimatedAIChat />
      </main>
      <Footer />
    </div>
  )
}
