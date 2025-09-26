import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Search, ChevronDown } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-[270px]">
        {/* Hero Section */}
        <section className="bg-black">
          <div className="w-full px-0 py-8">
            <h1 className="text-[5rem] md:text-[10rem] font-thin text-white leading-none mb-0 pl-4">
              Eventi
            </h1>
          </div>
        </section>

        {/* Full-width Search Bar */}
        <section className="bg-black border-t border-gray-800">
          <div className="w-full px-2 py-4">
            <div className="relative max-w-full">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-black border border-gray-700 px-16 py-5 text-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Strict Two-Column Layout Container */}
        <section className="bg-black">
          <div className="w-full px-2 pt-10 pb-24">
            {/* CSS Grid Container for Horizontal Division */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left Column - Filter Sidebar (1/4 = 25%) */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <select className="bg-gray-900 border border-gray-700 text-white px-4 py-3 pr-10 appearance-none focus:outline-none focus:border-gray-500 w-full">
                    <option>Tutti</option>
                    <option>In arrivo</option>
                    <option>Passati</option>
                    <option>Workshop</option>
                    <option>Talk</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Right Column - Events Content (3/4 = 75%) */}
              <div className="lg:col-span-3">
                <div className="space-y-8">
                  {/* Events list */}
                  <div className="space-y-8">
                    {/* Civic Tech Meetup Event */}
                    <article className="py-6 border-b border-gray-800 last:border-b-0">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Image Section */}
                        <div className="lg:w-64 lg:flex-shrink-0">
                          <div className="relative h-48 lg:h-40 bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg overflow-hidden">
                            {/* Tech meetup image placeholder */}
                            <div className="w-full h-full bg-gradient-to-br from-purple-800 via-blue-800 to-indigo-900 relative">
                              <div className="absolute top-4 left-4 w-6 h-6 bg-purple-400 rounded-full opacity-30"></div>
                              <div className="absolute top-8 right-6 w-4 h-4 bg-blue-400 rounded-full opacity-40"></div>
                              <div className="absolute bottom-6 left-6 w-8 h-8 bg-indigo-400 rounded-full opacity-25"></div>
                            </div>
                            {/* Status badge overlay */}
                            <div className="absolute top-3 left-3">
                              <span className="border border-blue-500 text-blue-400 px-2 py-1 text-xs rounded bg-black/50">
                                Talk
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                              Civic Tech Meetup
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-400 text-base leading-relaxed">
                              Un incontro per esplorare strumenti e pratiche di partecipazione digitale.
                            </p>
                          </div>
                          
                          {/* Date - Top Right */}
                          <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                            <span className="text-purple-400 text-sm">12 Nov 2025</span>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* Data for Cities Workshop */}
                    <article className="py-6 border-b border-gray-800 last:border-b-0">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Image Section */}
                        <div className="lg:w-64 lg:flex-shrink-0">
                          <div className="relative h-48 lg:h-40 bg-gradient-to-br from-green-900 to-teal-900 rounded-lg overflow-hidden">
                            {/* Data workshop image placeholder */}
                            <div className="w-full h-full bg-gradient-to-br from-green-800 via-teal-800 to-cyan-900 relative">
                              <div className="absolute top-6 left-8 w-12 h-2 bg-green-400 opacity-40"></div>
                              <div className="absolute top-12 left-6 w-16 h-2 bg-teal-400 opacity-30"></div>
                              <div className="absolute top-18 left-10 w-8 h-2 bg-cyan-400 opacity-35"></div>
                              <div className="absolute bottom-8 right-6 w-6 h-6 bg-green-300 rounded opacity-25"></div>
                            </div>
                            {/* Status badge overlay */}
                            <div className="absolute top-3 left-3">
                              <span className="border border-yellow-500 text-yellow-400 px-2 py-1 text-xs rounded bg-black/50">
                                Workshop
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                              Data for Cities Workshop
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-400 text-base leading-relaxed">
                              Hands-on workshop exploring how open data can improve urban services and citizen engagement.
                            </p>
                          </div>
                          
                          {/* Date - Top Right */}
                          <div className="flex flex-col items-end">
                            <span className="text-purple-400 text-sm font-medium">28 Feb 2024</span>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* AI & Servizi Pubblici */}
                    <article className="py-6 border-b border-gray-800 last:border-b-0">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Image Section */}
                        <div className="lg:w-64 lg:flex-shrink-0">
                          <div className="relative h-48 lg:h-40 bg-gradient-to-br from-red-900 to-orange-900 rounded-lg overflow-hidden">
                            {/* AI conference image placeholder */}
                            <div className="w-full h-full bg-gradient-to-br from-red-800 via-orange-800 to-yellow-900 relative">
                              <div className="absolute top-8 left-12 w-3 h-3 bg-red-400 rounded-full opacity-40"></div>
                              <div className="absolute top-16 left-8 w-5 h-5 bg-orange-400 rounded-full opacity-30"></div>
                              <div className="absolute bottom-12 right-8 w-4 h-4 bg-yellow-400 rounded-full opacity-35"></div>
                              <div className="absolute center w-8 h-1 bg-orange-300 opacity-25 transform rotate-45"></div>
                            </div>
                            {/* Status badge overlay */}
                            <div className="absolute top-3 left-3">
                              <span className="border border-red-500 text-red-400 px-2 py-1 text-xs rounded bg-black/50">
                                Conference
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                              AI & Servizi Pubblici
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-400 text-base leading-relaxed">
                              Conference on artificial intelligence applications in public administration and citizen services.
                            </p>
                          </div>
                          
                          {/* Date - Top Right */}
                          <div className="flex flex-col items-end">
                            <span className="text-purple-400 text-sm font-medium">15 Mar 2024</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}