import type { Metadata, Viewport } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';
import { siteConfig } from '@/config/site';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aliyan Baby Care | Baby Care Products in Lahore',
  description:
    'Baby- and mother-care essentials at Aliyan Baby Care in Amir Town, Lahore. Free delivery within 2 km; confirm availability and charges outside this area.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Aliyan Baby Care',
    description:
      'Baby- and mother-care essentials at Aliyan Baby Care in Amir Town, Lahore. Free delivery within 2 km; confirm availability and charges outside this area.',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary',
    title: 'Aliyan Baby Care',
    description:
      'Baby- and mother-care essentials at Aliyan Baby Care in Amir Town, Lahore. Free delivery within 2 km; confirm availability and charges outside this area.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#FAF8F3',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { business } = siteConfig;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: business.name,
  };

  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
