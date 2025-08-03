/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types"; 
import { Autoplay } from "swiper/modules";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import testimonialsData from "@/shared/data/testimonials.json";

import "swiper/css";
import { useLocale } from "next-intl";
import { cn } from "@/lib/classnames/cn";

const TestimonialsSection = () => {
  const locale = useLocale();
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const {testimonials} = testimonialsData

  const totalPages = testimonials.length;

  const goToPage = (index: number) => {
    swiperRef.current?.slideToLoop(index);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 fill-current text-red-500" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 fill-current text-red-500" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-4 h-4 fill-current text-gray-300"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <section className="text-white py-16" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            {locale === "en" && <><span className="text-red-500">Clients&apos;</span> Testimonials</>}
            {locale === "ar" && <><span className="text-red-500">شهادات العملاء</span></>}
          </h2>

          {/* ✅ New Navigation */}
          <div className="flex items-center gap-3 order-2 sm:order-1" dir="ltr">
            <button
              onClick={() => goToPage((currentPage - 1 + totalPages) % totalPages)}
              className="w-[18px] h-[18px] cursor-pointer rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <BiLeftArrowAlt />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${index === currentPage
                      ? "bg-red-600"
                      : "bg-gray-300 hover:bg-gray-400"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={() => goToPage((currentPage + 1) % totalPages)}
              className="w-[18px] h-[18px] cursor-pointer rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <BiRightArrowAlt />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrentPage(swiper.realIndex)}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="!h-auto">
              <div className="bg-white text-black rounded-lg p-6 !h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        {locale === "en" && <><span className="text-red-500">Mr{testimonial.gender === "male" ? "" : "s"}.</span>  {testimonial.name}</>}
                        {locale === "ar" && <><span className="text-red-500">{testimonial.nameAr}</span> </>}
                      </h3>
                      <p className="text-gray-600 text-sm">{locale === "en" ? testimonial.title : testimonial.titleAr}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {locale === "en" ? testimonial.content : testimonial.contentAr}
                  </p>
                </div>
                <div className={cn("flex items-center gap-2", locale == "ar" && 'justify-end')}dir="ltr">
                  <span className="text-sm font-semibold">
                    ({testimonial.rating})
                  </span>
                  <div className="flex gap-1">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
