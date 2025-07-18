/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "General English",
    description: "In this course, you will build strong foundations in grammar, vocabulary, and language skills for everyday communication.",
    image: "/courses/general-english.jpg",
    link: "/general-english",
    level: "For Every level"
  },
  {
    id: 2,
    title: "English Conversation",
    description: "In our conversation courses, you will practice speaking English with confidence and fluency.",
    image: "/courses/english-conversation.jpg",
    link: "/english-conversation",
    level: "For Intermediate level"
  },
  {
    id: 3,
    title: "Business English",
    description: "Through our Business English courses, you will master the language and communication skills needed for professional success.",
    image: "/courses/business-english.jpg",
    link: "/business-english",
    level: "For Advanced level"
  }
];

export default function CoursesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      className="relative h-[calc(100vh-50px)] w-full bg-gradient-to-r from-gray-900 via-gray-800 to-red-900 overflow-hidden"
      role="region"
      aria-labelledby="courses-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <h2 
                id="courses-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Discover Our Courses
              </h2>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                &ldquo;Learn the secrets of mastering the American accent and speak 
                fluently with &lsquo;Accent&rsquo; a book specially designed for beginners 
                eager to speak English confidently and fluently. This book provides 
                insights into the phonetic difference&rdquo;
              </p>

              {/* Search Bar */}
              <div className="relative">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search For Courses"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-md px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex space-x-3">
                {courses.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to course ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Course Cards */}
            <div className="relative">
              <div className="space-y-6">
                {filteredCourses.map((course, index) => (
                  <div
                    key={course.id}
                    className={`relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 ${
                      index === currentSlide ? 'ring-2 ring-red-500' : ''
                    }`}
                  >
                    {/* Course Image Background */}
                    <div className="relative h-80">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black/60"></div>
                      
                      {/* Arabic Text Banner */}
                      <div className="absolute top-6 right-6 left-6">
                        <div className="bg-red-700/90 backdrop-blur-sm px-6 py-4 rounded-lg">
                          <div className="text-center">
                            <div className="text-white text-lg font-bold mb-1">
                              {course.title === "General English" && "المحادثات الفردية"}
                              {course.title === "English Conversation" && "برنامج المحادثة للكبار"}
                              {course.title === "Business English" && "طور مهاراتك في الإنجليزية"}
                            </div>
                            <div className="text-white/90 text-sm font-medium">
                              {course.title === "General English" && "ONE-TO-ONE SESSIONS"}
                              {course.title === "English Conversation" && "ENGLISH CONVERSATION COURSES"}
                              {course.title === "Business English" && "مع ENGLISHER"}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Course Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-white">
                            {course.title}
                          </h3>
                          
                          <p className="text-gray-200 text-sm leading-relaxed">
                            {course.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                              <span className="text-white text-sm font-medium">
                                {course.level}
                              </span>
                            </div>
                            
                            <Link
                              href={course.link}
                              className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
                            >
                              <span className="text-sm font-medium">Learn More</span>
                              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 