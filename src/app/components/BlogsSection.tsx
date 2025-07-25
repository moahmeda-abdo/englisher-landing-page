"use client";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"; 
import React, { useState } from "react";
import Link from "next/link";
import Container from "@/shared/components/Container";
import blogsData from "@/shared/data/blogs.json";
import Image from "next/image";

export default function BlogsSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const { blogs } = blogsData;
  const blogsPerPage = 2;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const currentBlogs = blogs.slice(
    currentPage * blogsPerPage,
    (currentPage + 1) * blogsPerPage
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="w-full bg-[#F3F3F3] py-8 lg:py-12 min-h-[500px] lg:min-h-[700px]">
      <Container className="h-full">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-8 gap-4">
            <div className="w-full lg:max-w-1/2">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-black mb-2 lg:mb-4">
                Our Blogs
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                A concise guide to mastering American English pronunciation with
                essential techniques, practical exercises, and strategies for
                confident, fluent communication.
              </p>
            </div>
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:flex-none">
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
                  type="text"
                  placeholder="Search For Article ..."
                  className="px-4 py-2 pl-9 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-full lg:w-80 placeholder:text-gray-500 block h-[45px]"
                />
              </div>
            </div>
          </div>

          {/* Blogs Container */}
          <div className="flex-1 relative">
            <div className="relative h-full flex items-center justify-center">
              {/* Blog Cards */}
              <div className="w-full">
                <div className="flex gap-4 flex-col lg:flex-row">
                  {currentBlogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="cursor-pointer w-full lg:w-1/2 flex flex-col sm:flex-row-reverse lg:flex-row-reverse items-stretch bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-[#0C0C0C] truncate max-w-[400px] text-lg lg:text-[24px] leading-[150%] mb-2 sm:mb-3 font-semibold line-clamp-2">
                            {blog.title}
                          </h3>
                          <p className="text-[#555555] text-sm sm:text-base leading-[150%] mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-4">
                            {blog.content}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                          <span>Published at</span>
                          <span className="font-medium">{blog.publishedDate} - {blog.publishedTime}</span>
                        </div>
                      </div>
                      <div className="w-full sm:w-48 lg:w-56 h-48 sm:h-auto flex-shrink-0">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={250}
                          height={250}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-6 lg:mt-8 gap-4">
            {/* Navigation Controls */}
            <div className="flex items-center gap-3 order-2 sm:order-1">
              {/* Previous Button */}
              <button
                onClick={() =>
                  goToPage((currentPage - 1 + totalPages) % totalPages)
                }
                className="w-[18px] h-[18px] cursor-pointer rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Previous">
                <BiLeftArrowAlt />
              </button>

              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentPage
                        ? "bg-red-600"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => goToPage((currentPage + 1) % totalPages)}
                className="w-[18px] h-[18px] cursor-pointer rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Next">
                <BiRightArrowAlt />
              </button>
            </div>

            {/* Discover More Button */}
            <Link
              href="/blogs"
              className="bg-black text-white px-7 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors order-1 sm:order-2 w-full sm:w-auto text-center">
              Discover More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
