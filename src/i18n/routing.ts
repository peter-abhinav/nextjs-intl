import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'de', 'fr', 'te'] as const,
  defaultLocale: 'en'
  // localePrefix: 'as-needed'
})
