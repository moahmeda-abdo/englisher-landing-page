/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function WhatWeOfferSection() {
  return (
    <section
      className="relative py-20 px-8 overflow-hidden h-[400px]"
      role="region"
      aria-labelledby="what-we-offer-heading">
      
      <img
        src="/home/what-we-offer.png"
        alt=""
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2
          id="what-we-offer-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          What We Offer You
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-300 leading-relaxed mx-auto">
          Personalized English courses, expert instructors, and flexible plans
          — all designed to help you speak with clarity and confidence
        </p>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center items-center space-x-8 opacity-60">
          <div className="w-16 h-0.5 bg-red-500"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-16 h-0.5 bg-red-500"></div>
        </div>
      </div>

      {/* Optional: Floating elements for visual interest */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
    </section>
  );
}
