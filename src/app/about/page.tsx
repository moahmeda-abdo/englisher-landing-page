/* eslint-disable @next/next/no-img-element */
import BreadCrumbs from "@/shared/components/BreadCrumbs";
import React from "react";
import { aboutMetadata, aboutJsonLd } from "./meta";
import Container from "@/shared/components/Container";

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <div className="bg-[#F3F3F3]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutJsonLd),
        }}
      />
      <BreadCrumbs
        title="About Englisher"
        items={[
          { title: "Home", to: "/" },
          { title: "About", to: "/about" },
        ]}
      />
      <Container>
        <section className="min-h-[80vh]  flex flex-col md:flex-row  text-black">
          {/* Left: Placeholder Image */}
          <div className="md:w-1/2 w-full flex items-center justify-center p-6">
            <img
              src="/about/hero.png"
              alt="About Englisher Placeholder"
              className="w-full rounded-md"
            />
          </div>
          {/* Right: Content */}
          <div className="md:w-1/2 w-full flex flex-col justify-center p-8 gap-6">
            {/* Logo */}
            <div className="text-3xl font-extrabold text-red-600 mb-2">
              <img src="/logo.png" alt="Englisher Logo" className="h-[25px] " />
            </div>
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Englisher
            </h1>
            {/* Description */}
            <p className="text-lg text-gray-700 mb-2">
              Founded in 2019, Englisher is a premier online academy dedicated
              to enhancing English and communication skills through
              comprehensive Business English, Accent Training, and
              Conversational English courses. We provide expert training for
              both individuals and corporate clients, offering tailored programs
              to meet diverse needs.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With a strong track record of success, we have coached and taught
              thousands of learners from Egypt, Saudi Arabia, and the UAE,
              helping them improve fluency, confidence, and professional
              communication. Our expert instructors deliver engaging,
              interactive lessons designed to refine pronunciation, master
              business jargon, and enhance everyday conversations.
            </p>
            {/* Stats Bar */}
            <div className="mt-8">
              <div className="bg-white rounded-xl flex flex-col md:flex-row justify-between items-center px-8 py-6 gap-6 border border-gray-200">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-red-600">
                    +12000
                  </span>
                  <span className="text-gray-900 text-base">
                    learner and listener
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-red-600">+15</span>
                  <span className="text-gray-900 text-base">
                    Online Courses
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-red-600">+5</span>
                  <span className="text-gray-900 text-base">
                    E - Books With Audios
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="flex flex-col lg:flex-row items-center justify-center py-16 px-2 md:px-0 bg-[#F3F3F3] gap-8 lg:gap-0">
          {/* Cards */}
          <div className="flex flex-col gap-8 w-full max-w-xl lg:mr-[-60px] z-10 lg:justify-center lg:h-[766px] lg:py-0 py-8">
            {/* Mission Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-[729px] h-auto lg:h-[325px] lg:w-[729px]">
              <h2 className="text-2xl md:text-[40px] font-bold mb-3 text-black">
                <span className="text-red-600 font-extrabold">Our </span>Mission
              </h2>
              <p className="text-gray-700 text-base md:text-[20px] leading-[180%] mt-[20px]">
                Our mission is to deliver exceptional Online English courses in
                Egypt, UAE, and Saudi Arabia, led by experienced instructors and
                a robust curriculum. We strive to create a high-quality,
                interactive learning environment that builds confidence and
                practical language skills by focusing on personalized support
                and real-world application.
              </p>
            </div>
            {/* Vision Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-[729px] h-auto lg:h-[325px] lg:w-[729px]">
              <h2 className="text-2xl md:text-[40px] font-bold mb-3 text-black">
                <span className="text-red-600 font-extrabold">Our </span>Vision
              </h2>
              <p className="text-gray-700 text-base md:text-[20px] leading-[180%] mt-[20px]">
                To be the leading provider of virtual English courses in Egypt,
                UAE, and Saudi Arabia, recognized for our innovative teaching
                methods and commitment to excellence in language education,
                while preparing learners to become confident global English
                speakers.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="w-full lg:w-[60%] flex items-center justify-center">
            <img
              src="/about/vision.png"
              alt="Mission and Vision"
              className="w-full max-w-4xl rounded-2xl object-cover h-[400px] md:h-[500px] lg:h-[766px]"
            />
          </div>
        </section>
      </Container>

      {/* Partners Section */}
      <section
        className="w-full bg-gradient-to-br from-[#181617] to-[#6b2327] py-16 px-2 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/about/partners-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
          Our Partners
        </h2>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-center">
          {/* London Partner */}
          <div className="bg-white rounded-lg shadow p-8 flex items-center justify-center w-full max-w-md min-h-[200px]">
            <img
              src="/about/london.png"
              alt="London School of Business Excellence"
              className="h-20 md:h-24 w-auto object-contain mr-6"
            />
          </div>
          {/* Oxford Partner */}
          <div className="bg-white rounded-lg shadow p-8 flex items-center justify-center w-full max-w-md min-h-[200px]">
            <img
              src="/about/oxford.png"
              alt="Oxford Placement Test"
              className="h-20 md:h-24 w-auto object-contain mr-6"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
