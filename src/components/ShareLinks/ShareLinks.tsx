import { LinkButton } from '@/components/LinkButton/LinkButton';
import socialIcons from '@/assets/socialIcons';
import { cloneElement } from 'react';
import { usePathname } from 'next/navigation';

const PROD_URL = process.env.PROD_URL;

const shareLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/?text=',
    linkTitle: `Share this post via WhatsApp`,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/sharer.php?u=',
    linkTitle: `Share this post on Facebook`,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/intent/tweet?url=',
    linkTitle: `Tweet this post`,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/share/url?url=',
    linkTitle: `Share this post via Telegram`,
  },
  {
    name: 'Pinterest',
    href: 'https://pinterest.com/pin/create/button/?url=',
    linkTitle: `Share this post on Pinterest`,
  },
  {
    name: 'Mail',
    href: 'mailto:?subject=See%20this%20post&body=',
    linkTitle: `Share this post via email`,
  },
] as const;

export const ShareLinks = () => {

  const pathname = usePathname();

  return (
    <div className={`flex flex-col flex-wrap items-center justify-center gap-1 sm:items-start`}>
      <span className="italic">Share this post on:</span>
      <div className="text-center">
        {
          shareLinks.map(social => (
            <LinkButton
              key={social.name}
              target={'_blank'}
              href={`${social.href + PROD_URL + pathname}`}
              className="scale-90 p-2 hover:rotate-6 sm:p-1"
              title={social.linkTitle}
            >
              {
                cloneElement(socialIcons[social.name])
              }
              <span className="sr-only">{social.linkTitle}</span>
            </LinkButton>
          ))
        }
      </div>
    </div>
  );
};
