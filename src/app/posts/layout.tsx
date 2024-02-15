import { ReactNode } from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Posts',
    template: '%s > Ariel Guzman'
  },
  description: 'List of posts made by me',
};

export default function PageLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className={'flex flex-col h-screen'}>
      <Header activeNav={'posts'}/>
      <section className={'animate-fade-in'}>{children}</section>
      <Footer/>
    </main>
  );
}
