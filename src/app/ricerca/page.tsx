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
              Research
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
                    <option>Status</option>
                    <option>In Progress</option>
                    <option>Concluded</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Right Column - Project Content (3/4 = 75%) */}
              <div className="lg:col-span-3">
                <div className="space-y-8">
                  {/* Project Card 1 */}
                  <article className="py-6 border-b border-gray-800 last:border-b-0">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Image Section */}
                      <div className="lg:w-64 lg:flex-shrink-0">
                        <div className="relative h-48 lg:h-40 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg overflow-hidden">
                          {/* Robot illustration placeholder */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-blue-400 rounded-full opacity-30"></div>
                            <div className="absolute w-12 h-12 bg-purple-400 rounded-full opacity-40 transform translate-x-4 translate-y-2"></div>
                          </div>
                          {/* Status badge overlay */}
                          <div className="absolute top-3 left-3">
                            <span className="border border-green-500 text-green-400 px-2 py-1 text-xs rounded bg-black/50">
                              In Progress
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          {/* Title */}
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            A robot at Puntocittà in Lugano to study interaction with citizens
                          </h3>
                          
                          {/* Description */}
                          <p className="text-gray-400 text-base leading-relaxed">
                            A robot at Puntocittà (City Service Point) in Lugano to study interaction with citizens
                          </p>
                        </div>
                        
                        {/* Hashtags - Top Right */}
                        <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                          <span className="text-purple-400 text-sm">#AI</span>
                          <span className="text-purple-400 text-sm">#robot</span>
                          <span className="text-purple-400 text-sm">#testing</span>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Project Card 2 */}
                  <article className="py-6 border-b border-gray-800 last:border-b-0">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Image Section */}
                      <div className="lg:w-64 lg:flex-shrink-0">
                        <div className="relative h-48 lg:h-40 bg-gradient-to-br from-green-900 to-blue-900 rounded-lg overflow-hidden">
                          {/* Data visualization placeholder */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="grid grid-cols-3 gap-2">
                              <div className="w-4 h-8 bg-green-400 opacity-60"></div>
                              <div className="w-4 h-12 bg-blue-400 opacity-60"></div>
                              <div className="w-4 h-6 bg-purple-400 opacity-60"></div>
                              <div className="w-4 h-10 bg-green-400 opacity-60"></div>
                              <div className="w-4 h-14 bg-blue-400 opacity-60"></div>
                              <div className="w-4 h-8 bg-purple-400 opacity-60"></div>
                            </div>
                          </div>
                          {/* Status badge overlay */}
                          <div className="absolute top-3 left-3">
                            <span className="border border-gray-500 text-gray-400 px-2 py-1 text-xs rounded bg-black/50">
                              Concluded
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          {/* Title */}
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Open Data Platform
                          </h3>
                          
                          {/* Description */}
                          <p className="text-gray-400 text-base leading-relaxed">
                            Research on open data governance and citizen engagement through digital platforms.
                          </p>
                        </div>
                        
                        {/* Hashtags - Top Right */}
                        <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                          <span className="text-purple-400 text-sm">#divulgazione</span>
                          <span className="text-purple-400 text-sm">#openinnovation</span>
                          <span className="text-purple-400 text-sm">#network</span>
                          <span className="text-purple-400 text-sm">#digitaleconsapevole</span>
                        </div>
                      </div>
                    </div>
                  </article>
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