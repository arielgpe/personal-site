import { ReactNode } from 'react';
import { Footer } from '@/components/Footer/Footer';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Tags ',
  description: 'Search by tag',
};

export default function PageLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className={'flex flex-col h-screen'}>
      <section className={'animate-fade-in flex-auto'}>
        <Breadcrumbs/>
        {children}
      </section>
      <Footer/>
    </main>
  );
}
