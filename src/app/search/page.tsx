'use client';

import { Main } from '@/components/Main/Main';
import { Card } from '@/components/Card/Card';
import { useEffect, useRef, useState } from 'react';
import { ContentType } from '@/interfaces/Strapi';
import { Post } from '@/interfaces/Posts';
import { getStrapiClient } from '@/utils/getStrapiClient';
import { useDebounce } from '@/utils/useDebounce';
import { FrozenRouter } from '@/components/FrozenRouter';
import { useRouter } from 'next/navigation';

const Search = () => {
  const strapi = getStrapiClient();
  const [posts, setPosts] = useState<ContentType<Post>[]>([]);
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState('');
  const debouncedVendorNameSearchTerm = useDebounce<string>(
    inputVal,
    500,
  );

  const getData = async (searchTerm: string | null) => {
    if (searchTerm && searchTerm.length > 2) {
      const posts = await strapi.find<any>('posts', {
        sort: 'publishedAt:desc', populate: '*', filters: {
          $or: [
            {
              title: {
                $containsi: searchTerm,
              }
            },
            {
              description: {
                $containsi: searchTerm,
              }
            }
          ]
        },
      });

      setPosts(posts.data);
    } else {
      setPosts([]);
    }
  };

  useEffect(() => {
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get('q');
    if (searchStr) setInputVal(searchStr);
  }, []);

  useEffect(() => {
    getData(debouncedVendorNameSearchTerm);
  }, [debouncedVendorNameSearchTerm]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = async (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setInputVal(value);
    if (value.length > 0) {
      router.push(`?q=${value}`);
    } else {
      router.replace('/search');
    }
  };

  return (
    <FrozenRouter>
      <Main pageTitle="Searh" pageDesc={`Search any post ..."`}>
        <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 opacity-75">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
          </svg>
          <span className="sr-only">Search</span>
        </span>
          <input
            className="block w-full rounded border border-skin-fill
        border-opacity-40 bg-skin-fill py-3 pl-10
        pr-3 placeholder:italic placeholder:text-opacity-75
        focus:border-skin-accent focus:outline-none"
            placeholder="Search for anything..."
            type="text"
            name="searchByPostName"
            value={inputVal}
            onChange={handleChange}
            autoComplete="off"
            // autoFocus
            ref={inputRef}
          />
        </label>

        {inputVal.length > 1 && (
          <div className="mt-8">
            Found {posts?.length}
            {posts?.length && posts?.length === 1
              ? ' result'
              : ' results'}{' '}
            for &apos;{inputVal}&apos;
          </div>
        )}

        <ul>
          {posts &&
            posts.map(post => (
              <Card
                href={`/posts/${post.attributes.slug}/`}
                frontmatter={post.attributes}
                key={post.id}
              />
            ))}
        </ul>
      </Main>
    </FrozenRouter>
  );
};

export default Search;
