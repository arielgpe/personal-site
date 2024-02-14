'use client';

import { useEffect, useState } from 'react';
import { getStrapiClient } from '@/utils/getStrapiClient';
import { Card } from '@/components/Card/Card';
import { IPagination } from '@/interfaces/Pagination';
import { Main } from '@/components/Main/Main';
import { Pagination } from '@/components/Pagination/Pagination';
import { ContentType } from '@/interfaces/Strapi';
import { Post } from '@/interfaces/Posts';
import { FrozenRouter } from '@/components/FrozenRouter';

const Tags = ({params}: { params: { slug: string[] } }) => {
  const strapi = getStrapiClient();
  const [posts, setPosts] = useState<ContentType<Post>[]>([]);


  const [pagination, setPagination] = useState<IPagination<ContentType<Post>>>({
    totalPages: 1,
    currentPage: 1,
    paginatedPosts: []
  });

  useEffect(() => {
    const getData = async () => {
      const slug = params.slug[0];
      const page = Number(params.slug[1]) || 1;

      const posts = await strapi.find<any>('posts', {
        sort: 'publishedAt:desc', populate: '*',
        filters: {
          tags: {
            name: {
              $in: [slug]
            }
          }
        },
        pagination: {
          page: page,
          pageSize: 3
        }
      });
      const pagntn = posts.meta.pagination as any;
      setPagination({
        currentPage: page,
        totalPages: pagntn.pageCount,
        paginatedPosts: posts.data
      });

    };

    if ('slug' in params) {
      getData();
    }
  }, []);


  return (
    <FrozenRouter>
      {/*<Breadcrumbs/>*/}
      <Main pageTitle="Posts" pageDesc={`All the articles with the tag "${params.slug[0]}"`}>
        <ul>
          {
            pagination.paginatedPosts.map((post) => (
              <Card key={post.id} href={`/posts/${post.attributes.slug}/`} frontmatter={post.attributes}/>
            ))
          }
        </ul>
      </Main>
      <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages}
                  prevUrl={`/tags/${params.slug[0]}/${pagination.currentPage - 1 !== 1 ? '/' + (pagination.currentPage - 1) : ''}/`}
                  nextUrl={`/tags/${params.slug[0]}/${pagination.currentPage + 1}`}/>
    </FrozenRouter>
  )
}

export default Tags;
