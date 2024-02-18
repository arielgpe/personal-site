import { LinkButton } from '@/components/LinkButton/LinkButton';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

interface Props {
  tag: string;
  size?: 'xs'|'sm' | 'base' | 'lg';
}

const colors = ['#F8E9E9', '#EDF9FE', '#F5E1E3', '#F4E9F0', '#E4EFD6', '#F8D3F3', '#E9E3E0', '#F7F7D7'];

export const Tag = ({tag, size = 'xs'}: Props) => {

  const [color, setColor] = useState<string>();

  useEffect(() => {
    const index = Math.floor(Math.random() * colors.length);
    setColor(`bg-[${colors[index]}]`);
  }, []);

  return (
    color ?
      <li
        className={clsx(color, `tag-list relative hover:-top-0.5 inline-block items-center rounded-lg py-1.5 px-3 mx-1 text-xs`,
          size === 'sm' ? 'my-1' : 'my-3')}
      >
        <LinkButton
          href={`/tags/${tag}/`}
          className={`text-${size} group font-sans text-skin-base dark:text-skin-inverted hover:text-skin-base dark:hover:text-skin-inverted`}
        >
          <span>{tag}</span>
        </LinkButton>
      </li> : null
  );
};
