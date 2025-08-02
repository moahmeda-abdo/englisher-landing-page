import { ReactNode } from 'react';
import { Almarai } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Nav from '@/shared/components/Nav';
import Footer from '@/app/components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export const locales = ['en', 'ar'];

const almarai = Almarai({
    subsets: ['latin'],
    variable: '--font-almarai',
    display: 'swap',
    weight: ['300', '400', '700', '800'],
});

export default async function LocaleLayout({
    children,
    params
}: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // unstable_setRequestLocale(locale);
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    if (!locales.includes(locale)) notFound();

    const messages = (await import(`../../messages/${locale}.json`)).default;

    return (
        <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className={`${almarai.variable} font-sans`}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <Nav />
                {children}
                <Footer />

                {/* WhatsApp Button */}
                <WhatsAppButton
                    phoneNumber="+201000041191"
                    message="Hello! I'm interested in learning English with Englisher Academy. Can you help me get started?"
                />
            </NextIntlClientProvider>
        </div>
    );
}
