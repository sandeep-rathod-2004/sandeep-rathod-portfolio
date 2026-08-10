import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/data';
import ScrollProgress from '@/components/layout/ScrollProgress';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import CommandPalette from '@/components/layout/CommandPalette';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
  display: 'swap',
});
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} — ${SITE.role}`,
  description:
    `${SITE.name} builds multi-agent RAG systems, LLM applications, and full-stack products with Python, FastAPI, React, and LangChain. B.Tech CSE, Bengaluru.`,
  keywords: [
    SITE.name, 'Generative AI Engineer', 'LLM Engineer', 'RAG', 'LangChain',
    'LangGraph', 'Full Stack Developer', 'FastAPI', 'React', 'Machine Learning Engineer',
  ],
  authors: [{ name: SITE.name }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: `${SITE.name} — ${SITE.role}`,
    description: 'Multi-agent RAG systems, LLM applications, and production full-stack software.',
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.role}`,
    description: 'Multi-agent RAG systems, LLM applications, and production full-stack software.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  jobTitle: SITE.role,
  email: `mailto:${SITE.email}`,
  url: SITE.url,
  sameAs: [SITE.github, SITE.linkedin],
  address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressCountry: 'IN' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Visvesvaraya Technological University' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased overflow-x-hidden">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[9999] focus:bg-amber focus:text-[#171207] focus:px-4 focus:py-2 focus:rounded-lg">
          Skip to content
        </a>
        <ScrollProgress />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
        <CommandPalette />
      </body>
    </html>
  );
}
