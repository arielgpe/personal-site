'use client';

import { LinkButton } from '@/components/LinkButton/LinkButton';
import { clsx } from 'clsx';
import { Site } from '@/interfaces/Site';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import './header.css';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { IconMoon, IconSun } from '@tabler/icons-react';

export const SITE: Site = {
  website: 'https://astro-paper.pages.dev/', // replace this with your deployed domain
  author: 'Ariel Guzmán',
  desc: 'Personal site with a blog',
  title: 'ArielGpe',
  ogImage: 'astropaper-og.jpg',
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const Header = () => {
  const headerRef = useRef<any | null>(null);
  const pathname = usePathname();

  const {theme, setTheme} = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState<string>();
  const {scrollYProgress} = useScroll({
    offset: ['end end', 'start start'],
  });

  const iconClass = 'fill-transparent stroke-current stroke-2 hover:text-skin-accent hover:fill-transparent';

  const [hookedYPostion, setHookedYPosition] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setHookedYPosition(latest);
  });

  useEffect(() => {
    const pathList = pathname.replace(/\/+$/, '').split('/').slice(1);
    setCurrentTab(pathList[0]);
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [headerRef, isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={'sticky top-0 z-40 w-full backdrop-blur-xl flex-initial transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 supports-backdrop-blur:bg-white/60 '}>
      <div className="nav-container">
        <div className="top-nav-wrap">
          <LinkButton href="/" className="logo mt-2 sm:mt-0 whitespace-nowrap text-skin-accent">
            ArielGpe
          </LinkButton>
          <nav id="nav-menu">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hamburger-menu focus-outline"
              aria-label="Open Menu"
              aria-expanded="false"
              aria-controls="menu-items"
            >
              <div className={clsx('hamburger', isMenuOpen ? 'hamburger-is-active' : '')}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </button>
            <ul id="menu-items" className={clsx(`sm:flex`, isMenuOpen ? '' : 'display-none')}>
              <li>
                <LinkButton href="/posts/" className={currentTab === 'posts' ? 'active' : ''}>
                  Posts
                </LinkButton>
              </li>
              <li>
                <LinkButton href="/tags/" className={currentTab === 'tags' ? 'active' : ''}>
                  Tags
                </LinkButton>
              </li>
              <li>
                <LinkButton href="/about/" className={currentTab === 'about' ? 'active' : ''}>
                  About
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  href="/search/"
                  className={clsx(`focus-outline p-3 sm:p-1`,
                    currentTab === 'search' ? 'active' : ''
                    , 'flex')}
                  aria-label="search"
                  title="Search"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="scale-125 sm:scale-100"
                  >
                    <path
                      d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
                    ></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </LinkButton>
              </li>
              {

                <li>
                  <button
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    id="theme-btn"
                    className="focus-outline"
                    title="Toggles light & dark"
                    aria-label="auto"
                    aria-live="polite"
                  >
                    <IconMoon id={'moon-svg'} className={iconClass}/>
                    <IconSun id={'sun-svg'} className={iconClass}/>
                  </button>
                </li>
              }
            </ul>
          </nav>
        </div>
      </div>
      <motion.div className={'mx-auto max-w-6xl h-0.5 bg-skin-accent sticky'} style={{scaleX: hookedYPostion ?? 0}}/>
    </header>
  );
};
