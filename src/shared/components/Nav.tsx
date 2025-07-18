/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";
import React, { useState } from "react";

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="w-full bg-black text-white px-4 sm:px-8 py-2 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="block">
          <img
            src="/logo.png"
            alt="Englisher - English Language Learning Platform"
            className="h-8 sm:h-10 w-24 sm:w-32 object-contain rounded"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-base font-normal">
            <li>
              <Link href="/" className="hover:text-red-500 font-bold text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-500">
                About
              </Link>
            </li>
            {/* Courses Dropdown */}
            <li className="relative group">
              <button
                className="flex items-center gap-1 hover:text-red-500"
                tabIndex={0}
              >
                Courses
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded-xl shadow-lg z-20 p-6 flex flex-col gap-8 text-center text-2xl font-normal opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                {courses.map((course) => (
                  <Link
                    key={course.name}
                    href={course.href}
                    className="hover:text-red-500 transition-colors duration-150"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </li>
            {/* Placement Test Dropdown */}
            <li className="relative group">
              <button
                className="flex items-center gap-1 hover:text-red-500"
                tabIndex={0}
              >
                Placement Test
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-white text-black rounded-xl shadow-lg z-20 p-6 flex flex-col gap-8 text-center text-2xl font-normal opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                {placementTests.map((test) => (
                  <Link
                    key={test.name}
                    href={test.href}
                    className="hover:text-red-500 transition-colors duration-150"
                  >
                    {test.name}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-red-500">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Right Side: Language & Contact */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center gap-2 bg-transparent rounded px-2 py-1">
            <span className="text-xl" role="img" aria-label="United States flag">🇺🇸</span>
            <span className="font-medium">ENG</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {/* Contact Us Button */}
          <Link href="/contact" className="ml-2 px-6 py-2 bg-white text-black rounded-lg font-medium shadow hover:bg-gray-100 transition-colors">
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="py-4 space-y-4">
          <Link 
            href="/" 
            className="block py-2 px-4 hover:bg-gray-800 rounded font-bold text-red-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="block py-2 px-4 hover:bg-gray-800 rounded hover:text-red-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          
          {/* Mobile Courses Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('courses')}
              className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-800 rounded hover:text-red-500"
            >
              Courses
              <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'courses' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`ml-4 space-y-2 transition-all duration-200 ${activeDropdown === 'courses' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              {courses.map((course) => (
                <Link
                  key={course.name}
                  href={course.href}
                  className="block py-2 px-4 hover:bg-gray-800 rounded hover:text-red-500 text-sm"
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
              onClick={() => toggleDropdown('placement')}
              className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-800 rounded hover:text-red-500"
            >
              Placement Test
              <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'placement' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`ml-4 space-y-2 transition-all duration-200 ${activeDropdown === 'placement' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              {placementTests.map((test) => (
                <Link
                  key={test.name}
                  href={test.href}
                  className="block py-2 px-4 hover:bg-gray-800 rounded hover:text-red-500 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {test.name}
                </Link>
              ))}
            </div>
          </div>

          <Link 
            href="/blogs" 
            className="block py-2 px-4 hover:bg-gray-800 rounded hover:text-red-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blogs
          </Link>

          {/* Mobile Language & Contact */}
          <div className="border-t border-gray-700 pt-4 mt-4 space-y-4">
            <div className="flex items-center gap-2 px-4 py-2">
              <span className="text-xl" role="img" aria-label="United States flag">🇺🇸</span>
              <span className="font-medium">ENG</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
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
