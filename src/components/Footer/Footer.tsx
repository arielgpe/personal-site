'use client';

import { Hr } from '@/components/Hr/Hr';
import { Socials } from '@/components/Socials/Socials';
import './footer.css';

interface Props {
  noMarginTop?: boolean;
}

const currentYear = new Date().getFullYear();

export const Footer = ({noMarginTop = false}: Props) => {
  return (
    <footer className={`${noMarginTop ? '' : 'mt-auto'}`}>
      <Hr noPadding/>
      <div className="footer-wrapper">
        <Socials centered/>
        <div className="copyright-wrapper">
          <span>Copyright &#169; {currentYear}</span>
          <span className="separator">&nbsp;|&nbsp;</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

