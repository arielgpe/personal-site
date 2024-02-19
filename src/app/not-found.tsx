import { LinkButton } from '@/components/LinkButton/LinkButton';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: {
    absolute: '404 - Not Found'
  },
  description: 'Page not found',
};

const notFound = () => {
  return (
    <main className={'flex flex-col mt-auto'}>
      <section>
        <main id="main-content">
          <div className="not-found-wrapper">
            <h1 aria-label="404 Not Found">404</h1>
            <span aria-hidden="true">¯\_(ツ)_/¯</span>
            <p>Page Not Found</p>
            <LinkButton
              href="/"
              className="my-6 text-lg underline decoration-dashed underline-offset-8"
            >
              Go back home
            </LinkButton>
          </div>
        </main>
      </section>
    </main>
  );
};

export default notFound;
