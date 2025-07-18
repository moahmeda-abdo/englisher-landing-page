/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/classnames/cn";
import Container from "@/shared/components/Container";

export default function AboutUsSection() {
  return (
    <section
      className="relative w-full bg-[#F3F3F3] overflow-hidden min-h-[calc(100vh-50px)] flex items-center justify-center py-8"
      role="region"
      aria-labelledby="about-us-heading">
      <Container className="h-fit">
        <div className="h-full">
          <div className="px-4 sm:px-8 w-full h-full relative">
            {/* Main Image with Englisher logo */}
            <div className="relative flex flex-col lg:block">
              <div
                className="relative mx-auto lg:mx-0"
                style={{ width: "min(1026.97px, 90vw)" }}>
                <div className="relative">
                  <img
                    src="/home/about-us.png"
                    alt="English learning environment with modern workspace"
                    className="w-full object-contain lg:object-cover rounded-lg"
                    style={{ height: "min(653px, 50vh)" }}
                  />
                </div>
              </div>

              <div
                className={cn(
                  "bg-white opacity-90 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-lg shadow-xl z-10",
                  "max-h-[500px] max-w-[700px] min-h-[400px] mx-auto -mt-[20vh] lg:mt-0",
                  "lg:absolute lg:bottom-[-200px] lg:right-[-50px] lg:transform lg:-translate-x-10 lg:mx-0"
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
                      About Us
                    </h2>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                      Founded in 2019, Englisher is a premier online academy
                      dedicated to enhancing English and communication skills
                      through comprehensive Business English, Accent Training,
                      and Conversational English courses. We provide expert
                      training for both individuals and corporate clients,
                      offering tailored programs to meet diverse needs.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-red-500 mb-1">
                        +12000
                      </div>
                      <div className="text-gray-600 text-xs">
                        learner and listener
                      </div>
                    </div>
                    <div className="text-center">
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
                    </div>
                  </div>

                  <div>
                    <Link
                      href="/about"
                      className="inline-block bg-black text-white px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg text-xs sm:text-sm">
                      Learn More
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
