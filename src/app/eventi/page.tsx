"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Search } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Page() {
  const [selectedTopic, setSelectedTopic] = useState("assignment-topics");

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-[270px]">
        {/* Hero Section */}
        <section className="bg-black">
          <div className="w-full px-0 py-8">
            <h1 className="text-[5rem] md:text-[10rem] font-thin text-white leading-none mb-0 pl-4">
              Assignments
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
                <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                  <SelectTrigger className="bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-gray-500 w-full">
                    <SelectValue placeholder="Assignment Topics" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border border-gray-700 text-white">
                    <SelectItem value="assignment-topics">Assignment Topics</SelectItem>
                    <SelectItem value="database-design">Database Design</SelectItem>
                    <SelectItem value="sql-queries">SQL Queries</SelectItem>
                    <SelectItem value="data-modeling">Data Modeling</SelectItem>
                    <SelectItem value="normalization">Normalization</SelectItem>
                    <SelectItem value="indexing-performance">Indexing & Performance</SelectItem>
                    <SelectItem value="transactions-concurrency">Transactions & Concurrency</SelectItem>
                    <SelectItem value="nosql-databases">NoSQL Databases</SelectItem>
                    <SelectItem value="data-warehousing">Data Warehousing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Right Column - Events Content (3/4 = 75%) */}
              <div className="lg:col-span-3">
                <div className="space-y-8">
                  {/* Assignments list */}
                  <div className="space-y-8">
                    {/* Programming Assignment */}
                    <article className="py-6 border-b border-gray-800 last:border-b-0">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Image Section */}
                        <div className="lg:w-64 lg:flex-shrink-0">
                          <div className="relative h-48 lg:h-40 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-lg overflow-hidden">
                            {/* Programming assignment image placeholder */}
                            <div className="w-full h-full bg-gradient-to-br from-blue-800 via-indigo-800 to-purple-900 relative">
                              <div className="absolute top-4 left-4 w-8 h-2 bg-blue-400 opacity-40 transform rotate-12"></div>
                              <div className="absolute top-8 left-6 w-6 h-2 bg-indigo-400 opacity-35 transform -rotate-12"></div>
                              <div className="absolute bottom-6 right-6 w-10 h-10 bg-purple-400 rounded opacity-25"></div>
                              <div className="absolute center w-12 h-12 border border-blue-300 rounded opacity-20"></div>
                            </div>
                            {/* Status badge overlay */}
                            <div className="absolute top-3 left-3">
                              <span className="border border-blue-500 text-blue-400 px-2 py-1 text-xs rounded bg-black/50">
                                Database Design
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                              Database Schema Design Project
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-400 text-base leading-relaxed">
                              Design a comprehensive database schema for an e-learning platform. Create entity-relationship diagrams, define tables, relationships, and constraints following best practices for database design.
                            </p>
                          </div>
                          
                          {/* Date and Action - Top Right */}
                          <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                            <span className="text-purple-400 text-sm">Due: 15 Dec 2024</span>
                            <a href="/assignment1" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block">
                              Start Assignment
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* Data Analysis Assignment */}
                    <article className="py-6 border-b border-gray-800 last:border-b-0">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Image Section */}
                        <div className="lg:w-64 lg:flex-shrink-0">
                          <div className="relative h-48 lg:h-40 bg-gradient-to-br from-green-900 to-teal-900 rounded-lg overflow-hidden">
                            {/* Data analysis assignment image placeholder */}
                            <div className="w-full h-full bg-gradient-to-br from-green-800 via-teal-800 to-cyan-900 relative">
                              <div className="absolute top-6 left-8 w-12 h-2 bg-green-400 opacity-40"></div>
                              <div className="absolute top-12 left-6 w-16 h-2 bg-teal-400 opacity-30"></div>
                              <div className="absolute top-18 left-10 w-8 h-2 bg-cyan-400 opacity-35"></div>
                              <div className="absolute bottom-8 right-6 w-6 h-6 bg-green-300 rounded opacity-25"></div>
                            </div>
                            {/* Status badge overlay */}
                            <div className="absolute top-3 left-3">
                              <span className="border border-green-500 text-green-400 px-2 py-1 text-xs rounded bg-black/50">
                                SQL Queries
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                              Advanced SQL Query Optimization
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-400 text-base leading-relaxed">
                              Master complex SQL queries including joins, subqueries, window functions, and CTEs. Optimize query performance and analyze execution plans for large datasets in educational databases.
                            </p>
                          </div>
                          
                          {/* Date and Action - Top Right */}
                          <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                            <span className="text-purple-400 text-sm font-medium">Due: 20 Dec 2024</span>
                            <a href="/assignment2" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block">
                              Start Assignment
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* AI Integration Assignment */}
                    <article className="py-6 border-b border-gray-800 last:border-b-0">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Image Section */}
                        <div className="lg:w-64 lg:flex-shrink-0">
                          <div className="relative h-48 lg:h-40 bg-gradient-to-br from-red-900 to-orange-900 rounded-lg overflow-hidden">
                            {/* AI assignment image placeholder */}
                            <div className="w-full h-full bg-gradient-to-br from-red-800 via-orange-800 to-yellow-900 relative">
                              <div className="absolute top-8 left-12 w-3 h-3 bg-red-400 rounded-full opacity-40"></div>
                              <div className="absolute top-16 left-8 w-5 h-5 bg-orange-400 rounded-full opacity-30"></div>
                              <div className="absolute bottom-12 right-8 w-4 h-4 bg-yellow-400 rounded-full opacity-35"></div>
                              <div className="absolute center w-8 h-1 bg-orange-300 opacity-25 transform rotate-45"></div>
                            </div>
                            {/* Status badge overlay */}
                            <div className="absolute top-3 left-3">
                              <span className="border border-red-500 text-red-400 px-2 py-1 text-xs rounded bg-black/50">
                                Data Modeling
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                              Conceptual Data Modeling Workshop
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-400 text-base leading-relaxed">
                              Create conceptual, logical, and physical data models for complex business scenarios. Use UML diagrams and ERD tools to represent data relationships and business rules effectively.
                            </p>
                          </div>
                          
                          {/* Date and Action - Top Right */}
                          <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                            <span className="text-purple-400 text-sm font-medium">Due: 25 Dec 2024</span>
                            <a href="/assignment3" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block">
                              Start Assignment
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* UI/UX Design Assignment */}
                    <article className="py-6 border-b border-gray-800 last:border-b-0">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Image Section */}
                        <div className="lg:w-64 lg:flex-shrink-0">
                          <div className="relative h-48 lg:h-40 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg overflow-hidden">
                            {/* UI/UX design image placeholder */}
                            <div className="w-full h-full bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-900 relative">
                              <div className="absolute top-4 left-6 w-10 h-1 bg-indigo-400 opacity-40 transform rotate-12"></div>
                              <div className="absolute top-8 left-4 w-6 h-1 bg-purple-400 opacity-35 transform -rotate-12"></div>
                              <div className="absolute bottom-8 right-4 w-8 h-8 bg-pink-400 rounded opacity-30"></div>
                              <div className="absolute center-x center-y w-12 h-12 border-2 border-indigo-300 rounded-full opacity-20"></div>
                            </div>
                            {/* Status badge overlay */}
                            <div className="absolute top-3 left-3">
                              <span className="border border-indigo-500 text-indigo-400 px-2 py-1 text-xs rounded bg-black/50">
                                Normalization
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                              Database Normalization Techniques
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-400 text-base leading-relaxed">
                              Apply normalization principles to eliminate data redundancy and improve database efficiency. Practice 1NF, 2NF, 3NF, and BCNF with real-world educational data scenarios.
                            </p>
                          </div>
                          
                          {/* Date and Action - Top Right */}
                          <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                            <span className="text-purple-400 text-sm font-medium">Due: 30 Dec 2024</span>
                            <a href="/assignment4" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block">
                              Start Assignment
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* Database Management Assignment */}
                    <article className="py-6 border-b border-gray-800 last:border-b-0">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Image Section */}
                        <div className="lg:w-64 lg:flex-shrink-0">
                          <div className="relative h-48 lg:h-40 bg-gradient-to-br from-emerald-900 to-blue-900 rounded-lg overflow-hidden">
                            {/* Database assignment image placeholder */}
                            <div className="w-full h-full bg-gradient-to-br from-emerald-800 via-teal-800 to-blue-900 relative">
                              <div className="absolute top-6 left-8 w-4 h-4 bg-emerald-400 rounded-full opacity-40"></div>
                              <div className="absolute top-12 right-6 w-6 h-6 bg-teal-400 rounded-full opacity-30"></div>
                              <div className="absolute bottom-6 left-4 w-8 h-2 bg-blue-400 opacity-35"></div>
                              <div className="absolute bottom-10 right-8 w-3 h-3 bg-emerald-300 rounded-full opacity-25"></div>
                            </div>
                            {/* Status badge overlay */}
                            <div className="absolute top-3 left-3">
                              <span className="border border-emerald-500 text-emerald-400 px-2 py-1 text-xs rounded bg-black/50">
                                Indexing & Performance
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                              Database Indexing & Performance Tuning
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-400 text-base leading-relaxed">
                              Implement various indexing strategies to optimize database performance. Analyze query execution plans, create composite indexes, and monitor database performance metrics for educational systems.
                            </p>
                          </div>
                          
                          {/* Date and Action - Top Right */}
                          <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                            <span className="text-purple-400 text-sm font-medium">Due: 05 Jan 2025</span>
                            <a href="/assignment5" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block">
                              Start Assignment
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* Web Development Assignment */}
                    <article className="py-6 border-b border-gray-800 last:border-b-0">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Image Section */}
                        <div className="lg:w-64 lg:flex-shrink-0">
                          <div className="relative h-48 lg:h-40 bg-gradient-to-br from-amber-900 to-rose-900 rounded-lg overflow-hidden">
                            {/* Web development image placeholder */}
                            <div className="w-full h-full bg-gradient-to-br from-amber-800 via-orange-800 to-rose-900 relative">
                              <div className="absolute top-8 left-6 w-5 h-5 bg-amber-400 rounded-full opacity-40"></div>
                              <div className="absolute top-4 right-8 w-3 h-3 bg-orange-400 rounded-full opacity-35"></div>
                              <div className="absolute bottom-8 left-8 w-7 h-7 bg-rose-400 rounded-full opacity-30"></div>
                              <div className="absolute bottom-4 right-4 w-4 h-4 bg-amber-300 rounded-full opacity-25"></div>
                            </div>
                            {/* Status badge overlay */}
                            <div className="absolute top-3 left-3">
                              <span className="border border-amber-500 text-amber-400 px-2 py-1 text-xs rounded bg-black/50">
                                Transactions & Concurrency
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                              Transaction Management & Concurrency Control
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-400 text-base leading-relaxed">
                              Master ACID properties, transaction isolation levels, and concurrency control mechanisms. Implement locking strategies and handle deadlock scenarios in multi-user database environments.
                            </p>
                          </div>
                          
                          {/* Date and Action - Top Right */}
                          <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                            <span className="text-purple-400 text-sm font-medium">Due: 10 Jan 2025</span>
                            <a href="/assignment6" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block">
                              Start Assignment
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* Data Analytics Assignment */}
                    <article className="py-6 border-b border-gray-800 last:border-b-0">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Image Section */}
                        <div className="lg:w-64 lg:flex-shrink-0">
                          <div className="relative h-48 lg:h-40 bg-gradient-to-br from-violet-900 to-fuchsia-900 rounded-lg overflow-hidden">
                            {/* Data analytics image placeholder */}
                            <div className="w-full h-full bg-gradient-to-br from-violet-800 via-purple-800 to-fuchsia-900 relative">
                              <div className="absolute top-6 left-4 w-8 h-1 bg-violet-400 opacity-40 transform rotate-45"></div>
                              <div className="absolute top-10 left-8 w-6 h-1 bg-purple-400 opacity-35 transform -rotate-45"></div>
                              <div className="absolute bottom-6 right-6 w-6 h-6 bg-fuchsia-400 rounded opacity-30"></div>
                              <div className="absolute center w-10 h-10 border border-violet-300 rounded opacity-20"></div>
                            </div>
                            {/* Status badge overlay */}
                            <div className="absolute top-3 left-3">
                              <span className="border border-violet-500 text-violet-400 px-2 py-1 text-xs rounded bg-black/50">
                                NoSQL Databases
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                              NoSQL Database Implementation
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-400 text-base leading-relaxed">
                              Explore document, key-value, column-family, and graph databases. Design and implement NoSQL solutions for educational content management, comparing MongoDB, Redis, and Neo4j approaches.
                            </p>
                          </div>
                          
                          {/* Date and Action - Top Right */}
                          <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                            <span className="text-purple-400 text-sm font-medium">Due: 20 Jan 2025</span>
                            <a href="/assignment7" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block">
                              Start Assignment
                            </a>
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