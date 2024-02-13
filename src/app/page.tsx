'use client';

import { Fragment, useEffect, useState } from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { LinkButton } from '@/components/LinkButton/LinkButton';
import { Hr } from '@/components/Hr/Hr';
import { Socials } from '@/components/Socials/Socials';
import { Card } from '@/components/Card/Card';
import './home.css';
import client from '../../tina/__generated__/client';
import { Post } from '../../tina/__generated__/types';
import getSortedPosts from '@/utils/getSortedPosts';

const Home = () => {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getData = async() => {
      const postsResponse = await client.queries.postConnection({sort: 'pub-mod-dates', filter: { draft: { eq: false } }});
      const posts = postsResponse.data.postConnection.edges?.reverse().map((post) => {
        return {slug: post?.node?._sys.filename, ...post?.node}
      }) as Post[];
      setFeaturedPosts(posts.filter(post => post.featured))
      setRecentPosts(posts.filter(post => !post.featured))
    }

    getData();
  }, []);


  return (
    <Fragment>
      <Header/>
      <main id="main-content">
        <section id="hero">
          <h1>Ariel Guzmán</h1>
          <a
            target="_blank"
            href="/rss.xml"
            className="rss-link"
            aria-label="rss feed"
            title="RSS Feed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="rss-icon"
            >
              <path
                d="M19 20.001C19 11.729 12.271 5 4 5v2c7.168 0 13 5.832 13 13.001h2z"
              ></path>
              <path
                d="M12 20.001h2C14 14.486 9.514 10 4 10v2c4.411 0 8 3.589 8 8.001z"
              ></path>
              <circle cx="6" cy="18" r="2"></circle>
            </svg>
            <span className="sr-only">RSS Feed</span>
          </a>

          <p>
            AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro
            blog theme. This theme follows best practices and provides accessibility
            out of the box. Light and dark mode are supported by default. Moreover,
            additional color schemes can also be configured.
          </p>
          <p>
            Read the blog posts or check
            <LinkButton
              className="underline mx-2 decoration-dashed underline-offset-4 hover:text-skin-accent"
              href="https://github.com/satnaing/astro-paper#readme"
            >
              README
            </LinkButton>
            for more info.
          </p>

          <div className="social-wrapper">
            <div className="social-links">Social Links:</div>
            <Socials/>
          </div>
        </section>

        <Hr/>

        {
          featuredPosts.length > 0 && (
            <>
              <section id="featured">
                <h2>Featured</h2>
                <ul>
                  {featuredPosts.map(post => (
                    <Card
                      key={post.title}
                      href={`/posts/${post.slug}/`}
                      frontmatter={post}
                      secHeading={false}
                    />
                  ))}
                </ul>
              </section>
              {recentPosts.length > 0 &&
                  <Hr/>}
            </>
          )
        }

        {
          recentPosts.length > 0 && (
            <section id="recent-posts">
              <h2>Recent Posts</h2>
              <ul>
                {recentPosts.map((post, index) =>
                    index < 4 && (
                      <Card
                        key={post.title}
                        href={`/posts/${post.slug}/`}
                        frontmatter={post}
                        secHeading={false}
                      />
                    )
                )}
              </ul>
            </section>
          )
        }

        <div className="all-posts-btn-wrapper">
          <LinkButton href="/posts/">
            All Posts
            <svg xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"
              ></path>
            </svg>
          </LinkButton>
        </div>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default Home;
