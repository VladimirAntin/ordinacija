import {ReactNode} from 'react';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import type {Metadata} from 'next';
import Script from 'next/script';
import '@i18n/localeConfig';

const BASE_URL = 'https://ordinacija.hok.rs';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'DentaVita — Stomatološka Ordinacija | Beograd, Srbija',
    template: '%s | DentaVita',
  },
  description:
    'Moderna stomatološka ordinacija u Beogradu sa 15+ godina iskustva. Estetska stomatologija, dentalni implanti, oralna hirurgija i dečja stomatologija. Zakažite pregled danas.',
  keywords: [
    'stomatolog Beograd',
    'stomatološka ordinacija Beograd',
    'dentalni implanti Beograd',
    'estetska stomatologija',
    'izbeljivanje zuba',
    'keramički faseti',
    'oralna hirurgija',
    'dečja stomatologija',
    'zubar Beograd',
    'DentaVita',
    'parodontologija',
    'Zoom izbeljivanje',
    'keramička krunica',
    'stomatolog Srbija',
    'implantologija',
    'kozmetička stomatologija',
    'stomatolog centar Beograd',
  ],
  authors: [{name: 'DentaVita', url: BASE_URL}],
  creator: 'DentaVita',
  publisher: 'DentaVita',
  robots: {
    index: true,
    follow: true,
    googleBot: {index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1},
  },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    alternateLocale: ['en_US'],
    url: BASE_URL,
    siteName: 'DentaVita',
    title: 'DentaVita — Stomatološka Ordinacija | Beograd',
    description:
      'Moderna stomatološka ordinacija u Beogradu. Estetska stomatologija, implanti, oralna hirurgija i dečja stomatologija sa 15+ godina iskustva.',
    images: [{url: '/og-image.jpg', width: 1200, height: 630, alt: 'DentaVita — Stomatološka Ordinacija Beograd'}],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DentaVita — Stomatološka Ordinacija | Beograd',
    description:
      'Moderna stomatološka ordinacija u Beogradu. Estetska stomatologija, implanti i oralna hirurgija.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'sr': BASE_URL,
      'en': BASE_URL,
      'x-default': BASE_URL,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html
      lang="sr"
      className="scroll-smooth"
      suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="6d1TK1vS1Lnn5F_swvTnJSqBV4KZSNpPOY8uWWnCfNA"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': `${BASE_URL}/#website`,
                url: BASE_URL,
                name: 'DentaVita',
                description: 'Moderna stomatološka ordinacija u Beogradu sa 15+ godina iskustva.',
                inLanguage: ['sr', 'en'],
                publisher: {
                  '@id': `${BASE_URL}/#dentist`,
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Dentist',
                '@id': `${BASE_URL}/#dentist`,
                name: 'DentaVita Stomatološka Ordinacija',
                url: BASE_URL,
                image: `${BASE_URL}/doctor.jpg`,
                logo: `${BASE_URL}/logo.svg`,
                description:
                  'Moderna stomatološka ordinacija u Beogradu. Estetska stomatologija, dentalni implanti, oralna hirurgija i dečja stomatologija.',
                email: 'kontakt@dentavita.rs',
                telephone: '+381111234567',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Knez Mihailova 42',
                  addressLocality: 'Beograd',
                  addressCountry: 'RS',
                },
                openingHoursSpecification: [
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '08:00',
                    closes: '20:00',
                  },
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: 'Saturday',
                    opens: '09:00',
                    closes: '14:00',
                  },
                ],
                priceRange: '$$',
                areaServed: {
                  '@type': 'City',
                  name: 'Beograd',
                },
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Stomatološke Usluge',
                  itemListElement: [
                    {'@type': 'Offer', itemOffered: {'@type': 'MedicalProcedure', name: 'Estetska Stomatologija'}},
                    {'@type': 'Offer', itemOffered: {'@type': 'MedicalProcedure', name: 'Dentalni Implanti'}},
                    {'@type': 'Offer', itemOffered: {'@type': 'MedicalProcedure', name: 'Oralna Hirurgija'}},
                    {'@type': 'Offer', itemOffered: {'@type': 'MedicalProcedure', name: 'Dečja Stomatologija'}},
                  ],
                },
                sameAs: ['https://www.instagram.com/dentavita.rs'],
              },
            ]),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-black/10 transition-colors duration-300 dark:bg-black/90">
        <Navigation />
        {children}
        <Footer />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}`,
          }}
        />
      </body>
    </html>
  );
}
