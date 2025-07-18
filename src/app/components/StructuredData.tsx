import React from 'react';

// Services Structured Data
export function ServicesStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "English Learning Services",
          description:
            "Personalized English courses, expert instructors, and flexible plans — all designed to help you speak with clarity and confidence",
          provider: {
            "@type": "EducationalOrganization",
            name: "Englisher Academy",
          },
          areaServed: "Worldwide",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "English Learning Programs",
            itemListElement: [
              {
                "@type": "Course",
                name: "Personalized English Courses",
                description:
                  "Tailored English learning programs designed for your specific needs and goals",
              },
              {
                "@type": "Service",
                name: "Expert Instructors",
                description:
                  "Professional English teachers with years of experience in language education",
              },
              {
                "@type": "Service",
                name: "Flexible Learning Plans",
                description:
                  "Adaptable schedules and learning paths that fit your lifestyle",
              },
            ],
          },
        }),
      }}
    />
  );
}

// Educational Organization Structured Data
export function EducationalOrganizationStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Englisher - English Learning Academy",
          description:
            "Your number #1 online academy for learning professional English and speaking with confidence",
          url: "https://englisher.com",
          logo: "https://englisher.com/logo.png",
          sameAs: [
            "https://facebook.com/englisher",
            "https://twitter.com/englisher",
            "https://linkedin.com/company/englisher",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "English Learning Courses",
            itemListElement: [
              {
                "@type": "Course",
                name: "Speak With Confidence",
                description: "Start your English learning journey with confidence — wherever you are, we're with you every step of the way.",
                url: "https://englisher.com/about",
                position: 1,
              },
              {
                "@type": "Course",
                name: "Master English",
                description: "Join thousands of students who have improved their English proficiency and advanced their careers.",
                url: "https://englisher.com/general-english",
                position: 2,
              },
              {
                "@type": "Course",
                name: "Global Community",
                description: "Experience interactive learning with our global community of English learners and expert instructors.",
                url: "https://englisher.com/english-conversation",
                position: 3,
              },
              {
                "@type": "Course",
                name: "Business English",
                description: "Develop the language skills you need for presentations, meetings, and professional communication.",
                url: "https://englisher.com/business-english",
                position: 4,
              },
              {
                "@type": "Course",
                name: "Perfect Pronunciation",
                description: "Master the sounds of English with our comprehensive phonetics and pronunciation program.",
                url: "https://englisher.com/phonetics",
                position: 5,
              },
            ],
          },
        }),
      }}
    />
  );
}

// Contact Point Structured Data
export function ContactPointStructuredData({ phoneNumber = "your-whatsapp-number" }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPoint",
          telephone: `+${phoneNumber}`,
          contactType: "Customer Service",
          availableLanguage: ["English", "Arabic"],
          areaServed: "Worldwide",
          contactOption: "WhatsApp",
        }),
      }}
    />
  );
}

// Website Structured Data
export function WebsiteStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Englisher Academy",
          description: "Your number #1 online academy for learning professional English and speaking with confidence",
          url: "https://englisher.com",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://englisher.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          sameAs: [
            "https://facebook.com/englisher",
            "https://twitter.com/englisher",
            "https://instagram.com/englisher",
            "https://linkedin.com/company/englisher",
            "https://youtube.com/englisher"
          ]
        }),
      }}
    />
  );
}

// Organization Structured Data
export function OrganizationStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Englisher Academy",
          alternateName: "Englisher",
          description: "Premier online English learning academy offering professional English courses, conversation practice, business English, and pronunciation training.",
          url: "https://englisher.com",
          logo: {
            "@type": "ImageObject",
            url: "https://englisher.com/logo.png",
            width: 300,
            height: 100
          },
          image: "https://englisher.com/og-image.jpg",
          telephone: "+1-XXX-XXX-XXXX",
          email: "info@englisher.com",
          address: {
            "@type": "PostalAddress",
            addressCountry: "US",
            addressLocality: "Your City",
            postalCode: "12345",
            streetAddress: "123 Education Street"
          },
          foundingDate: "2020",
          numberOfEmployees: {
            "@type": "QuantitativeValue",
            value: "50-100"
          },
          areaServed: "Worldwide",
          serviceType: "Online Education",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "English Learning Courses",
            itemListElement: [
              {
                "@type": "Course",
                name: "General English",
                description: "Comprehensive English language course for all levels",
                provider: {
                  "@type": "Organization",
                  name: "Englisher Academy"
                }
              },
              {
                "@type": "Course",
                name: "Business English",
                description: "Professional English for business communication",
                provider: {
                  "@type": "Organization",
                  name: "Englisher Academy"
                }
              },
              {
                "@type": "Course",
                name: "English Conversation",
                description: "Interactive English speaking and conversation practice",
                provider: {
                  "@type": "Organization",
                  name: "Englisher Academy"
                }
              },
              {
                "@type": "Course",
                name: "Phonetics and Pronunciation",
                description: "Perfect your English pronunciation and speaking clarity",
                provider: {
                  "@type": "Organization",
                  name: "Englisher Academy"
                }
              }
            ]
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "1250",
            bestRating: "5",
            worstRating: "1"
          }
        }),
      }}
    />
  );
} 