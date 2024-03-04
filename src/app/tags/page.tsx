'use client';

import { Main } from '@/components/Main/Main';
import { useEffect, useState } from 'react';
import { getStrapiClient } from '@/utils/getStrapiClient';
import { Tag } from '@/components/Tag/Tag';
import { ContentType } from '@/interfaces/Strapi';
import { Tag as ITag } from '@/interfaces/Tags';
import { FrozenRouter } from '@/components/FrozenRouter';
import { getStrapiData } from '@/utils/getFetchClient';

const Tags = () => {
  const [tags, setTags] = useState<ContentType<ITag>[]>([]);


  useEffect(() => {
    const getData = async () => {
      const query = `{
        tags {
          data {
            id
            attributes {
              name
            }
          }
        }
      }`;

      const data = await getStrapiData(query);
      setTags(data.tags.data);
    };

    getData();

  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <FrozenRouter>
      <Main pageTitle="Tags" pageDesc="list of tags used so far">
        <ul>
          {tags.map(tag => <Tag key={tag.id} tag={tag.attributes.name} size="base"/>)}
        </ul>
      </Main>
    </FrozenRouter>
  );
};

export default Tags;
