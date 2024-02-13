import type { Post } from '../../tina/__generated__/types.ts';

const getSortedPosts = (posts: Post[]) => {
  return posts
    .sort(
      (a, b) =>
        Math.floor(
          // @ts-expect-error: possibly null
          new Date(b.modDatetime ?? b.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          // @ts-expect-error: possibly null
          new Date(a.modDatetime ?? a.pubDatetime).getTime() / 1000
        )
    );
};

export default getSortedPosts;
