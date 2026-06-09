import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@/styles/styles.css';
import '@/styles/globals.css';

import { LanguageProvider } from '@/lib/i18n';
import { TopBar } from '@/components/chrome/TopBar';
import { Footer } from '@/components/chrome/Footer';
import { Main } from '@/components/chrome/Main';

const SITE_URL = 'https://davidesidoti.dev';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Davide Sidoti · Software Engineer',
    template: '%s · Davide Sidoti',
  },
  description: 'Full-stack software engineer building fast, considered interfaces. Web apps, automation, and machine-learning experiments.',
  authors: [{ name: 'Davide Sidoti' }],
  openGraph: {
    type: 'website',
    title: 'Davide Sidoti · Software Engineer',
    description: 'Full-stack software engineer building fast, considered interfaces.',
    siteName: 'Davide Sidoti',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Davide Sidoti · Software Engineer',
    description: 'Full-stack software engineer building fast, considered interfaces.',
  },
};

// Apply the stored theme before paint to avoid a light/dark flash on load.
const NO_FLASH = `
(function () {
  try {
    var t = localStorage.getItem('ds-theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('data-theme', t);
    }
    var l = localStorage.getItem('pf-lang');
    if (l === 'en' || l === 'it') {
      document.documentElement.setAttribute('lang', l);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH }} />
      </head>
      <body>
        <LanguageProvider>
          <TopBar />
          <Main>{children}</Main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
