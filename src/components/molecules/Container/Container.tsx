'use client';

import { DetailedHTMLProps, forwardRef, HTMLAttributes, useEffect, useState } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import './container.css';
import { NavigationContext } from '@/contexts/NavigationContext';

type Ref = HTMLDivElement;

export type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Container = forwardRef<Ref, DivProps>((props, ref) => {
  const {
    className,
    children,
    ...rest
  } = props;
  const pathname = usePathname();
  const [classNameState, setClassNameState] = useState(clsx('lg:rainbow', className));
  const [menuIndex, setMenuIndex] = useState<number | null>(null);

  useEffect(() => {
    let merged;
    switch (pathname) {
      case '/experience':
        merged = clsx('lg:rainbow lg:animate-border90', className);
        setMenuIndex(1);
        break;
      case '/skills':
        merged = clsx('lg:rainbow lg:animate-border180', className);
        setMenuIndex(2);
        break;
      case '/contact':
        merged = clsx('lg:rainbow lg:animate-border270', className);
        setMenuIndex(3);
        break;
      default:
        merged = clsx('lg:rainbow lg:animate-border360', className);
        setMenuIndex(0);
        break;
    }
    setClassNameState(merged);
  }, [pathname]);

  return (
    <NavigationContext.Provider value={{menuIndex, setMenuIndex}}>
      <div ref={ref} className={classNameState} {...rest}>
        {children}
      </div>
    </NavigationContext.Provider>
  );
});


export default Container;
