
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import BreadCrumbs from '@/shared/components/BreadCrumbs';
import Container from '@/shared/components/Container';
import { BsDot } from 'react-icons/bs';
import { cn } from '@/lib/classnames/cn';

export const metadata: Metadata = {
    title: " Oxford Placement Test | Englisher",
};

export default function Page() {
    const t = useTranslations();
    const locale = useLocale();

    const title = t("placementTitle");
    const breadcrumbs = [
        { title: t("placementBreadcrumbsHome"), to: "/" },
        { title: t("placementBreadcrumbsPlacement"), to: "/placement-test/oxford" },
    ];

    const heroImage = t("placementHeroImage");
    const logoImage = t("placementLogoImage");
    const heading = t("placementHeading");
    // const highlight = t("placementHighlight");
    const duration = t("placementDuration");
    const description = t("placementDescription");
    const skills = [
        t("placementSkillsListening"),
        t("placementSkillsGrammar"),
        t("placementSkillsVocabulary"),
        t("placementSkillsPronunciation"),
    ];
    const reportText = t("placementReportText");
    const chartImage = t("placementChartImage");

    return (
        <div className="bg-[#F3F3F3]">
            <BreadCrumbs title={title} items={breadcrumbs} />

            <Container className="min-h-screen py-8 md:py-16 flex items-center justify-center">
                <div className="relative flex justify-center items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-white rounded-md shadow-md w-full overflow-hidden">
                        <div className={cn("absolute top-0 h-[0] w-[30%] lg:h-[40%] lg:w-[40%] bg-black z-0 rounded-tl-md hidden sm:block", locale === "ar" ? 'right-0' : 'left-0')} />

                        {/* Mobile Layout */}
                        <div className="flex flex-col lg:hidden relative z-10">
                            <div className="w-full h-48 sm:h-64">
                                <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
                            </div>

                            <div className="p-4 sm:p-6">
                                {logoImage && (
                                    <img
                                        src={logoImage}
                                        alt="Logo"
                                        className="w-24 sm:w-32 object-cover rounded-md mb-4"
                                    />
                                )}

                                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0C0C0C] mb-4">
                                    <span className="text-[#E50616]">{heading}</span> 
                                </h1>

                                <div className="flex gap-2 items-center w-full mb-4">
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#E50616] rounded-full p-1 flex-shrink-0">
                                        <img
                                            src="/placement-test/clock.png"
                                            alt="Clock Icon"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-[#0C0C0C] text-lg sm:text-xl font-[400]">{duration}</p>
                                </div>

                                <p className="text-[#7A7A7A] text-base sm:text-lg font-[400] mb-6 leading-relaxed">
                                    {description}
                                </p>

                                <div className="mb-6">
                                    <h3 className="text-[#0C0C0C] text-lg sm:text-xl font-[700] mb-2">
                                        {t("placementSkillsLabel")}
                                    </h3>
                                    <ul className="text-[#383838] text-sm sm:text-base font-[400] space-y-1">
                                        {skills.map((skill) => (
                                            <li key={skill} className="flex items-center">
                                                <BsDot className="text-xl flex-shrink-0" />
                                                <span className="ml-1">{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-2 items-start w-full mb-4">
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#E50616] rounded-full p-1 flex-shrink-0 mt-1">
                                        <img
                                            src="/placement-test/like.png"
                                            alt="Like Icon"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-[#7A7A7A] text-xs sm:text-base font-[400] leading-relaxed flex-1">
                                        {reportText}
                                    </p>
                                </div>

                                <img src={chartImage} alt="CEFR Chart" className="w-full object-cover rounded-md" />
                            </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden lg:flex p-8 relative z-10">
                            <div className="w-1/2 pr-4 flex items-center">
                                <img src={heroImage} alt="Hero" className="w-full h-full object-cover rounded-md" />
                            </div>

                            <div className={cn("w-1/2 overflow-y-auto flex flex-col justify-between", locale == "en" ? "pl-4" : 'pr-4')}>
                                <div>
                                    {logoImage && (
                                        <img
                                            src={logoImage}
                                            alt="Logo"
                                            className="w-[150px] object-cover rounded-md block mb-4"
                                        />
                                    )}

                                    <h1 className="text-[32px] font-bold text-[#0C0C0C] mb-4">
                                        <span className="text-[#E50616]">{heading}</span> 
                                    </h1>

                                    <div className="flex gap-2 items-center w-full mb-4">
                                        <div className="w-9 h-9 bg-[#E50616] rounded-full p-1">
                                            <img
                                                src="/placement-test/clock.png"
                                                alt="Clock Icon"
                                                className="object-cover rounded-md block"
                                            />
                                        </div>
                                        <p className="text-[#0C0C0C] text-[24px] font-[400]">{duration}</p>
                                    </div>

                                    <p className="text-[#7A7A7A] text-[18px] font-[400] mb-4 space-y-4 leading-9">
                                        <span className="block">
                                        {description}
                                        </span>
                                        <span className="block">
                                        {locale == "ar" && "الإنجليزية البريطانية أو الأمريكية الاختبار متاح بنسختين: الإنجليزية البريطانية أو الأمريكية، أو مزيج منهما، في أربع تركيبات مختلفة: 100% بريطانية، 100% أمريكية، أو مزيج بينهما. ولأقصى مرونة، ليس عليك اختيار التركيبة إلا عند إعداد الاختبار"}
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <div className="mb-4 space-y-4">
                                        <h3 className="text-[#0C0C0C] text-[24px] font-[700]">
                                            {t("placementSkillsLabel")}
                                        </h3>
                                        <ul className="text-[#383838] text-[18px] font-[400] flex flex-wrap justify-between gap-x-6 gap-y-2">
                                            {skills.map((skill) => (
                                                <li key={skill} className="flex items-center">
                                                    <BsDot className="text-2xl" />
                                                    {skill}
                                                </li> 
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex gap-2 items-center w-full mb-4">
                                        <div className="w-9 h-9 bg-[#E50616] rounded-full p-1">
                                            <img
                                                src="/placement-test/like.png"
                                                alt="Like Icon"
                                                className="object-cover rounded-md block"
                                            />
                                        </div>
                                        <p className="text-[#7A7A7A] text-base font-[400] leading-9 flex-1">
                                            {reportText}
                                        </p>
                                    </div>

                                    <img
                                        src={chartImage}
                                        alt="CEFR Chart"
                                        className="object-cover rounded-md block mt-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}