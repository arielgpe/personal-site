import { ReactNode } from 'react';
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
    <main className={'flex flex-col'}>
      <section className={'animate-fade-in'}>{children}</section>
    </main>
  );
}
