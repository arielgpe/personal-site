import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { NextThemesProvider } from '@/components/NextThemesProvider';
import { Analytics } from '@vercel/analytics/react';

const IBMPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
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
      url: 'https://arielgpe.dev'
    }
  ],
  keywords: ['Next.js', 'React', 'Javascript', 'Html', 'Css', 'Programming'],
  alternates: {
    types: {
      'application/rss+xml': 'https://arielgpe.dev/api/blog/feed.xml',
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
          <main className={'theme-light dark:theme-dark flex flex-col h-screen'}>
            {children}
            <Analytics />
          </main>
        </NextThemesProvider>
      </body>
    </html>
  );
}
