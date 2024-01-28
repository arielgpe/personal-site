import { cloneElement, Fragment, ReactElement, SyntheticEvent } from 'react';
import { IMenuItem } from '@/components/atoms/MenuItem/MenuItem';

interface Props {
  children: ReactElement<IMenuItem> | Array<ReactElement<IMenuItem>>;
  value: number | null;
  onChange: (event: SyntheticEvent, value: number, href?: string) => void;
}

const Menu = ({value, onChange, children}: Props) => {

  const entries = !Array.isArray(children) ? [children] : children;
  if (!children) return null;

  return (
    <div className={'menu'}>
      {
        entries.map((entry: any, index) => {
          const selected = value === index;
          return (
            <Fragment key={index}>
              {
                cloneElement(
                  entry,
                  {
                    selected,
                    onChange,
                    menuIndex: index,
                    ...entry.props
                  }
                )
              }
            </Fragment>
          );
        })
      }
    </div>
  );
};

export default Menu;
