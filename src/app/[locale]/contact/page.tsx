/* eslint-disable @next/next/no-img-element */

import BreadCrumbs from '@/shared/components/BreadCrumbs'
import Container from '@/shared/components/Container'
import React from 'react'
import { ContactForm } from './components/ContactForm'
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
    title: "Contact Us | Englisher",
};

export default function Page() {
    const t = useTranslations()

    const breadcrumbs = {
        title: t('contactBreadcrumbTitle'),
        breadCrumbs: [
            { title: t('contactBreadcrumbHome'), to: '/' },
            { title: t('contactBreadcrumbTitle'), to: '/contact' }
        ]
    }
    return (
        <div className="bg-[#F3F3F3]">
            <BreadCrumbs title={breadcrumbs.title} items={breadcrumbs.breadCrumbs} />

            <Container className="min-h-[calc(100vh-200px)] flex items-center justify-center">
                <div className="relative bg-white px-8 w-full flex flex-col-reverse md:flex-row rounded-md shadow-md items-center overflow-hidden">
                    <div className="absolute left-[50%] top-[-5px] w-[100vh] h-[50vw] bg-[url(/images/assets/squares_white_bg.jpg)] bg-cover bg-center rotate-90 origin-top-left z-10"></div>

                    <div className="relative w-full lg:w-1/2 flex flex-col justify-between p-8 text-black z-20">
                        <ContactForm />
                    </div>

                    <div className="relative w-1/2 hidden lg:flex items-center p-8 z-20">
                        <img
                            src="/contact/contact.png"
                            alt="Hero"
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                </div>
            </Container >
        </div>
    )
}
