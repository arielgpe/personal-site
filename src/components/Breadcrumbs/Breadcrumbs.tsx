'use client';

import './breadcrumbs.css';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LinkButton } from '@/components/LinkButton/LinkButton';
import { clsx } from 'clsx';

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const [breadcrumbList, setBreadcrumbList] = useState<string[]>([]);

  useEffect(() => {
    const pathList = pathname.replace(/\/+$/, '').split('/').slice(1);

    pathList[0] === 'posts' &&
    pathList.splice(0, 2, `Posts (page ${pathList[1] || 1})`);

    pathList[0] === 'tags' &&
    !isNaN(Number(pathList[2])) &&
    pathList.splice(
      1,
      3,
      `${pathList[1]} ${
        Number(pathList[2]) === 1 ? '' : '(page ' + pathList[2] + ')'
      }`
    );

    setBreadcrumbList(pathList);
  }, [pathname]);

  return (
    breadcrumbList.length > 0 ? <nav className="breadcrumb" aria-label="breadcrumb">
      <ul>
        <li>
          <LinkButton className={'inline'} href="/">Home</LinkButton>
          <span aria-hidden="true" className={'mx-2'}>&raquo;</span>
        </li>
        {
          breadcrumbList.map((breadcrumb, index) =>
            index + 1 === breadcrumbList.length ? (
              <li key={index + 1}>
            <span
              className={clsx(index > 0 ? 'lowercase' : 'capitalize')}
              aria-current="page"
            >
              {/* make the last part lowercase in Home > Tags > some-tag */}
              {decodeURIComponent(breadcrumb)}
            </span>
              </li>
            ) : (
              <li key={index + 1}>
                <LinkButton className={'inline'} href={`/${breadcrumb}/`}>{breadcrumb}</LinkButton>
                <span className={'mx-2'} aria-hidden="true">&raquo;</span>
              </li>
            )
          )
        }
      </ul>
    </nav> : null
  );
};
