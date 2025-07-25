"use client";
import React, { useState, useEffect } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { cn } from "@/lib/classnames/cn";
import Container from "@/shared/components/Container";
import Image from "next/image";

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
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
    const filteredCourses = courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Auto-play functionality
    useEffect(() => {
      if (!isAutoPlaying) return;
  
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % filteredCourses.length);
      }, 5000); // Change slide every 5 seconds
  
      return () => clearInterval(interval);
    }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000)
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredCourses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredCourses.length) % filteredCourses.length);
  };

  return (
    <section
      className="relative h-[calc(100vh-50px)] w-full bg-gradient-to-r from-gray-900 via-gray-800 to-red-900 overflow-hidden px-3 md:px-0"
      role="region"
      aria-labelledby="courses-heading"
    >
      <div className="absolute left-0 top-0 w-full xl:w-[45%] h-full z-10 bg-[url(/images/assets/courses_bg.png)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-[90%] to-[#3a0004] opacity-90" />
      </div>

      <div className="absolute right-0 top-0 w-0 xl:w-[55%] h-full z-10 bg-gradient-to-br from-black to-[90%] to-[#7e0109] opacity-80">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-black to-[90%] to-[#7e0109] opacity-80" /> */}
        <Image src="/images/assets/squares_white_bg.jpg" alt="" fill className="object-cover mix-blend-multiply" />
      </div>

      {/* ✅ FLEX ROW: Left and Right side by side */}
      <div className="relative z-20 h-full w-full flex flex-col gap-8 justify-center xl:flex-row">

        {/* ✅ Left Side */}
        <Container className="w-full xl:w-1/2 !max-w-[720px] xl:!pl-[200px] flex items-center">
          <div className="space-y-8 w-full">
            <h2 id="courses-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Discover Our Courses
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">
              &ldquo;Learn the secrets of mastering the American accent and speak fluently with &lsquo;Accent&rsquo; a book specially designed for beginners eager to speak English confidently and fluently. This book provides insights into the phonetic difference&rdquo;
            </p>

            {/* Search */}
            <div className="relative w-full">
              <div className="flex items-center gap-4 w-full">
                <div className="relative flex-1 lg:flex-none w-full">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    value={searchTerm || ''}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    name="search-courses"
                    type="text"
                    placeholder="Search For Courses ..."
                    className="px-4 py-2 pl-9 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-full placeholder:text-gray-200 placeholder:font-md block h-[45px]"
                  />
                </div>
              </div>
            </div>

            {/* Arrows and Dots */}
            <div className="flex justify-start items-center gap-2">
              <BsFillArrowLeftCircleFill className="text-[15px] cursor-pointer hover:text-red-200" onClick={prevSlide} />
              {courses.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide
                    ? "bg-red-500"
                    : "bg-white/80 hover:bg-white/95"
                    }`}
                  aria-label={`Go to course ${index + 1}`}
                />
              ))}
              <BsFillArrowRightCircleFill className="text-[15px] cursor-pointer hover:text-red-200" onClick={nextSlide} />
            </div>
          </div>
        </Container>

        {/* ✅ Right Side - aligned to screen edge */}
        <div className="xl:flex-1 flex items-center justify-center xl:justify-end">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className={cn(
                `relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300`,
                index === currentSlide ? 'transform scale-[102%] z-[100]' : '',
                'bg-cover bg-center aspect-[9/16] w-[250px] xl:w-[230px] 2xl:w-[340px] 3xl:w-[370px]',
                course.title === 'General English' && 'bg-[url(/images/assets/courses_one_to_one.png)]',
                course.title === 'English Conversation' && 'bg-[url(/images/assets/courses_conversation.png)]',
                course.title === 'Business English' && 'bg-[url(/images/assets/courses_business.png)]',
                index === 0 && 'rounded-l-md',
                // index === filteredCourses.length - 1 && 'rounded-r-md'
              )}
            >
              <div className="absolute w-full h-full bg-gradient-to-t from-black/60 to-transparent  inset-0" />

              <div className="absolute bottom-0 left-0">
                <div className="flex flex-col gap-2 p-3">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-sm text-gray-200 line-clamp-2">{course.description}</p>
                  <span className="text-sm text-gray-100">{course.level} </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
