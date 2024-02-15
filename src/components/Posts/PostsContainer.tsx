'use client';

import { PostsDetails } from '@/components/PostDetails/PostsDetails';
import { PostPages } from '@/components/Posts/PostPages';
import { useEffect, useState } from 'react';

export const PostsContainer = ({params}: { params: { slug: string } }) => {

  const [isParamNan, setIsParamNan] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ('slug' in params) {
      setIsParamNan(isNaN(Number(params.slug[0])));
    }
    setIsLoading(false);
  }, [params]);

  return (
    !isLoading ? (
      isParamNan ? (
          <PostsDetails params={params}/>
        )
        : (
          <PostPages params={params}/>
        )
    ) : null
  );
};
