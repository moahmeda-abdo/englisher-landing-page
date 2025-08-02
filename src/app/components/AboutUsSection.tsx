"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/classnames/cn";
import Container from "@/shared/components/Container";
import { useCountUp } from "@/shared/hooks/useCountUp"
import { useLocale, useTranslations } from "next-intl";

export default function AboutUsSection() {
  const { count, ref } = useCountUp(12000, 1500);
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section
      className="relative w-full bg-[#F3F3F3] overflow-hidden min-h-[calc(100vh-50px)] flex items-center justify-center py-8 px-2 md:px-0"
      role="region"
      aria-labelledby="about-us-heading">
      <Container className="h-fit">
        <div className="h-full">
          <div className="px-4 sm:px-8 w-full h-full relative">
            {/* Main Image with Englisher logo */}
            <div className="relative flex flex-col lg:block">
              <div
                className="relative mx-auto lg:mx-0 md:p-5 lg:bg-white rounded-sm"
                style={{ width: "min(1026.97px, 90vw)" }}>

                {/* top bar */}
                <div className={cn(
                  "absolute top-0 left-0 w-[calc(100%-140px)] h-2 bg-black rounded-xl hidden lg:block"
                )} />

                {/* right top corner*/}
                <div className={cn(
                  "absolute top-0 right-0 w-[110px] h-2 bg-black rounded-xl hidden lg:block",
                  "after:absolute after:top-0 after:right-0 after:h-[110px] after:w-2 after:bg-black after:rounded-xl"
                )} />

                {/* bottom bar */}
                <div className={cn(
                  "absolute bottom-0 right-0 w-[calc(100%-140px)] h-2 bg-black rounded-xl hidden lg:block"
                )} />

                {/* left bottom corner */}
                <div className={cn(
                  "absolute bottom-0 left-0 w-[110px] h-2 bg-black rounded-xl hidden lg:block",
                  "after:absolute after:bottom-0 after:left-0 after:h-[110px] after:w-2 after:bg-black after:rounded-xl"
                )} />

                <div className="relative">
                  <img
                    src={locale == "en" ? "/home/about-us.png" : "/home/about-us-ar.png"}
                    alt="English learning environment with modern workspace"
                    className="w-full object-contain lg:object-cover rounded-lg"
                    style={{ height: "min(653px, 50vh)" }}
                  />
                </div>
              </div>

              <div
                className={cn(
                  "bg-white/80 backdrop-blur-xs p-4 sm:p-6 md:p-8 rounded-lg shadow-xl z-10",
                  "max-h-[500px] max-w-[700px] min-h-[400px] mx-auto -mt-[20vh] lg:mt-0",
                  "lg:absolute lg:bottom-[-150px] lg:transform lg:mx-0",
                  locale === "en" ? ' lg:right-[-50px] lg:-translate-x-10' : ' lg:left-[-50px] lg:translate-x-10'
                )}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                      <span className="text-red-500 text-xs sm:text-sm font-semibold">
                        Englisher
                      </span>
                    </div>

                    <h2
                      id="about-us-heading"
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight mb-4 sm:mb-6">
                      {t("aboutUsSectionTitle")}
                    </h2>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                      {t("aboutUsDescription")}
                    </p>
                  </div>

                  <div className="flex justify-center items-center gap-3 sm:gap-6 mb-6 sm:mb-8">
                    {/* <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8"> */}
                    <div className="text-center">
                      <div className="text-2xl sm:text-4xl font-bold text-red-500 mb-1" ref={ref}>
                        +{count}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {t("aboutUsLearnerCount")}
                      </div>
                    </div>
                    {/* <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-red-500 mb-1">
                        +15
                      </div>
                      <div className="text-gray-600 text-xs">
                        Online Courses
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-red-500 mb-1">
                        +5
                      </div>
                      <div className="text-gray-600 text-xs">
                        E - Books With Audios
                      </div>
                    </div> */}
                  </div>

                  <div>
                    <Link
                      href="/about"
                      className="inline-block bg-black text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg text-xs sm:text-sm">
                      {t("aboutUsLearnMore")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
