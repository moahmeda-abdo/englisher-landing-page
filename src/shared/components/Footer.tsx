"use client"
import { HiOutlineMail } from "react-icons/hi";
import { TbPhoneCall } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { ImLinkedin2 } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from 'next/link'
import { handleWhatsAppClick } from "../utils";

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-white pt-12 pb-4 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
        {/* Left: Logo & Description */}
        <div className="flex-[1.5] min-w-[250px] flex flex-col items-start mb-8 md:mb-0">
          <img src="/logo.png" alt="Englisher Logo" className="h-10 mb-6" />
          <p className="text-base text-white/80 max-w-md leading-relaxed">
            Learn the secrets of American pronunciation and speak fluently with Accent, a book designed specifically for beginners who want to speak English fluently and confidently.
          </p>
        </div>
        {/* Center: Quick Links */}
        <div className="flex-1 min-w-[200px] flex flex-col items-start">
          <h3 className="font-bold text-xl mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/blogs" className="hover:text-white">Blogs</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact Us</Link>
            <Link href="/general-english" className="hover:text-white">Courses</Link>
            <Link href="/placement-test/speaking" className="hover:text-white">Placement Test</Link>
          </div>
        </div>
        {/* Right: Contact Us */}
        <div className="flex-1 min-w-[220px] flex flex-col items-center md:items-start">
          <h3 className="font-bold text-xl mb-4">Contact Us</h3>
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2">
              {/* Phone icon */}
              <TbPhoneCall className="w-5 h-5 text-red-600" />
              <span className="text-white/80">+201000041191</span>
            </div>
            <div className="flex items-center gap-2">
              {/* Email icon */}
              <HiOutlineMail className="w-5 h-5 text-red-600" />
              <span className="text-white/80">info@englisherofficial.com</span>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex gap-7 mt-2">
            {/* WhatsApp */}
            <button type="button" onClick={handleWhatsAppClick} aria-label="WhatsApp" className="hover:text-red-600 cursor-pointer">
              <BsWhatsapp />
            </button>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/englisher/" target="_blank" aria-label="LinkedIn" className="hover:text-red-600">
              <ImLinkedin2 />
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/share/19iYbJytcT/" target="_blank" aria-label="Facebook" className="hover:text-red-600">
              <CgFacebook />
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/englisherofficial/" target="_blank" aria-label="Instagram" className="hover:text-red-600">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center text-white/80 text-sm mt-12">
        Englisher © 2025. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
