'use client';

import { LinkButton } from '@/components/LinkButton/LinkButton';
import { clsx } from 'clsx';
import { Site } from '@/interfaces/Site';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import './header.css';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation';

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
  const ref = useRef(null);
  const headerRef = useRef<any | null>(null);
  const pathname = usePathname();

  const {theme, setTheme} = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState<string>();
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

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
      className={'sticky top-0 z-40 w-full backdrop-blur-xl flex-initial transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'}>
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
                    <svg xmlns="http://www.w3.org/2000/svg" id="moon-svg">
                      <path
                        d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" id="sun-svg">
                      <path
                        d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"/>
                    </svg>
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
