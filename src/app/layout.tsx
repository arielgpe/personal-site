import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { NextThemesProvider } from '@/components/NextThemesProvider';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

const PROD_URL = process.env.PROD_URL || '';
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID || '';

const IBMPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700']
});


export const metadata: Metadata = {
  metadataBase: new URL(PROD_URL),
  title: {
    template: '%s > Ariel Guzman',
    default: 'Ariel Guzman'
  },
  applicationName: 'ArielGpe',
  referrer: 'origin-when-cross-origin',
  description: 'Ariel Guzman personal site and blog',
  authors: [
    {
      name: 'Ariel Guzman',
      url: PROD_URL
    }
  ],
  keywords: ['Next.js', 'React', 'Javascript', 'Html', 'Css', 'Programming'],
  alternates: {
    types: {
      'application/rss+xml': `${PROD_URL}/api/blog/feed.xml`,
    }
  }
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={IBMPlexMono.variable}>
        <NextThemesProvider>
          <main className={'theme-light dark:theme-dark flex flex-col min-h-screen'}>
              <Header/>
            {children}
            <Footer/>
          </main>
        </NextThemesProvider>
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID}/>
      </body>
    </html>
  );
}
