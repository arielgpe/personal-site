import Link from 'next/link';

export default function Home() {
  return (
    <main className={'animate-fade-in h-[550px] sm:overflow-y-scroll sm:h-full'}>
      <h1 className={'text-2xl mb-4 sm:text-8xl'}>Welcome.</h1>
      <p>
        My name is Ariel Guzm&#225;n, I&apos;m a software developer from Dominican Republic with 10+ years of experience with
        commercial level applications.
        I&apos;m a Front-End-heavy Full-stack developer with vast experience in frameworks like React, Angular and Ionic.
        Experienced with Node using frameworks like Express and NestJS.
        Comfortable writing complex Mongo queries.
      </p>
      <p className={'mt-10'}>
        I’ve also worked with native Android development utilizing both Kotlin and Java.
      </p>
      <p className={'mt-10 text-lg font-medium'}>
        Currently looking for new opportunities in the React or Node areas.
        If you think we could be a good match <Link className={'text-pink'} href={'mailto:ariel.guzman01@gmail.com?subject=job offer'}>send me an email</Link> or checkout <Link className={'text-pink'} href={'https://linkedin.com/in/arielgpe'}>my LinkedIn</Link>.
      </p>
    </main>
  );
}
