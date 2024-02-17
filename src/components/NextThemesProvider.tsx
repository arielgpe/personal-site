'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export const NextThemesProvider = ({children}: { children: ReactNode }) => {
  return (
    <ThemeProvider defaultTheme={'system'} attribute="class">
      {children}
    </ThemeProvider>
  );
};
