import { ReactNode } from 'react';
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
    <main className={'flex flex-col'}>
      <section>
        <Breadcrumbs/>
        {children}
      </section>
    </main>
  );
}
