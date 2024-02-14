'use client';

import { ReactNode, useContext, useRef } from 'react';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export const FrozenRouter = ({
                        children,
                      }: Readonly<{
  children: ReactNode;
}>) => {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;
  const pathname = usePathname();


  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, type: 'tween' }}
      >
        <LayoutRouterContext.Provider value={frozen}>
          {children}
        </LayoutRouterContext.Provider>
      </motion.div>
    </AnimatePresence>


  );
}
