import { Metadata } from "next";

export const aboutMetadata: Metadata = {
  title: "About Englisher | Online English Academy",
  description:
    "Learn about Englisher, a premier online academy for Business English, Accent Training, and Conversational English. Discover our mission, vision, partners, and more.",
};

export const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Englisher",
  url: "https://englisherofficial.com",
  logo: "https://englisherofficial.com/logo.png",
  description:
    "Englisher is a premier online academy dedicated to enhancing English and communication skills through comprehensive Business English, Accent Training, and Conversational English courses.",
  sameAs: [
    "https://www.facebook.com/englisherofficial",
    "https://www.instagram.com/englisherofficial",
    "https://www.linkedin.com/company/englisherofficial/",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+201000041191",
      contactType: "customer service",
      email: "info@englisherofficial.com",
    },
  ],
}; 