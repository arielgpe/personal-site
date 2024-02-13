import { LinkButton } from '@/components/LinkButton/LinkButton';
import { cloneElement, createElement, Fragment } from 'react';
import { SITE } from '@/components/Header/Header';
import socialIcons from '@/assets/socialIcons';
import './socials.css';

interface Props {
  centered?: boolean;
}

type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];


const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/arielgpe",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/arielgpe",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "http://linkedin.com/in/arielgpe",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:ariel.guzman01@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/18097693831?text=I'm interested",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: true,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
];

export const Socials = ({centered}: Props) => {

  return (
    <div className={`social-icons ${centered ? 'flex' : ''}`}>
      {
        SOCIALS.filter(social => social.active).map(social => (
          <LinkButton
            key={social.name}
            target="_blank"
            href={social.href}
            className="link-button"
            title={social.linkTitle}
          >
            {
              cloneElement(socialIcons[social.name], {
                className: 'icon-tabler'
              })
            }
            <span className="sr-only">{social.linkTitle}</span>
          </LinkButton>
        ))
      }
    </div>
  );
};
