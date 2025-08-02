'use client';

import React, { useState, useEffect } from "react";
import { BsMouse, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { CgChevronDoubleDown } from "react-icons/cg";
import Link from "next/link";
import { useTranslations } from "use-intl";
import { EducationalOrganizationStructuredData } from "./StructuredData";

const heroSlides = [
  {
    id: 1,
    tagKey: "heroTag1",
    titleKey: "heroTitle1",
    descriptionKey: "heroDescription1",
    buttonTextKey: "heroButtonText1",
    buttonLink: "/about",
  },
  {
    id: 2,
    tagKey: "heroTag2",
    titleKey: "heroTitle2",
    descriptionKey: "heroDescription2",
    buttonTextKey: "heroButtonText2",
    buttonLink: "/general-english",
  },
  {
    id: 3,
    tagKey: "heroTag3",
    titleKey: "heroTitle3",
    descriptionKey: "heroDescription3",
    buttonTextKey: "heroButtonText3",
    buttonLink: "/english-conversation",
  },
  {
    id: 4,
    tagKey: "heroTag4",
    titleKey: "heroTitle4",
    descriptionKey: "heroDescription4",
    buttonTextKey: "heroButtonText4",
    buttonLink: "/business-english",
  },
  {
    id: 5,
    tagKey: "heroTag5",
    titleKey: "heroTitle5",
    descriptionKey: "heroDescription5",
    buttonTextKey: "heroButtonText5",
    buttonLink: "/phonetics",
  },
];

const handleScrollDown = () => {
  window.scrollBy({ top: 700, behavior: "smooth" });
};

export default function HeroSlider() {
  const t = useTranslations();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const current = heroSlides[currentSlide];

  return (
    <>
      <EducationalOrganizationStructuredData />

      <section
        className="relative h-[calc(100vh-50px)] w-full overflow-hidden"
        role="banner"
        aria-label={t("heroAriaHeroSection")}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black to-[#ff747e] z-10 opacity-15" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            background: `url(/home/hero.png) no-repeat center center`,
            backgroundSize: "cover",
          }}
          role="img"
          aria-label={t("heroAriaBackground")}
        ></div>

        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-8">
            <div className="w-full lg:max-w-[70%]">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                <span className="text-red-500">{t(current.tagKey)}</span>{" "}
                <span className="text-white">{t(current.titleKey)}</span>
              </h1>

              <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {t(current.descriptionKey)}
              </p>

              <div className="mb-12">
                <Link
                  href={current.buttonLink}
                  className="inline-block bg-white text-black px-8 py-2 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                  aria-label={`${t(current.buttonTextKey)} - ${t(current.tagKey)}`}
                >
                  {t(current.buttonTextKey)}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <nav
          className="absolute left-0 bottom-30 md:bottom-24 md:left-[12%] z-30 mx-auto px-8"
          aria-label={t("heroSliderNavigation")}
        >
          <div className="flex justify-center items-center gap-3 md:gap-2" dir="ltr">
            <BsFillArrowLeftCircleFill className="cursor-pointer hover:text-red-200" onClick={prevSlide} />
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide ? "bg-red-500" : "bg-white/80 hover:bg-white/95"
                  }`}
                aria-label={t(slide.tagKey)}
                aria-current={index === currentSlide ? "true" : "false"}
              />
            ))}
            <BsFillArrowRightCircleFill className="cursor-pointer hover:text-red-200" onClick={nextSlide} />
          </div>
        </nav>

        <div className="absolute -bottom-[50px] lg:bottom-[-75px] left-1/2 transform -translate-x-1/2 z-30">
          <div
            onClick={handleScrollDown}
            className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] cursor-pointer flex items-start justify-center rounded-full bg-black/20 border-0 border-t-[1px] border-x-[1px] border-x-transparent border-t-red-400"
          >
            <div className="flex flex-col items-center mt-5 animate-bounce">
              <BsMouse className="text-[22px] lg:text-[34px]" />
              <CgChevronDoubleDown />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
