'use client';

import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const businessCourses = [
  { title: "Fundamentals of Entrepreneurship", description: "Start and grow your business.", image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&w=600&q=80" },
  { title: "Business Planning & Strategy", description: "Create effective strategies.", image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&w=600&q=80" },
  { title: "Financial Accounting Basics", description: "Manage your finances effectively.", image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "Corporate Finance Essentials", description: "Understand corporate finance basics.", image: "https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&w=600&q=80" },
  { title: "Leadership & Management Skills", description: "Develop leadership tactics to manage teams.", image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&w=600&q=80" },
  { title: "Business Communication & Negotiation", description: "Master negotiation and communication.", image: "https://images.pexels.com/photos/159220/pexels-photo-159220.jpeg?auto=compress&w=600&q=80" },
  { title: "Startup Funding & Investment", description: "Learn how to fund your startup.", image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
  { title: "Project Management Fundamentals", description: "Plan and manage your projects effectively.", image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&w=600&q=80" },
  { title: "Agile & Scrum for Beginners", description: "Introduction to Agile and Scrum practices.", image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&w=600&q=80" },
  { title: "Business Analytics with Excel", description: "Analyze data with Excel tools.", image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&w=600&q=80" },
  { title: "Operations Management", description: "Efficient operational strategies.", image: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&w=600&q=80" },
  { title: "Human Resources Basics", description: "Fundamentals of HR management.", image: "https://images.pexels.com/photos/586342/pexels-photo-586342.jpeg?auto=compress&w=600&q=80" },
  { title: "Risk Management & Decision Making", description: "Assess and manage business risks.", image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "E-Commerce Business Strategies", description: "Grow your online store effectively.", image: "https://images.pexels.com/photos/164279/pexels-photo-164279.jpeg?auto=compress&w=600&q=80" },
  { title: "International Business & Trade", description: "Expand business globally.", image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "Advanced Leadership & People Management", description: "Advanced skills for managing teams.", image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
  { title: "Strategic Decision-Making Techniques", description: "Make better strategic choices.", image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "Business Negotiation Masterclass", description: "Master negotiation skills.", image: "https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&w=600&q=80" },
  { title: "Corporate Strategy & Competitive Analysis", description: "Analyze and strategize effectively.", image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "Advanced Financial Modeling", description: "Build advanced financial models.", image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
  { title: "Mergers & Acquisitions Basics", description: "Learn M&A fundamentals.", image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&w=600&q=80" },
  { title: "Business Law Essentials", description: "Understanding business law basics.", image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&w=600&q=80" },
  { title: "Lean Startup Methodology", description: "Efficient startup building strategies.", image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
  { title: "Advanced Project Management", description: "Manage complicated projects.", image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "Supply Chain Management", description: "Optimize your supply chain.", image: "https://images.pexels.com/photos/164279/pexels-photo-164279.jpeg?auto=compress&w=600&q=80" },
  { title: "Business Intelligence & Analytics", description: "Drive decisions with BI.", image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
  { title: "Organizational Behavior", description: "Understand work behavior.", image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "Change Management Fundamentals", description: "Manage organizational change.", image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&w=600&q=80" },
  { title: "Strategic Marketing for Business", description: "Market your business effectively.", image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
  { title: "Innovation & Product Development", description: "Create innovative products.", image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&w=600&q=80" },
];

export default function BusinessCoursesPage() {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="pt-[120px] pb-24">
          <section className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">Programming Courses</h1>
            <p className="text-gray-400 text-center max-w-xl mx-auto">
              Launch your journey or upskill to the next level—choose a programming path and start learning.
            </p>
          </section>
          <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-0 max-w-7xl mx-auto px-4">
      {businessCourses.map((course, idx) => (
        <CardContainer className="inter-var" key={idx}>
          <CardBody
            className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/20 border border-gray-700 w-full h-auto rounded-xl p-8 transition-all duration-300"
            style={{ width: '28rem', height: '24rem' }}  // Bigger width and height
          >
            <CardItem
              translateZ="50"
              className="text-lg font-bold dark:text-white/90 text-white"
            >
              {course.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-400 text-sm max-w-sm mt-2"
            >
              {course.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={course.image}
                height="1000"
                width="1000"
                className="h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300"  // increased height from 44 to 56
                alt={course.title}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal border border-emerald-500/40 hover:bg-emerald-600/30 hover:text-white transition-colors dark:text-white/80"
              >
                View Details
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-emerald-600 dark:bg-white dark:text-black text-white text-xs font-bold border border-white/10 hover:bg-emerald-700 transition-colors"
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
