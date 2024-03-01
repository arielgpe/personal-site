// import { slugifyStr } from '@utils/slugify';

import Datetime from '../Datetime/Datetime';
import { LinkButton } from '@/components/LinkButton/LinkButton';
import { Post } from '@/interfaces/Posts';
import { Tag } from '@/components/Tag/Tag';

export interface Props {
  href?: string;
  frontmatter: Post;
  secHeading?: boolean;
}

export const Card = ({href, frontmatter, secHeading = true}: Props) => {

  const headerProps = {
    // style: {viewTransitionName: slugifyStr(title)},
    className: 'text-lg font-medium decoration-dashed hover:underline',
  };

  return (
    <li className="my-6">
      <LinkButton
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{frontmatter.title}</h2>
        ) : (
          <h3 {...headerProps}>{frontmatter.title}</h3>
        )}
      </LinkButton>
      <Datetime pubDatetime={frontmatter.publishedAt} modDatetime={frontmatter.updatedAt}/>
      <p className={'!mb-0'}>
        {frontmatter.description}
      </p>
      <ul>
        {frontmatter.tags.data.map(tag => <Tag key={tag.id} tag={tag.attributes.name}/>)}
      </ul>
    </li>
  );
};
