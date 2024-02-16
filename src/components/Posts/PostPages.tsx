'use client';

import { getStrapiClient } from '@/utils/getStrapiClient';
import { useEffect, useState } from 'react';
import { Main } from '@/components/Main/Main';
import { Pagination } from '@/components/Pagination/Pagination';
import { Card } from '@/components/Card/Card';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { IPagination } from '@/interfaces/Pagination';
import { ContentType } from '@/interfaces/Strapi';
import { Post } from '@/interfaces/Posts';


export const PostPages = ({params}: { params: { slug: string } }) => {
  const strapi = getStrapiClient();

  const [pagination, setPagination] = useState<IPagination<ContentType<Post>>>({
    totalPages: 1,
    currentPage: 1,
    paginatedPosts: []
  });

  useEffect(() => {
    const getData = async () => {
      let slug = 1;
      if ('slug' in params) {
        const slugNumber = Number(params.slug[0]);
        if (!isNaN(slugNumber)) {
          slug = slugNumber;
        }
      }
      const posts = await strapi.find<any>('posts', {
        sort: 'publishedAt:desc', populate: '*',
        pagination: {
          page: slug,
          pageSize: 3
        }
      });
      const pagntn = posts.meta.pagination as any;
      setPagination({
        currentPage: slug,
        totalPages: pagntn.pageCount,
        paginatedPosts: posts.data
      });
    };

    getData();

  }, [params]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Breadcrumbs/>
      <Main pageTitle="Posts" pageDesc="All the articles I've posted.">
        <ul>
          {
            pagination.paginatedPosts.map((post) => (
              <Card key={post.id} href={`/posts/${post.attributes.slug}/`} frontmatter={post.attributes}/>
            ))
          }
        </ul>
      </Main>
      <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages}
                  prevUrl={`/posts${pagination.currentPage - 1 !== 1 ? '/' + (pagination.currentPage - 1) : ''}/`}
                  nextUrl={`/posts/${pagination.currentPage + 1}`}/>
    </>
  );
};
