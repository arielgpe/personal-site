import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Ariel Guzman @ Skills'
};

const ExperienceLayout = ({children}: { children: ReactNode }) => {
  return (
    <section className={'animate-fade-in'}>{children}</section>
  );
}

export default ExperienceLayout;
