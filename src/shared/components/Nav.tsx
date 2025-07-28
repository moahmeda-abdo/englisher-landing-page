/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/classnames/cn";
import Image from "next/image";
import { usePathname } from "next/navigation";

const courses = [
  { name: "General English", href: "/general-english" },
  { name: "English Conversation", href: "/english-conversation" },
  { name: "Business English", href: "/business-english" },
  { name: "Phonetics and Pronunciation", href: "/phonetics" },
];

const placementTests = [
  { name: "Speaking Placement Test", href: "/placement-test/speaking" },
  { name: "Oxford Placement Test", href: "/placement-test/oxford" },
];

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={cn(
        "w-full bg-black text-white px-4 sm:px-8 py-2 sticky top-0 z-50",
        "after:content-[''] after:block after:absolute after:top-[calc(100%)] after:w-full after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-red-500 after:to-90% after:to-transparent"
      )}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="block">
          {/* <img
            src="/logo.png"
            alt="Englisher - English Language Learning Platform"
            className="h-8 sm:h-10 w-24 sm:w-32 object-contain rounded"
          /> */}
          <video 
            src="/videos/logo-animation.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-8 sm:h-10 w-24 sm:w-32 object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-start ml-14">
          <ul className="flex items-center gap-14 text-base font-normal text-gray-200">
            <li>
              <Link
                href="/"
                className={cn(
                  "hover:text-red-500 font-medium",
                  isActive("/") && "text-red-500"
                )}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={cn(
                  "hover:text-red-500 font-medium",
                  isActive("/about") && "text-red-500"
                )}
              >
                About
              </Link>
            </li>

            {/* Courses Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-red-500" tabIndex={0}>
                Courses
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-20 p-6 flex flex-col gap-8 text-center text-base font-normal opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                {courses.map((course) => (
                  <Link
                    key={course.name}
                    href={course.href}
                    className={cn(
                      "hover:text-red-500 transition-colors duration-150",
                      isActive(course.href) && "text-red-500 font-medium"
                    )}
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </li>

            {/* Placement Test Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-red-500" tabIndex={0}>
                Placement Test
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-20 p-6 flex flex-col gap-8 text-center text-base font-normal opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                {placementTests.map((test) => (
                  <Link
                    key={test.name}
                    href={test.href}
                    className={cn(
                      "hover:text-red-500 transition-colors duration-150",
                      isActive(test.href) && "text-red-500 font-medium"
                    )}
                  >
                    {test.name}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link
                href="/blogs"
                className={cn(
                  "hover:text-red-500 font-medium",
                  isActive("/blogs") && "text-red-500"
                )}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 bg-transparent rounded px-2 py-1">
            <Image src="/images/icons/us.png" alt="United States flag" width={24} height={24} />
            <span className="font-medium">ENG</span>
          </div>
          <Link
            href="/contact"
            className="ml-2 px-6 py-2 bg-white text-black rounded-lg font-medium shadow hover:bg-gray-100 transition-colors"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out absolute w-[calc(100%-2rem)] bg-black ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="py-4 space-y-4">
          <Link
            href="/"
            className={cn(
              "block py-2 px-4 hover:bg-gray-800 rounded font-medium",
              isActive("/") && "text-red-500"
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={cn(
              "block py-2 px-4 hover:bg-gray-800 rounded hover:text-red-500",
              isActive("/about") && "text-red-500"
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          {/* Mobile Courses Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("courses")}
              className={cn(
                "flex items-center justify-between w-full py-2 px-4 hover:bg-gray-800 rounded hover:text-red-500",
                // isActive("/general-english") || isActive("/english-conversation") || isActive("/business-english") || isActive("/phonetics") ? "text-red-500" : "" 
              )}
            >
              Courses
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === "courses" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`ml-4 space-y-2 transition-all duration-200 ${
                activeDropdown === "courses"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {courses.map((course) => (
                <Link
                  key={course.name}
                  href={course.href}
                  className={cn(
                    "block py-2 px-4 hover:bg-gray-800 rounded text-sm",
                    isActive(course.href) && "text-red-500"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {course.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Placement Test Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("placement")}
              className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-800 rounded hover:text-red-500"
            >
              Placement Test
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === "placement" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`ml-4 space-y-2 transition-all duration-200 ${
                activeDropdown === "placement"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {placementTests.map((test) => (
                <Link
                  key={test.name}
                  href={test.href}
                  className={cn(
                    "block py-2 px-4 hover:bg-gray-800 rounded text-sm",
                    isActive(test.href) && "text-red-500"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {test.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/blogs"
            className={cn(
              "block py-2 px-4 hover:bg-gray-800 rounded hover:text-red-500",
              isActive("/blogs") && "text-red-500"
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blogs
          </Link>

          <div className="border-t border-gray-700 pt-4 mt-4 space-y-4">
            <div className="flex items-center gap-2 px-4 py-2">
              <Image src="/images/icons/us.png" alt="US Flag" width={24} height={24} />
              <span className="font-medium">ENG</span>
            </div>
            <Link
              href="/contact"
              className="block mx-4 px-6 py-2 bg-white text-black rounded-lg font-medium text-center shadow hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
