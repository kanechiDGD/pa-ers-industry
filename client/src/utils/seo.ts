/**
 * SEO Utilities for PA & ERS
 * Handles dynamic meta tags, hreflang, and structured data
 */

export interface HreflangLink {
  hreflang: string;
  href: string;
}

/**
 * Generate hreflang links for bilingual pages
 */
export function generateHreflangLinks(path: string): HreflangLink[] {
  const baseUrl = 'https://paers.com';
  
  // Map of paths to their language versions
  const bilingualPaths: Record<string, { en: string; es: string }> = {
    '/': { en: '/', es: '/' },
    '/servicios': { en: '/services', es: '/servicios' },
    '/sobre-nosotros': { en: '/about-us', es: '/sobre-nosotros' },
    '/contacto': { en: '/contact', es: '/contacto' },
    '/proyectos': { en: '/projects', es: '/proyectos' },
    '/track-case': { en: '/track-case', es: '/track-case' },
  };

  const pathConfig = bilingualPaths[path];
  
  if (!pathConfig) {
    return [];
  }

  return [
    { hreflang: 'en', href: `${baseUrl}${pathConfig.en}` },
    { hreflang: 'es', href: `${baseUrl}${pathConfig.es}` },
    { hreflang: 'x-default', href: `${baseUrl}${pathConfig.en}` },
  ];
}

/**
 * Generate structured data for LocalBusiness
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'PA & ERS',
    description: 'Expert public adjusters specializing in insurance claims',
    url: 'https://paers.com',
    telephone: process.env.VITE_BUSINESS_PHONE || '',
    email: process.env.VITE_BUSINESS_EMAIL || '',
    address: {
      '@type': 'PostalAddress',
      addressLocality: process.env.VITE_BUSINESS_CITY || 'Miami',
      addressRegion: process.env.VITE_BUSINESS_STATE || 'FL',
      addressCountry: 'US',
    },
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-18:00',
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQ structured data
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
