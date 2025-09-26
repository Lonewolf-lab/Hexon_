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
              Projects
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
                    <option>Started</option>
                    <option>Completed</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Right Column - Project Content (3/4 = 75%) */}
              <div className="lg:col-span-3">
                <div className="space-y-8">
                  {/* Project Grid */}
                  <div className="space-y-8">
                    {/* App MyLugano Project */}
                    <article className="py-6 border-b border-gray-800 last:border-b-0">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Image Section */}
                        <div className="lg:w-64 lg:flex-shrink-0">
                          <div className="relative h-48 lg:h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
                            {/* Phone mockup */}
                            <div className="relative">
                              <div className="w-20 h-36 bg-white rounded-xl shadow-2xl transform rotate-12 relative overflow-hidden">
                                <div className="absolute top-2 left-2 right-2 h-4 bg-red-500 rounded"></div>
                                <div className="absolute top-8 left-2 right-2 h-2 bg-gray-200 rounded"></div>
                                <div className="absolute top-12 left-2 right-2 h-2 bg-gray-200 rounded"></div>
                                <div className="absolute bottom-4 left-2 right-2 h-6 bg-blue-500 rounded"></div>
                              </div>
                            </div>
                            {/* Status badge overlay */}
                            <div className="absolute top-3 left-3">
                              <span className="border border-yellow-500 text-yellow-400 px-2 py-1 text-xs rounded bg-black/50">
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
                              App MyLugano
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-400 text-base leading-relaxed">
                              A digital ecosystem to get for joy the city and support the local economy.
                            </p>
                          </div>
                          
                          {/* Hashtags - Top Right */}
                          <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                            <span className="text-purple-400 text-sm">#app</span>
                            <span className="text-purple-400 text-sm">#blockchain</span>
                            <span className="text-purple-400 text-sm">#crypto</span>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* Digital Tourism Lab Project */}
                    <article className="py-6 border-b border-gray-800 last:border-b-0">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Image Section */}
                        <div className="lg:w-64 lg:flex-shrink-0">
                          <div className="relative h-48 lg:h-40 bg-gradient-to-br from-blue-900 to-green-900 rounded-lg overflow-hidden">
                            {/* Mountain/landscape image placeholder */}
                            <div className="w-full h-full bg-gradient-to-t from-green-800 via-blue-800 to-blue-600 relative">
                              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-900 to-transparent"></div>
                              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-300 rounded-full opacity-20"></div>
                            </div>
                            {/* Status badge overlay */}
                            <div className="absolute top-3 left-3">
                              <span className="border border-green-500 text-green-400 px-2 py-1 text-xs rounded bg-black/50">
                                Started
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                              Digital Tourism Lab
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-400 text-base leading-relaxed">
                              Sustainable tourism initiatives through digital innovation and community engagement.
                            </p>
                          </div>
                          
                          {/* Hashtags - Top Right */}
                          <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                            <span className="text-purple-400 text-sm">#turismo</span>
                            <span className="text-purple-400 text-sm">#digitaleconsapevole</span>
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