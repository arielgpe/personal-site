'use client';

import { Pagination } from '@/components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import client from '../../../../tina/__generated__/client';
import { Post } from '../../../../tina/__generated__/types';
import { Card } from '@/components/Card/Card';
import { Main } from '@/components/Main/Main';
import getSortedPosts from '@/utils/getSortedPosts';
import getPagination from '@/utils/getPagination';

interface Pagination {
  totalPages: number;
  currentPage: number;
  paginatedPosts: Post[];
}

const Posts = ({params}: { params: { slug: string } }) => {
  const [pagination, setPagination] = useState<Pagination>({
    totalPages: 1,
    currentPage: 1,
    paginatedPosts: []
  });


  useEffect(() => {
    const getData = async () => {
      const postsResponse = await client.queries.postConnection({filter: {draft: {eq: false}}});
      const posts = postsResponse.data.postConnection.edges?.map((post) => {
        return {slug: post?.node?._sys.filename, ...post?.node};
      }) as Post[];
      const sortedPosts = getSortedPosts(posts);

      let slug = 1;

      if ('slug' in params) {
        slug = Number(params.slug[0]);
      }

      const pagination = getPagination({
        posts: sortedPosts,
        page: slug,
      });

      setPagination(pagination);
    };

    getData();

  }, [params]);


  return (
    <div>
      <Main pageTitle="Posts" pageDesc="All the articles I've posted.">
        <ul>
          {
            pagination.paginatedPosts.map((post) => (
              <Card key={post.title} href={`/posts/${post.slug}/`} frontmatter={post}/>
            ))
          }
        </ul>
      </Main>
      <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages}
                  prevUrl={`/posts${pagination.currentPage - 1 !== 1 ? '/' + (pagination.currentPage - 1) : ''}/`}
                  nextUrl={`/posts/${pagination.currentPage + 1}`}/>
    </div>
  );
};
export default Posts;
