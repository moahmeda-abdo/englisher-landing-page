'use client';

import React, { useState, useEffect } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { cn } from "@/lib/classnames/cn";
import Container from "@/shared/components/Container";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "use-intl";

export default function CoursesSection() {
  const t = useTranslations();
  const locale = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const courses = [
    {
      id: 1,
      title: t("courseGeneralTitle"),
      description: t("courseGeneralDescription"),
      link: "/general-english",
      level: t("courseGeneralLevel"),
      bg: "bg-[url(/images/assets/courses_one_to_one.png)]"
    },
    {
      id: 2,
      title: t("courseConversationTitle"),
      description: t("courseConversationDescription"),
      link: "/english-conversation",
      level: t("courseConversationLevel"),
      bg: "bg-[url(/images/assets/courses_conversation.png)]"
    },
    {
      id: 3,
      title: t("courseBusinessTitle"),
      description: t("courseBusinessDescription"),
      link: "/business-english",
      level: t("courseBusinessLevel"),
      bg: "bg-[url(/images/assets/courses_business.png)]"
    },
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredCourses.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredCourses.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
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
        <Image src="/images/assets/squares_white_bg.jpg" alt="" fill className="object-cover mix-blend-multiply" />
      </div>

      <div className="relative z-20 h-full w-full flex flex-col gap-8 justify-center xl:flex-row" dir="ltr">
        <Container className="w-full xl:w-1/2 !max-w-[720px] xl:!pl-[200px] flex items-center" >
          <div className="space-y-8 w-full" dir="rtl">
            <h2 id="courses-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {t("coursesTitle")}
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">
              {t("coursesSubtitle")}
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
                    placeholder={t("coursesSearchPlaceholder")}
                    className="px-4 py-2 pl-9 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-full placeholder:text-gray-200 placeholder:font-md block h-[45px]"
                  />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className={cn("flex justify-center lg:justify-start items-center gap-3 md:gap-2", locale === "en" ? "lg:justify-start" : "lg:justify-end")} dir="ltr">
              <BsFillArrowLeftCircleFill className="text-[15px] cursor-pointer hover:text-red-200 text-white" onClick={prevSlide} />
              {courses.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide
                    ? "bg-red-500"
                    : "bg-white/80 hover:bg-white/95"
                    }`}
                  aria-label={`Go to course ${index + 1}`}
                />
              ))}
              <BsFillArrowRightCircleFill className="text-[15px] cursor-pointer hover:text-red-200 text-white" onClick={nextSlide} />
            </div>
          </div>
        </Container>

        {/* Right Side */}
        <div className="xl:flex-1 flex items-center justify-center xl:justify-end h-1/2 sm:h-auto">
          {filteredCourses.map((course, index) => (
            <Link href={course.link || "/"} key={course.id} className="group">
              <div
                className={cn(
                  `relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300`,
                  index === currentSlide ? 'transform scale-[105%] z-[100] w-[170px]' : 'w-[100px]',
                  'bg-cover bg-center aspect-[9/16] sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[230px] 2xl:w-[340px] 3xl:w-[370px]',
                  course.bg,
                  index === 0 && 'rounded-l-md',
                  'flex flex-col justify-end items-start'
                )}
              >
                <div className="absolute w-full h-full bg-gradient-to-t from-black/60 to-transparent hover:from-[#5b0107a3] hover:from-20% hover:to-black/50 transition-colors ease-linear duration-300 inset-0" />
                <div className="z-20">
                  <div className="flex flex-col gap-2 p-3" dir={locale === "ar" ? "rtl" : "ltr"}>
                    <h3 className={cn("text-sm md:text-base lg:text-lg sm:text-white font-semibold text-transparent", index === currentSlide && "text-white")}>
                      {course.title}
                    </h3>
                    <p className={cn(
                      "text-xs md:text-sm sm:text-gray-200 text-transparent overflow-hidden transition-all duration-[1000] ease-in-out line-clamp-2 group-hover:line-clamp-none max-h-10 group-hover:max-h-40",
                      index === currentSlide && "text-gray-200"
                    )}>
                      {course.description}
                    </p>
                    <span dir="ltr" className={cn("text-xs md:text-sm sm:text-gray-100 text-transparent", index === currentSlide && "text-gray-100")}>
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
