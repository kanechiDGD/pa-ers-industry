import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  keywords,
  image = '/og-image.jpg',
  url,
  type = 'website',
  noindex = false,
}: SEOProps) {
  const { language } = useLanguage();
  
  const defaultTitle = 'PA & ERS - Insurance Claim Experts | Public Adjusters';
  const defaultDescription = language === 'es' 
    ? 'PA & ERS - Ajustadores públicos expertos en maximizar reclamos de seguros por daños de agua, incendio, tormentas y más. Consulta gratuita y anónima.'
    : 'PA & ERS - Expert public adjusters maximizing insurance claims for water, fire, storm, and interior damage. Free anonymous consultation.';
  
  const defaultKeywords = language === 'es'
    ? 'ajustador público, reclamos de seguros, daños por agua, daños por incendio, daños por tormenta, compensación de seguros, Florida'
    : 'public adjuster, insurance claims, water damage, fire damage, storm damage, insurance claim help, Florida';
  
  const fullTitle = title ? `${title} | PA & ERS` : defaultTitle;
  const fullDescription = description || defaultDescription;
  const fullKeywords = keywords || defaultKeywords;
  const fullUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const fullImage = image.startsWith('http') ? image : `${window.location.origin}${image}`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content={language === 'es' ? 'es_ES' : 'en_US'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Language */}
      <html lang={language} />
    </Helmet>
  );
}
