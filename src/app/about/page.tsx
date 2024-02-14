'use client';

import { Main } from '@/components/Main/Main';
import { useEffect, useState } from 'react';
import { getStrapiClient } from '@/utils/getStrapiClient';
import remarkGfm from 'remark-gfm';
import Markdown from 'react-markdown';
import { LinkRenderer } from '@/components/LinkRenderer';
import { FrozenRouter } from '@/components/FrozenRouter';

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
        {about ? <Markdown skipHtml={false} components={{a: LinkRenderer}}
                  remarkPlugins={[remarkGfm]}>{about.attributes.body}</Markdown> : null}
      </Main>
    </FrozenRouter>
  );
};

export default About;
