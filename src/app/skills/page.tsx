import Image from 'next/image';
import { Skills } from '@/interfaces/Skills';

const Skills = async () => {
  const res = await import('../skills/api/route');
  const skills = await (await res.GET()).json() as Skills;

  return (
    <div>
      <p className={'text-lg font-medium mb-2'}>Some of the frameworks and libraries I&apos;ve been working with
        lately.</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
        {skills.map((skill, index) => (
          <figure key={index} className="p-4 tooltip">
            <div className="tooltiptext">{skill.name}</div>
            <Image priority={true} className="w-24 h-24 mx-auto mb-3" src={`${skill.src}`} alt={skill.name}
                   width="512" height="512"/>
          </figure>
        ))}
      </div>

    </div>
  );
};

export default Skills;
