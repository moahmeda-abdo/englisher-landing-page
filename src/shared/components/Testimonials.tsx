/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mr. Ahmad Mohammed",
      title: "English language lecturer",
      image: "/placeholder.png",
      content: "The book offers practical exercises and examples to enhance pronunciation and build confidence in using the language. The book offers practical exercises and examples to enhance pronunciation and build confidence in using the language.",
      rating: 4.3
    },
    {
      id: 2,
      name: "Mr. Ahmad Mohammed",
      title: "English language lecturer",
      image: "/placeholder.png",
      content: "The book offers practical exercises and examples to enhance pronunciation and build confidence in using the language. The book offers practical exercises and examples to enhance pronunciation and build confidence in using the language.",
      rating: 4.3
    },
    {
      id: 3,
      name: "Mr. Ahmad Mohammed",
      title: "English language lecturer",
      image: "/placeholder.png",
      content: "The book offers practical exercises and examples to enhance pronunciation and build confidence in using the language. The book offers practical exercises and examples to enhance pronunciation and build confidence in using the language.",
      rating: 4.3
    },
    {
      id: 4,
      name: "Mr. Ahmad Mohammed",
      title: "English language lecturer",
      image: "/placeholder.png",
      content: "The book offers practical exercises and examples to enhance pronunciation and build confidence in using the language. The book offers practical exercises and examples to enhance pronunciation and build confidence in using the language.",
      rating: 4.3
    },
    {
      id: 5,
      name: "Mr. Ahmad Mohammed",
      title: "English language lecturer",
      image: "/placeholder.png",
      content: "The book offers practical exercises and examples to enhance pronunciation and build confidence in using the language. The book offers practical exercises and examples to enhance pronunciation and build confidence in using the language.",
      rating: 4.3
    },
    {
      id: 6,
      name: "Mr. Ahmad Mohammed",
      title: "English language lecturer",
      image: "/placeholder.png",
      content: "The book offers practical exercises and examples to enhance pronunciation and build confidence in using the language. The book offers practical exercises and examples to enhance pronunciation and build confidence in using the language.",
      rating: 4.3
    },
  ]

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 fill-current text-red-500" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 fill-current text-red-500" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }

    // Add empty stars
    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }

    return stars
  }

  return (
    <section className="text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            <span className="text-red-500">Clients &apos;</span> Testimonials
          </h2>
          
          {/* Updated Navigation */}
          <div className="flex items-center gap-6">
            {/* Left Arrow */}
            <button className="testimonials-button-prev w-10 h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Custom pagination dots */}
            <div className="testimonials-pagination flex gap-4"></div>
            
            {/* Right Arrow */}
            <button className="testimonials-button-next w-10 h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: '.testimonials-button-next',
            prevEl: '.testimonials-button-prev',
          }}
          pagination={{
            el: '.testimonials-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return `<button class="${className} w-3 h-3 rounded-full transition-all duration-300"></button>`
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          loop={true}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white text-black rounded-lg p-6 h-full">
                {/* Profile section */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">
                      <span className="text-red-500">Mr.</span> {testimonial.name.replace('Mr. ', '')}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {testimonial.content}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">({testimonial.rating})</span>
                  <div className="flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Styles */}
        <style jsx>{`
          .testimonials-swiper :global(.swiper-pagination-bullet) {
            background-color: #D1D5DB !important;
            opacity: 1 !important;
            margin: 0 !important;
          }
          .testimonials-swiper :global(.swiper-pagination-bullet-active) {
            background-color: #EF4444 !important;
          }
        `}</style>
      </div>
    </section>
  )
}

export default Testimonials 