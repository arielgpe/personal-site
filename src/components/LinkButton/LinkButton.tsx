import { ReactNode } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';


type Props = {
  className: string;
  children: ReactNode
} & any;

export const LinkButton = ({className, disabled, children, ...props}: Props) => {
  return (
    disabled ? (
      <span
        {...props}
        className={clsx(`group inline-block`, className)}
        aria-disabled={disabled}
      >
      {children}
    </span>
    ) : (
      <Link
        {...props}
        className={clsx(`group inline-block hover:text-skin-accent`, className)}
      >
        {children}
      </Link>
    )
  );
};
