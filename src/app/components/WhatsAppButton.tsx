"use client";
import { cn } from '@/lib/classnames/cn';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

export default function WhatsAppButton({ 
  phoneNumber = "your-whatsapp-number", 
  message = "Hello! I'm interested in learning English with Englisher Academy.",
  className = ""
}: WhatsAppButtonProps) {
  const t = useTranslations();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* SEO: Structured Data for Contact Point */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            "telephone": `+${phoneNumber}`,
            "contactType": "Customer Service",
            "availableLanguage": ["English", "Arabic"],
            "areaServed": "Worldwide",
            "contactOption": "WhatsApp"
          })
        }}
      />

      {/* WhatsApp Float Button */}
      <div className={`fixed bottom-10 right-10 md:bottom-8 md:right-8 z-50 group ${className}`}>
        <div className="relative">
          <button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
            className={cn(
              "w-12 h-12 md:w-14 md:h-14 bg-black hover:bg-black/80 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 cursor-pointer",
            )}
            aria-label="Contact us on WhatsApp for English learning support"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </button>

          {/* Custom Tooltip */}
          {showTooltip && (
            <div className="capitalize absolute bottom-full right-0 mb-2 px-3 py-2 bg-white text-gray-900 text-sm rounded-lg shadow-lg whitespace-nowrap transition-opacity duration-200">
              {t('whatsappButton')}
              {/* Tooltip arrow */}
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}