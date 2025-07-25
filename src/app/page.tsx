import React from 'react';
import { Metadata } from 'next';
import HeroSlider from './components/HeroSlider';
import WhatWeOfferSection from './components/WhatWeOfferSection';
import AboutUsSection from './components/AboutUsSection';
import CoursesSection from './components/CoursesSection';
import BlogsSection from './components/BlogsSection';
import ContactSection from './components/ContactSection';
import OurPartnersSection from './components/OurPartnersSection'
import { ServicesStructuredData, WebsiteStructuredData, OrganizationStructuredData } from './components/StructuredData';
// import Testimonials from '@/shared/components/Testimonials';
import TestimonialsSection from './components/TestimonialsSection';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Englisher - Your #1 Online English Learning Academy | Speak with Confidence',
  description: 'Master professional English and speak with confidence at Englisher Academy. Join thousands of students worldwide learning English conversation, business English, and perfect pronunciation.',
  keywords: [
    'English learning',
    'English academy',
    'online English courses',
    'English conversation',
    'business English',
    'English pronunciation',
    'speak English confidently',
    'professional English',
    'English speaking practice',
    'English language school'
  ],
  authors: [{ name: 'Englisher Academy' }],
  creator: 'Englisher Academy',
  publisher: 'Englisher Academy',
  openGraph: {
    title: 'Englisher - Your #1 Online English Learning Academy',
    description: 'Master professional English and speak with confidence. Start your English learning journey today.',
    url: 'https://englisher.com',
    siteName: 'Englisher Academy',
    images: [
      {
        url: 'https://englisher.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Englisher - English Learning Academy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Englisher - Your #1 Online English Learning Academy',
    description: 'Master professional English and speak with confidence. Start your English learning journey today.',
    images: ['https://englisher.com/twitter-image.jpg'],
    creator: '@englisher',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://englisher.com',
    languages: {
      'en-US': 'https://englisher.com',
      'ar-SA': 'https://englisher.com/ar',
    },
  },
};

export default function HomePage() {
  return (
    <>
      {/* SEO: Structured Data */}
      <WebsiteStructuredData />
      <OrganizationStructuredData />
      <ServicesStructuredData />

      {/* Main Content */}
      <main className="min-h-screen bg-[#F3F3F3]">
        {/* Hero Section */}
        <HeroSlider />

        {/* What We Offer Section */}
        <WhatWeOfferSection />

        {/* About Us Section */}
        <AboutUsSection />

        {/* Courses Section */}
        <CoursesSection />

        {/* Blogs Section */}
        <BlogsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Our Partners Section */}
        <OurPartnersSection />

        {/* Future sections will go here */}
        
         <TestimonialsSection />
        
      </main>


    </>
  );
}
