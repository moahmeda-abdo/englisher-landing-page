/* eslint-disable @next/next/no-img-element */
'use client';
import React from "react";
import Link from "next/link";
import { useTranslations } from "use-intl";
import { HiOutlineMail } from "react-icons/hi";
import { TbPhoneCall } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { ImLinkedin2 } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import { handleWhatsAppClick } from "../../shared/utils";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="bg-[#181818] text-white pt-12 pb-4 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
        {/* Left: Logo & Description */}
        <div className="flex-[1.5] min-w-[250px] flex flex-col items-start mb-8 md:mb-0">
          <img src="/logo.png" alt="Englisher Logo" className="h-10 mb-6" />
          <p className="text-base text-white/80 max-w-md leading-relaxed">
            {t("footerDescription")}
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex-1 min-w-[200px] flex flex-col items-start">
          <h3 className="font-bold text-xl mb-4">{t("footerQuickLinks")}</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-white/80">
            <Link href="/" className="hover:text-white">{t("footerHome")}</Link>
            <Link href="/blogs" className="hover:text-white">{t("footerBlogs")}</Link>
            <Link href="/about" className="hover:text-white">{t("footerAbout")}</Link>
            <Link href="/contact" className="hover:text-white">{t("footerContact")}</Link>
            <Link href="/general-english" className="hover:text-white">{t("footerCourses")}</Link>
            <Link href="/placement-test/speaking" className="hover:text-white">{t("footerPlacementTest")}</Link>
          </div>
        </div>

        {/* Right: Contact Us */}
        <div className="flex-1 min-w-[220px] flex flex-col items-center md:items-start">
          <h3 className="font-bold text-xl mb-4">{t("footerContactTitle")}</h3>
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2">
              <TbPhoneCall className="w-5 h-5 text-red-600" />
              <span className="text-white/80">+201000041191</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineMail className="w-5 h-5 text-red-600" />
              <span className="text-white/80">info@englisherofficial.com</span>
            </div>
          </div>
          <div className="flex gap-7 mt-2">
            <button type="button" onClick={handleWhatsAppClick} aria-label="WhatsApp" className="hover:text-red-600 cursor-pointer">
              <BsWhatsapp />
            </button>
            <a href="https://www.linkedin.com/company/englisher/" target="_blank" aria-label="LinkedIn" className="hover:text-red-600">
              <ImLinkedin2 />
            </a>
            <a href="https://www.facebook.com/share/19iYbJytcT/" target="_blank" aria-label="Facebook" className="hover:text-red-600">
              <CgFacebook />
            </a>
            <a href="https://www.instagram.com/englisherofficial/" target="_blank" aria-label="Instagram" className="hover:text-red-600">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-white/80 text-sm mt-12">
        {t("footerCopyright")}
      </div>
    </footer>
  );
};

export default Footer;
