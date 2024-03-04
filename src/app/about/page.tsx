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
import { getStrapiData } from '@/utils/getFetchClient';

const About = () => {
  const [about, setAbout] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const query = `{
        about {
          data {
            attributes {
              body
            }
          }
        }
      }`;

      const about = await getStrapiData(query);
      setAbout(about.about.data);
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
