import Image from 'next/image';
import { Experiences } from '@/interfaces/Experiences';

const Experience = async () => {
  const res = await import('../experience/api/route');
  const experiences = await (await res.GET()).json() as Experiences;

  return (
    <div className={'overflow-y-scroll h-[550px]'}>
      <p className={'text-lg font-large mb-2'}>My latest work experience (scroll to view all)</p>

      <div className="grid grid-cols-1 gap-1">
        {experiences.map((experience, index) => (
          <figure key={index} className="rounded-xl p-4">
            <Image priority={true} className="w-24 h-24 rounded-full mx-auto mb-3" src={`/personal-site${experience.src}`} alt={experience.name}
                 width="200" height="200"/>
            <figcaption className="font-medium text-center">
              <div className="text-sky-500 dark:text-sky-400">
                {experience.name} - {experience.position}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {experience.duration}
              </div>
            </figcaption>
            <div className="pt-6 text-left space-y-4">
              <blockquote>
                <ul className={'list-disc text-lg font-medium'}>
                  {experience.description.map(d => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </blockquote>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Experience;
