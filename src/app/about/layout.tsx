import { ReactNode } from 'react';
import { Footer } from '@/components/Footer/Footer';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About',
  description: 'About page',
};

export default function PageLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className={'flex flex-col h-screen'}>
      <section className={'animate-fade-in'}>
        <Breadcrumbs/>
        {children}
      </section>
      <Footer/>
    </main>
  );
}
