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
        initial={{y: 50}}
        animate={{y: 0}}
        exit={{y: 0}}
        transition={{type: "spring", stiffness: 75 }}
      >
        {/*<LayoutRouterContext.Provider value={frozen}>*/}
          {children}
        {/*</LayoutRouterContext.Provider>*/}
      </motion.div>
    </AnimatePresence>


  );
};
