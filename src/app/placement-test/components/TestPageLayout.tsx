/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { BsDot } from 'react-icons/bs';
import BreadCrumbs from '@/shared/components/BreadCrumbs';
import Container from '@/shared/components/Container';

interface SkillPageProps {
    title: string;
    breadcrumbs: { title: string; to: string }[];
    heroImage: string;
    logoImage: string;
    heading: string;
    highlight: string;
    duration: string;
    description: string;
    skills: string[];
    reportText: string;
    chartImage: string;
}

export default function TestPageLayout({
    title,
    breadcrumbs,
    heroImage,
    logoImage,
    heading,
    highlight,
    duration,
    description,
    skills,
    reportText,
    chartImage,
}: SkillPageProps) {
    return (
        <div className="bg-[#F3F3F3]">
            <BreadCrumbs title={title} items={breadcrumbs} />

            <Container className="min-h-[120vh] flex items-center justify-center">
                <div className="relative flex justify-center items-center ">
                    <div className="relative bg-white p-8 w-full flex rounded-md shadow-md">
                        <div className="absolute top-0 left-0 h-[40%] w-[40%] bg-black z-0 rounded-tl-md" />

                        <div className="w-1/2 pr-4 flex items-center z-10">
                            <img
                                src={heroImage}
                                alt="Hero"
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>

                        <div className="w-1/2 pl-4 overflow-y-auto flex flex-col justify-between z-10">
                            <div>
                                <img
                                    src={logoImage}
                                    alt="Logo"
                                    className="w-[150px] object-cover rounded-md block mb-4"
                                />

                                <h1 className="text-[32px] font-bold text-[#0C0C0C] mb-4">
                                    <span className="text-[#E50616]">{highlight}</span> {heading}
                                </h1>

                                <div className="flex gap-2 items-center w-full mb-4">
                                    <div className="w-9 h-9 bg-[#E50616] rounded-full p-1">
                                        <img
                                            src="/placement-test/clock.png"
                                            alt="Clock Icon"
                                            className="object-cover rounded-md block"
                                        />
                                    </div>
                                    <p className="text-[#0C0C0C] text-[24px] font-[400]">
                                        {duration}
                                    </p>
                                </div>

                                <p className="text-[#7A7A7A] text-[20px] font-[400] mb-4 leading-9">
                                    {description}
                                </p>
                            </div>

                            <div>
                                <div className="mb-4">
                                    <h3 className="text-[#0C0C0C] text-[24px] font-[700]">
                                        You are evaluated on skills.
                                    </h3>
                                    <ul className="text-[#383838] text-[20px] font-[400] flex flex-wrap gap-x-6 gap-y-2">
                                        {skills.map((skill) => (
                                            <li key={skill} className="flex items-center">
                                                <BsDot className="text-2xl" /> {skill}
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
                                    <p className="text-[#7A7A7A] text-[20px] font-[400] leading-9 flex-1">
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
            </Container>
        </div>
    );
}
