import { ReactNode } from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Search > Ariel Guzman ',
  description: 'Search',
};

export default function PageLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main>
      <Header activeNav={'search'}/>
      <Breadcrumbs/>
      <section className={'animate-fade-in'}>{children}</section>
      <Footer/>
    </main>
  );
}
