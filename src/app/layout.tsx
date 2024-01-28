import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import Navigation from '@/components/organism/Navigation';
import Container from '@/components/molecules/Container/Container';
import Link from 'next/link';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Ariel Guzman',
  description: 'Personal Site',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className={`relative flex min-h-screen flex-col justify-center overflow-hidden lg:py-12`}>
          <Container
            className="relative w-full h-full px-6 lg:h-[700px] lg:pt-10 lg:pb-8 lg:shadow-md lg:w-8/12 lg:mx-auto lg:rounded-lg lg:px-10">
            <div className="mx-auto">
              <div className="divide-y divide-gray-300/50">
                <div className="space-y-6 py-8 text-base leading-7 text-white-600">
                  <div className="block lg:hidden">
                    <Navigation/>
                  </div>
                  <div className="flex flex-row items-stretch">
                    <div className="basis-full lg:basis-3/4">
                      {children}
                    </div>
                    <div className="hidden lg:block lg:basis-1/4 m-6 w-1/5 absolute bottom-0 right-0">
                      <Navigation/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <div className={'w-full lg:w-8/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-1'}>
            <div className={'col-start-3 flex justify-end'}>
              <Link className={'cursor-pointer shrink'} href={'mailto:ariel.guzman01@gmail.com?subject=job offer'}>
                <figure className="p-1">
                  <img className="w-8 h-8" src={'/gmail.png'} alt={'Mail'}/>
                </figure>
              </Link>
              <Link className={'cursor-pointer shrink mx-5'} target={'_blank'} href={'https://github.com/arielgpe'}>
                <figure className="p-1">
                  <img className="w-8 h-8" src={'/github.png'} alt={'github.com/arielgpe'}/>
                </figure>
              </Link>
              <Link className={'cursor-pointer shrink'} target={'_blank'} href={'https://linkedin.com/in/arielgpe'}>
                <figure className="p-1">
                  <img className="w-8 h-8" src={'/linkedin.png'} alt={'linkedin'}/>
                </figure>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
