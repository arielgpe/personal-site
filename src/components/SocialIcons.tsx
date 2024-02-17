import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandPinterest,
  IconBrandTelegram,
  IconBrandTwitter, IconBrandWhatsapp,
  IconMail
} from '@tabler/icons-react';
import { clsx } from 'clsx';

export const SocialIcons = ({iconName, className}: { iconName: string, className?: string }) => {

  const cls = clsx('h-6 w-6 scale-125 fill-transparent stroke-current stroke-2 opacity-90 group-hover:fill-transparent sm:scale-110', className);

  switch (iconName) {
    case 'Github':
      return <IconBrandGithub className={cls}/>;
    case 'Facebook':
      return <IconBrandFacebook className={cls}/>;
    case 'Instagram':
      return <IconBrandInstagram className={cls}/>;
    case 'LinkedIn':
      return <IconBrandLinkedin className={cls}/>;
    case 'Mail':
      return <IconMail className={cls}/>;
    case 'Twitter':
      return <IconBrandTwitter className={cls}/>;
    case 'Pinterest':
      return <IconBrandPinterest className={cls}/>;
    case 'Telegram':
      return <IconBrandTelegram className={cls}/>;
    case 'WhatsApp':
      return <IconBrandWhatsapp className={cls}/>;
    default:
      return null;
  }
};
