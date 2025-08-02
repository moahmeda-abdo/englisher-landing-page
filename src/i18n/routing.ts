import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'ar'],
    defaultLocale: 'en',

    // Used when no locale matches
    // defaultLocale: 'ar'
});
export const locales = routing.locales;
