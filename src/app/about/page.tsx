'use client';

import { Main } from '@/components/Main/Main';
import { useEffect, useState } from 'react';
import { getStrapiClient } from '@/utils/getStrapiClient';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import Markdown from 'react-markdown';
import { LinkRenderer } from '@/components/LinkRenderer';
import { FrozenRouter } from '@/components/FrozenRouter';
import { Hr } from '@/components/Hr/Hr';

const About = () => {
  const strapi = getStrapiClient();
  const [about, setAbout] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const about = await strapi.find<any>('about', {
        populate: '*'
      });

      setAbout(about.data);
    };

    getData();

  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <FrozenRouter>
      <Main pageTitle={about?.attributes.title ?? 'About'}>
        <div className={'about-md'}>
          {about ? <Markdown skipHtml={false} components={{a: LinkRenderer, hr: MdHr}}
                             remarkPlugins={[remarkGfm, remarkEmoji]}>{about.attributes.body}</Markdown> : null}
        </div>
      </Main>
    </FrozenRouter>
  );
};

export default About;

const MdHr = (props: any) => {
  return (
    <div {...props} className={`my-5`}>
      <Hr noPadding={true}/>
    </div>
  );
};
