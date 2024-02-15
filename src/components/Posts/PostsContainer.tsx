'use client';

import { PostsDetails } from '@/components/PostDetails/PostsDetails';
import { PostPages } from '@/components/Posts/PostPages';
import { useEffect, useState } from 'react';

export const PostsContainer = ({params}: { params: { slug: string } }) => {

  const [isParamNan, setIsParamNan] = useState(false);

  useEffect(() => {
    if ('slug' in params) {
      setIsParamNan(isNaN(Number(params.slug[0])));
    }
  }, [params]);

  return (
    isParamNan ? (
        <PostsDetails params={params}/>
      )
      : (
        <PostPages params={params}/>
      )
  );
};
