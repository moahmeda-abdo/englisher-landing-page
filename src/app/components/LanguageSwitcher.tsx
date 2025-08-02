'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import Image from 'next/image';
import { useState } from 'react';

const LANGUAGES = {
    en: {
        label: 'English',
        short: 'ENG',
        flag: '/images/icons/us.png',
    },
    ar: {
        label: 'العربية',
        short: 'العربية',
        flag: '/images/icons/ar.png',
    },
};

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const changeLanguage = (newLocale: string) => {
        setOpen(false);
        router.replace(pathname, { locale: newLocale });
    };

    const current = LANGUAGES[locale as keyof typeof LANGUAGES];

    return (
        <div className="relative">
            {/* Trigger button */}
            <button
                onClick={() => setOpen(prev => !prev)}
                className="flex items-center gap-2 bg-transparent text-white px-3 py-1 rounded-md hover:shadow "
                dir='ltr'
            >
                <Image src={current.flag} alt={current.short} width={20} height={20} />
                <span className="text-sm font-medium">{current.short}</span>
                <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg border z-50">
                    {Object.entries(LANGUAGES).map(([key, { label, flag }]) => (
                        <button
                            key={key}
                            onClick={() => changeLanguage(key)}
                            className="flex w-full items-center gap-2 px-3 py-2 hover:bg-gray-100 text-sm text-left"
                        >
                            <Image src={flag} alt={label} width={20} height={20} />
                            <span className='text-gray-700'>{label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
