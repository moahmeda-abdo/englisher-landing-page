"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { EducationalOrganizationStructuredData } from "./StructuredData";

interface HeroSlide {
  id: number;
  tag: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    tag: "Speak With Confidence",
    title:
      "Your number #1 online academy for learning professional English and speaking with confidence",
    description:
      "Start your English learning journey with confidence — wherever you are, we're with you every step of the way.",
    buttonText: "Learn More",
    buttonLink: "/about",
    backgroundImage: "/hero-bg-1.jpg",
  },
  {
    id: 2,
    tag: "Master English",
    title:
      "Transform your career with professional English communication skills",
    description:
      "Join thousands of students who have improved their English proficiency and advanced their careers.",
    buttonText: "Start Learning",
    buttonLink: "/general-english",
    backgroundImage: "/hero-bg-2.jpg",
  },
  {
    id: 3,
    tag: "Global Community",
    title: "Connect with learners worldwide and practice English together",
    description:
      "Experience interactive learning with our global community of English learners and expert instructors.",
    buttonText: "Join Community",
    buttonLink: "/english-conversation",
    backgroundImage: "/hero-bg-3.jpg",
  },
  {
    id: 4,
    tag: "Business English",
    title: "Excel in your professional life with business English mastery",
    description:
      "Develop the language skills you need for presentations, meetings, and professional communication.",
    buttonText: "Explore Courses",
    buttonLink: "/business-english",
    backgroundImage: "/hero-bg-4.jpg",
  },
  {
    id: 5,
    tag: "Perfect Pronunciation",
    title: "Speak clearly and confidently with perfect English pronunciation",
    description:
      "Master the sounds of English with our comprehensive phonetics and pronunciation program.",
    buttonText: "Start Speaking",
    buttonLink: "/phonetics",
    backgroundImage: "/hero-bg-5.jpg",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <>
      {/* SEO: Structured Data for Hero Section */}
      <EducationalOrganizationStructuredData />

      {/* Hero Slider Section */}
      <section
        className="relative h-[calc(100vh-50px)] w-full overflow-hidden"
        role="banner"
        aria-label="English Learning Academy Hero Section">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            background: `url(/home/hero.png) no-repeat center center`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          role="img"
          aria-label="English learning background"></div>

        {/* Content Container */}
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="max-w-3xl">
              {/* Tag */}
              <div className="mb-6">
                <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium tracking-wide">
                  {currentSlideData.tag}
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-red-500">Your number #1</span>{" "}
                <span className="text-white">
                  online academy for learning professional English and speaking
                  with confidence
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {currentSlideData.description}
              </p>

              {/* CTA Button */}
              <div className="mb-12">
                <Link
                  href={currentSlideData.buttonLink}
                  className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                  aria-label={`${currentSlideData.buttonText} - ${currentSlideData.tag}`}>
                  {currentSlideData.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <nav
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          aria-label="Hero slider navigation">
          <div className="flex space-x-3">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-red-500 w-8"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}: ${slide.tag}`}
                aria-current={index === currentSlide ? "true" : "false"}
              />
            ))}
          </div>
        </nav>
      </section>
    </>
  );
}
