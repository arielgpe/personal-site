import { SyntheticEvent } from 'react';

import './item.css';
import Link from 'next/link';
import type { UrlObject } from 'url';

type Url = string | UrlObject

export interface IMenuItem {
  label: string;
  href: Url;
  selected?: boolean;
  menuIndex?: number;
  target?: string,
  onChange?: (event: SyntheticEvent, value: number) => void;
}

const MenuItem = ({label, selected, menuIndex = 0, onChange, ...props}: IMenuItem) => {

  const className = `menu-item${selected ? ' menu-item-selected' : ''}`;
  return (
    <Link className={className}
          onClick={(e) => onChange ? onChange(e, menuIndex) : null}
          {...props}>{label}</Link>
  );
};

export default MenuItem;
