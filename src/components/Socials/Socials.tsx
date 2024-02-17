import { LinkButton } from '@/components/LinkButton/LinkButton';
import { SITE } from '@/components/Header/Header';
import './socials.css';
import { SocialIcons } from '@/components/SocialIcons';

interface Props {
  centered?: boolean;
}

type SocialObjects = {
  name: string;
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
            <SocialIcons iconName={social.name} />
            <span className="sr-only">{social.linkTitle}</span>
          </LinkButton>
        ))
      }
    </div>
  );
};
