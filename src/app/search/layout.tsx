import { ReactNode } from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search',
};

export default function PageLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className={'flex flex-col h-screen'}>
      <Header activeNav={'search'}/>
      <section className={'animate-fade-in'}>
        <Breadcrumbs/>
        {children}
      </section>
      <Footer/>
    </main>
  );
}
