/* eslint-disable @next/next/no-img-element */
"use client"

import { useTranslations } from "next-intl";

const OurPartnersSection = () => {
  const t = useTranslations();

  return (
    <section className="w-full py-16 px-2 flex flex-col items-center justify-center text-black gap-4" data-aos="fade-up">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        {t("ourPartnersTitle")}
      </h2>
      {/* <p className="text-gray-600 md:max-w-[40%] text-center mb-4 text-xs md:text-sm lg:text-base">
        {t("ourPartnersDescription")}
      </p> */}

      <div dir="ltr" className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-center">
        {/* London Partner */}
        <div className="relative bg-white rounded-lg shadow p-8 flex items-center justify-center w-full max-w-md min-h-[200px] overflow-hidden">
          <div className="absolute left-[44%] top-[-50%] w-full h-full bg-[url('/images/assets/squares_white_bg.jpg')] bg-cover bg-left rotate-90 origin-top-left" />
          <img
            src="/about/london.png"
            alt={t("ourPartnersLondonAlt")}
            className="h-20 md:h-24 w-auto object-contain mr-6 relative z-10"
          />
        </div>

        {/* Oxford Partner */}
        <div className="relative bg-white rounded-lg shadow p-8 flex items-center justify-center w-full max-w-md min-h-[200px] overflow-hidden">
          <div className="absolute right-[44%] top-[-50%] w-full h-full bg-[url('/images/assets/squares_white_bg.jpg')] bg-cover bg-left -rotate-90 origin-top-right" />
          <img
            src="/about/oxford.png"
            alt={t("ourPartnersOxfordAlt")}
            className="h-20 md:h-24 w-auto object-contain mr-6 relative z-10"
          />
        </div>
      </div>
    </section>
  );
}

export default OurPartnersSection;
