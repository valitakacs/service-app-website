// Single source of truth for every user-facing string in the marketing site.
// Add a key here, use it everywhere via `useT()`. Keep keys flat dot-namespaced.

export const TRANSLATIONS = {
  ro: {
    // Navigation
    'nav.home': 'Acasă',
    'nav.features': 'Funcționalități',
    'nav.forShops': 'Pentru Service-uri',
    'nav.forCustomers': 'Pentru Clienți',
    'nav.howItWorks': 'Cum funcționează',
    'nav.getStarted': 'Programează demo',

    // Mobile mockup
    'mobile.greeting.morning': 'Bună dimineața',
    'mobile.greeting.afternoon': 'Bună ziua',
    'mobile.greeting.evening': 'Bună seara',
    'mobile.brand': 'CarRevio Premium',
    'mobile.myCar': 'Vehiculul tău',
    'mobile.fuelType.electric': 'Electric',
    'mobile.actions.book': 'Programare',
    'mobile.actions.garage': 'Garaj',
    'mobile.actions.estimates': 'Devize',
    'mobile.actions.chat': 'Chat',
    'mobile.tab.home': 'Acasă',
    'mobile.tab.garage': 'Garaj',
    'mobile.tab.service': 'Service',
    'mobile.tab.account': 'Cont',

    // Language toggle
    'language.toggle.aria': 'Schimbă limba',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.forShops': 'For Shops',
    'nav.forCustomers': 'For Customers',
    'nav.howItWorks': 'How It Works',
    'nav.getStarted': 'Get a Demo',

    // Mobile mockup
    'mobile.greeting.morning': 'Good morning',
    'mobile.greeting.afternoon': 'Good afternoon',
    'mobile.greeting.evening': 'Good evening',
    'mobile.brand': 'CarRevio Premium',
    'mobile.myCar': 'My Car',
    'mobile.fuelType.electric': 'Electric',
    'mobile.actions.book': 'Book',
    'mobile.actions.garage': 'Garage',
    'mobile.actions.estimates': 'Estimates',
    'mobile.actions.chat': 'Chat',
    'mobile.tab.home': 'Home',
    'mobile.tab.garage': 'Garage',
    'mobile.tab.service': 'Service',
    'mobile.tab.account': 'Account',

    // Language toggle
    'language.toggle.aria': 'Switch language',
  },
} as const

export type Locale = keyof typeof TRANSLATIONS
export type TranslationKey = keyof (typeof TRANSLATIONS)['ro']
export const LOCALES: Locale[] = ['ro', 'en']
