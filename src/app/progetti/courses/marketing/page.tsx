'use client';

import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const marketingCourses = [
  { title: "Marketing Fundamentals", 
    description: "Learn the basics of marketing.", 
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" 
},
  { title: "Digital Marketing Essentials",
    description: "Master digital marketing tools.",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" 
},
  { title: "Social Media Marketing Strategy", 
    description: "Create effective social media campaigns.", 
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=600&q=80" 
},
  { title: "Search Engine Optimization (SEO)", 
    description: "Improve your website's ranking.", 
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&w=600&q=80" 
},
  { title: "Content Marketing for Beginners", 
    description: "Start your content marketing journey.", 
    image: "https://images.pexels.com/photos/159220/pexels-photo-159220.jpeg?auto=compress&w=600&q=80" 
},
  { title: "Email Marketing & Automation", 
    description: "Automate your email campaigns.", 
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" 
},
  { title: "Influencer Marketing Strategy", 
    description: "Leverage influencers for growth.", 
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" 
},
  { title: "Paid Ads (Google & Facebook Ads)", 
    description: "Create efficient paid advertising.", 
    image: "https://images.pexels.com/photos/164279/pexels-photo-164279.jpeg?auto=compress&w=600&q=80" 
},
  { title: "Branding & Positioning", 
    description: "Build a strong brand identity.", 
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" 
},
  { title: "Marketing Analytics & Metrics", 
    description: "Track your marketing performance.", 
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
  { title: "Copywriting for Marketing", 
    description: "Write compelling marketing copy.", 
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "Growth Hacking Techniques", 
    description: "Boost growth with creative hacks.", 
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&w=600&q=80" },
  { title: "Video Marketing Strategy", 
    description: "Create engaging marketing videos.", 
    image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&w=600&q=80" },
  { title: "Customer Relationship Management (CRM)", 
    description: "Manage customer relations effectively.", 
    image: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&w=600&q=80" },
  { title: "Marketing Psychology & Consumer Behavior", 
    description: "Understand your customers better.", 
    image: "https://images.pexels.com/photos/586342/pexels-photo-586342.jpeg?auto=compress&w=600&q=80" },
  { title: "Advanced SEO Techniques", 
    description: "Take SEO skills to the next level.", 
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "Social Media Analytics & Reporting", 
    description: "Analyze and report social media data.", 
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "TikTok Marketing Mastery", 
    description: "Grow your TikTok presence.", 
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
  { title: "Advanced Email Marketing Campaigns", 
    description: "Master email campaign strategies.", 
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&w=600&q=80" },
  { title: "Facebook & Instagram Ads Deep Dive", 
    description: "Boost ads performance.", 
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
  { title: "YouTube Marketing Strategy", 
    description: "Grow and monetize your channel.", 
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
  { title: "Branding & Rebranding Strategies", 
    description: "Keep your brand fresh.", 
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&w=600&q=80" },
  { title: "Influencer Outreach & Collaboration", 
    description: "Build influencer partnerships.", 
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&w=600&q=80" },
  { title: "Digital Marketing Funnels", 
    description: "Create marketing funnels that convert.", 
    image: "https://images.pexels.com/photos/159220/pexels-photo-159220.jpeg?auto=compress&w=600&q=80" },
  { title: "Customer Retention & Loyalty Programs", 
    description: "Keep your customers coming back.", 
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
  { title: "Advanced Copywriting & Persuasive Writing", 
    description: "Write to persuade and sell.", 
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "Mobile Marketing Strategy", 
    description: "Reach customers on mobile.", 
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "E-commerce Marketing Techniques", 
    description: "Boost your online store sales.", 
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
  { title: "Marketing Automation Tools", 
    description: "Automate your marketing.", 
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&w=600&q=80" },
  { title: "Behavioral Marketing & Consumer Insights", 
    description: "Understand consumer behavior deeply.", 
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
];

export default function MarketingCoursesPage() {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="pt-[120px] pb-24">
          <section className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">Marketing Courses</h1>
            <p className="text-gray-400 text-center max-w-xl mx-auto">
              Master digital marketing strategies and grow your business online.
            </p>
          </section>
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
              {marketingCourses.map((course, idx) => (
                <CardContainer className="inter-var h-full" key={idx}>
                  <CardBody
                    className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/20 border border-gray-700 h-full flex flex-col rounded-xl p-6 transition-all duration-300"
                  >
                    <div className="flex-1 flex flex-col">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold dark:text-white/90 text-white line-clamp-2 h-16 flex items-center"
                      >
                        {course.title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-300 text-base mt-2 mb-4 line-clamp-2 h-12"
                      >
                        {course.description}
                      </CardItem>
                      <CardItem 
                        translateZ="100" 
                        className="w-full mt-auto"
                      >
                        <div className="aspect-w-16 aspect-h-9 w-full">
                          <img
                            src={course.image}
                            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300"
                            alt={course.title}
                          />
                        </div>
                      </CardItem>
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800">
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl text-sm font-medium border border-emerald-500/40 hover:bg-emerald-600/30 hover:text-white transition-colors dark:text-white/80"
                      >
                        View Details
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-emerald-600 dark:bg-white dark:text-black text-white text-sm font-semibold border border-white/10 hover:bg-emerald-700 transition-colors"
                      >
                        Enroll
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }