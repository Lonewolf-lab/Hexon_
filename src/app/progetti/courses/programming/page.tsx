"use client";

import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";


// Programming course data: title, image, and a very short description
const programmingCourses = [
  {
    title: "Java Development Full Stack",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&w=600&q=80",
    description: "Full stack web apps with Java (Spring Boot, REST, SQL, more)."
  },
  {
    title: "Introduction to Python Programming",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&w=600&q=80",
    description: "Your first step in Python—no experience needed."
  },
  {
    title: "Advanced Python Techniques",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=600&q=80",
    description: "Speed, efficiency, and power-user tricks in Python."
  },
  {
    title: "JavaScript for Beginners",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&w=600&q=80",
    description: "Start coding for the web from zero with JS."
  },
  {
    title: "Modern JavaScript (ES6+)",
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&w=600&q=80",
    description: "All the new features, syntax, and JS power."
  },
  {
    title: "React.js Essentials",
    image: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&w=600&q=80",
    description: "UIs, components, and hooks with React from scratch."
  },
  {
    title: "Node.js Backend Development",
    image: "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&w=600&q=80",
    description: "Backends, APIs, microservices in Node.js and Express."
  },
  {
    title: "Full-Stack Web Development",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&w=600&q=80",
    description: "The complete path: frontend, backend, and devops."
  },
  {
    title: "Data Structures & Algorithms",
    image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&w=600&q=80",
    description: "Crack interviews and build core logic skills."
  },
  {
    title: "Object-Oriented Programming in Java",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80",
    description: "Java OOP principles and design patterns."
  },
  {
    title: "Generative AI",
    image: "https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&w=600&q=80",
    description: "Large language models for developers."
  },
  {
    title: "Mobile App Development with Flutter",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&w=600&q=80",
    description: "Cross-platform UI with Dart and Flutter."
  },
  {
    title: "Database Design & SQL",
    image: "https://images.pexels.com/photos/159220/database-database-server-disk-storage-159220.jpeg?auto=compress&w=600&q=80",
    description: "Relational design, MySQL, and SQL best practices."
  },
  {
    title: "Introduction to APIs & REST",
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80",
    description: "Create, use, and document modern APIs."
  },
  {
    title: "Version Control with Git & GitHub",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&w=600&q=80",
    description: "Code collaboration and versioning, step by step."
  },
  {
    title: "Python for Data Science",
    image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&w=600&q=80",
    description: "Clean, analyze, and visualize data using Python."
  },
  {
    title: "Machine Learning with Python",
    image: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&w=600&q=80",
    description: "Build predictive ML models using scikit-learn."
  },
  {
    title: "Artificial Intelligence Fundamentals",
    image: "https://images.pexels.com/photos/586342/pexels-photo-586342.jpeg?auto=compress&w=600&q=80",
    description: "Core AI concepts, applications, and ethics."
  },
  {
    title: "Deep Learning with TensorFlow",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80",
    description: "Neural networks and DL models with TensorFlow."
  },
  {
    title: "Web Development with Vue.js",
    image: "https://images.pexels.com/photos/164279/pexels-photo-164279.jpeg?auto=compress&w=600&q=80",
    description: "Vue from the ground up — SPA, reactivity, and more."
  },
  {
    title: "Advanced React.js & Hooks",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80",
    description: "Context, custom hooks, and advanced state."
  },
  {
    title: "Express.js & Node.js APIs",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80",
    description: "Powerful backend APIs in Express and Node.js."
  },
  {
    title: "TypeScript Essentials",
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80",
    description: "Type-safe JavaScript development with TS."
  },
  {
    title: "Progressive Web Apps (PWA) Development",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=600&q=80",
    description: "Offline-first, installable web apps—complete PWA guide."
  },
  {
    title: "Docker & Containerization for Developers",
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80",
    description: "Docker for shipping, scaling, and modern devops."
  },
  {
    title: "Microservices Architecture",
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80",
    description: "Design, build, and manage microservices.",
  },
  {
    title: "Cybersecurity Basics for Programmers",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80",
    description: "Security essentials every coder must know."
  },
  {
    title: "Cloud Computing with AWS",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80",
    description: "Learn cloud basics and deploy using AWS."
  },
  {
    title: "Functional Programming in JavaScript",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600&q=80",
    description: "Lambda, higher-order, and functional patterns in JS."
  },
  {
    title: "Competitive Programming & Problem Solving",
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80",
    description: "Sharpen skills, master DSA, win contests."
  },
];

export default function ProgrammingCoursesPage() {
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
    {programmingCourses.map((course, idx) => (
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
