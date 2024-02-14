import { ReactNode } from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { FrozenRouter } from '@/components/FrozenRouter';

export const metadata: Metadata = {
  title: 'About > Ariel Guzman ',
  description: 'About page',
};

export default function PageLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className={'flex flex-col h-screen'}>
      <Header activeNav={'about'}/>
      <section className={'animate-fade-in'}>
        <Breadcrumbs/>
        {children}
      </section>
      <Footer/>
    </main>
  );
}
