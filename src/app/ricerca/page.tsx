import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { AnimatedAIChat } from "@/components/ai_chat";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Header />
      <main className="pt-[270px] relative z-10">
        {/* Purple Orb Background for Main */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Section */}
        <section className="bg-transparent relative z-20">
        </section>

        {/* AI Chat Component */}
        <section className="bg-transparent relative z-20">
          <div className="w-full px-4 py-8">
            <AnimatedAIChat />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}