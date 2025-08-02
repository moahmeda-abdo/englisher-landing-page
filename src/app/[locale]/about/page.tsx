/* eslint-disable @next/next/no-img-element */

import BreadCrumbs from "@/shared/components/BreadCrumbs";
import Container from "@/shared/components/Container";
import { useTranslations, useLocale } from "next-intl";
import React from "react";
import { aboutMetadata, aboutJsonLd } from "./meta";

export const metadata = aboutMetadata;

export default function AboutPage() {
  const t = useTranslations();
  const locale = useLocale();

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
        title={t("aboutBreadcrumbsTitle")}
        items={[
          { title: t("aboutBreadcrumbsHome"), to: "/" },
          { title: t("aboutBreadcrumbsTitle"), to: "/about" },
        ]}
      />

      <Container>
        <section className="min-h-[80vh] flex flex-col md:flex-row text-black">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex items-center justify-center p-6">
            <img
              src="/about/hero.png"
              alt={t("aboutImageHeroAlt")}
              className="w-full rounded-md"
            />
          </div>

          {/* Right: Content */}
          <div className="md:w-1/2 w-full flex flex-col justify-center p-8 gap-6">
            <div className="text-3xl font-extrabold text-red-600 mb-2">
              <img src="/logo.png" alt="Englisher Logo" className="h-[25px]" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("aboutHeading")}
            </h1>

            <p className="text-lg text-gray-700 mb-2">{t("aboutDescription1")}</p>
            <p className="text-lg text-gray-700 mb-6">{t("aboutDescription2")}</p>

            <div className="mt-8" dir="ltr">
              <div className="bg-white rounded-xl flex flex-col md:flex-row justify-between items-center px-8 py-6 gap-6 border border-gray-200">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-red-600">+12000</span>
                  <span className="text-gray-900 text-base">{t("aboutStatsLearners")}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-red-600">+15</span>
                  <span className="text-gray-900 text-base">{t("aboutStatsCourses")}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-red-600">+5</span>
                  <span className="text-gray-900 text-base">{t("aboutStatsEbooks")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="flex flex-col lg:flex-row items-center justify-center py-16 px-2 md:px-0 bg-[#F3F3F3] gap-8 lg:gap-0">
          <div className="flex flex-col gap-8 w-full max-w-xl lg:mr-[-60px] z-10 lg:justify-center lg:h-[766px] lg:py-0 py-8">
            {/* Mission Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-[729px] h-auto lg:h-[325px] lg:w-[729px]">
              <h2 className="text-2xl md:text-[40px] font-bold mb-3 text-black">
                <span className="text-red-600 font-extrabold">
                  {t("aboutMissionTitle").split(" ")[0]}{" "}
                </span>
                {t("aboutMissionTitle").split(" ").slice(1).join(" ")}
              </h2>
              <p className="text-gray-700 text-base md:text-[20px] leading-[180%] mt-[20px]">
                {t("aboutMissionText")}
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-[729px] h-auto lg:h-[325px] lg:w-[729px]">
              <h2 className="text-2xl md:text-[40px] font-bold mb-3 text-black">
                <span className="text-red-600 font-extrabold">
                  {t("aboutVisionTitle").split(" ")[0]}{" "}
                </span>
                {t("aboutVisionTitle").split(" ").slice(1).join(" ")}
              </h2>
              <p className="text-gray-700 text-base md:text-[20px] leading-[180%] mt-[20px]">
                {t("aboutVisionText")}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[70%] flex items-center justify-center">
            <img
              src={locale == "ar" ? "/about/visionAr.png" : "/about/vision.png"}
              alt={t("aboutImageVisionAlt")}
              className="w-full max-w-4xl rounded-lg object-cover h-[400px] md:h-[500px] lg:h-[766px]"
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
          backgroundRepeat: "no-repeat"
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
          {t("aboutPartnersTitle")}
        </h2>

        <div dir="ltr" className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-center">
          {/* Partner 1 */}
          <div className="relative bg-white rounded-lg shadow p-8 flex items-center justify-center w-full max-w-md min-h-[200px] overflow-hidden">
            <div className="absolute left-[44%] top-[-50%] w-full h-full bg-[url('/images/assets/squares_white_bg.jpg')] bg-cover bg-left rotate-90 origin-top-left" />
            <img
              src="/about/london.png"
              alt={t("aboutPartnerLondonAlt")}
              className="h-20 md:h-24 w-auto object-contain mr-6 z-10"
            />
          </div>

          {/* Partner 2 */}
          <div className="relative bg-white rounded-lg shadow p-8 flex items-center justify-center w-full max-w-md min-h-[200px] overflow-hidden">
            <div className="absolute right-[44%] top-[-50%] w-full h-full bg-[url('/images/assets/squares_white_bg.jpg')] bg-cover bg-left -rotate-90 origin-top-right" />
            <img
              src="/about/oxford.png"
              alt={t("aboutPartnerOxfordAlt")}
              className="h-20 md:h-24 w-auto object-contain mr-6 z-10"
            />
          </div>
        </div>
      </section>
    </div>
  );
}