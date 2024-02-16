'use client';

import { Fragment, useEffect, useState } from 'react';
import { Footer } from '@/components/Footer/Footer';
import { LinkButton } from '@/components/LinkButton/LinkButton';
import { Hr } from '@/components/Hr/Hr';
import { Socials } from '@/components/Socials/Socials';
import { Card } from '@/components/Card/Card';
import './home.css';
import { getStrapiClient } from '@/utils/getStrapiClient';
import { ContentType } from '@/interfaces/Strapi';
import { Post } from '@/interfaces/Posts';
import { FrozenRouter } from '@/components/FrozenRouter';

const PROD_URL = process.env.PROD_URL;

const Home = () => {
  const strapi = getStrapiClient();

  const [featuredPosts, setFeaturedPosts] = useState<ContentType<Post>[]>([]);
  const [recentPosts, setRecentPosts] = useState<ContentType<Post>[]>([]);

  useEffect(() => {
    const getData = async () => {
      const featured = await strapi.find<any>('posts', {
        sort: 'publishedAt:desc', populate: '*', filters: {
          featured: {
            $eq: true
          }
        },
        pagination: {
          page: 1,
          pageSize: 3
        }
      });

      const nonFeatured = await strapi.find<any>('posts', {
        sort: 'publishedAt:desc', populate: '*', filters: {
          featured: {
            $eq: false
          }
        },
        pagination: {
          page: 1,
          pageSize: 4
        }
      });

      setFeaturedPosts(featured.data);
      setRecentPosts(nonFeatured.data);
    };

    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <FrozenRouter>
        <main id="main-content">

          <section id="hero">
            <h1>Ariel Guzmán</h1>
            <a
              target="_blank"
              href={`${PROD_URL}/api/blog/feed.xml`}
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
              I&apos;m a full stack developer with over 10 years of experience with commercial level applications.
            </p>
            <p>
              I enjoy strength training, video games and experimenting with new technologies.
              Lately I&apos;ve been playing Final Fantasy 14 and I&apos;m having a blast!
            </p>
            <p>
              Currently, I&apos;m on the lookout for new opportunities in the React or Node.js area. If you think we could be
              a good match, feel free to <LinkButton href={'mailto:ariel.guzman01@gmail.com?subject=job offer>'}>drop me an
              email</LinkButton> or check out my <LinkButton href={'https://linkedin.com/in/arielgpe'}>LinkedIn profile</LinkButton>.
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
                        key={post.id}
                        href={`/posts/${post.attributes.slug}/`}
                        frontmatter={post.attributes}
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
                  {recentPosts.map((post) =>
                    <Card
                      key={post.id}
                      href={`/posts/${post.attributes.slug}/`}
                      frontmatter={post.attributes}
                      secHeading={false}
                    />
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
      </FrozenRouter>
    </>
  );
};

export default Home;
