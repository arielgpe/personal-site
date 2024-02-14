'use client';


import { PostsDetails } from '@/components/PostDetails/PostsDetails';
import { useEffect, useState } from 'react';
import { PostPages } from '@/components/Posts/PostPages';
import { FrozenRouter } from '@/components/FrozenRouter';

const Posts = ({params}: { params: { slug: string } }) => {

  const [isParamNan, setIsParamNan] = useState(false);


  useEffect(() => {
    if ('slug' in params) {
      setIsParamNan(isNaN(Number(params.slug[0])));
    }
  }, [params]);

  return (
    <FrozenRouter>
      {isParamNan ? (
          <PostsDetails params={params}/>
        )
        : (
          <PostPages params={params}/>
        )
      }
    </FrozenRouter>
  );
};


export default Posts;
