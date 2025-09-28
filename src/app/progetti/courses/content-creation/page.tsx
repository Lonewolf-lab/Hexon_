'use client';

import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const contentCreationCourses = [
  { title: "Introduction to Blogging & Writing", description: "Start your writing journey.", image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&w=600&q=80" },
  { title: "Social Media Content Strategy", description: "Craft engaging social media plans.", image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&w=600&q=80" },
  { title: "Video Production for Beginners", description: "Basics of video production.", image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=600&q=80" },
  { title: "Advanced Video Editing with Premiere Pro", description: "Professional video editing techniques.", image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&w=600&q=80" },
  { title: "Podcasting Essentials", description: "Start your own podcast.", image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&w=600&q=80" },
  { title: "Photography Basics for Content Creators", description: "Capture great images for content.", image: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&w=600&q=80" },
  { title: "Graphic Design with Canva", description: "Design graphics easily with Canva.", image: "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&w=600&q=80" },
  { title: "Adobe Photoshop Mastery", description: "Master Photoshop techniques.", image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&w=600&q=80" },
  { title: "Adobe Illustrator for Beginners", description: "Vector design fundamentals.", image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&w=600&q=80" },
  { title: "Content Planning & Scheduling", description: "Organize your content efficiently.", image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "Storytelling for Digital Media", description: "Craft compelling stories online.", image: "https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&w=600&q=80" },
  { title: "Branding & Visual Identity", description: "Create powerful brand visuals.", image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&w=600&q=80" },
  { title: "SEO Content Writing", description: "Write content that ranks.", image: "https://images.pexels.com/photos/159220/pexels-photo-159220.jpeg?auto=compress&w=600&q=80" },
  { title: "TikTok & Instagram Reels Creation", description: "Create viral short videos.", image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
  { title: "Live Streaming & Webinar Production", description: "Engage your audience live.", image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&w=600&q=80" },
  { title: "Advanced Blogging Techniques", description: "Take your blog to the next level.", image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&w=600&q=80" },
  { title: "Scriptwriting for Videos & Podcasts", description: "Perfect your scripts.", image: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&w=600&q=80" },
  { title: "Advanced Photography & Lighting Techniques", description: "Professional photography skills.", image: "https://images.pexels.com/photos/586342/pexels-photo-586342.jpeg?auto=compress&w=600&q=80" },
  { title: "Adobe After Effects Motion Graphics", description: "Create stunning motion graphics.", image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "Cinematography Fundamentals", description: "Film-making basics.", image: "https://images.pexels.com/photos/164279/pexels-photo-164279.jpeg?auto=compress&w=600&q=80" },
  { title: "Audio Editing with Audacity / Logic Pro", description: "Edit audio professionally.", image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "Graphic Design Principles & Theory", description: "Understand design fundamentals.", image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
  { title: "Advanced Canva & Figma Design", description: "Master modern design tools.", image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=600&q=80" },
  { title: "Typography & Layout Design", description: "Make visually compelling layouts.", image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
  { title: "Content Monetization Strategies", description: "Turn content into income streams.", image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "YouTube Channel Growth & Strategy", description: "Grow your channel audience.", image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80" },
  { title: "Instagram Storytelling Techniques", description: "Engage followers with stories.", image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80" },
  { title: "Building an Online Portfolio", description: "Showcase your best work.", image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&w=600&q=80" },
  { title: "Virtual Reality Content Creation Basics", description: "Create content for VR.", image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&w=600&q=80" },
  { title: "Interactive Content & Gamification", description: "Increase engagement with interactive content.", image: "https://images.pexels.com/photos/159220/pexels-photo-159220.jpeg?auto=compress&w=600&q=80" },
];

export default function ContentCreationCoursesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-[120px] pb-24">
        <section className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">Content Creation Courses</h1>
          <p className="text-gray-400 text-center max-w-xl mx-auto">
            Learn content creation and expand your creative skills
          </p>
        </section>
        <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-0 max-w-7xl mx-auto px-4">
    {contentCreationCourses.map((course, idx) => (
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