import Image from 'next/image';

const Skills = () => {

  const skills = [
    {
      name: 'Angular',
      src: '/angular.png'
    },
    {
      name: 'CSS',
      src: '/css.png'
    },
    {
      name: 'Html',
      src: '/html5.png'
    },
    {
      name: 'Ionic',
      src: '/ionic.png'
    },
    {
      name: 'Javascript',
      src: '/javascript.png'
    },
    {
      name: 'Jest',
      src: '/jest.png'
    },
    {
      name: 'Mongo',
      src: '/mongo.png'
    },
    {
      name: 'Next',
      src: '/next.png'
    },
    {
      name: 'Node',
      src: '/node.png'
    },
    {
      name: 'React',
      src: '/react.png'
    },
    {
      name: 'Tailwind',
      src: '/tailwind.png'
    },
    {
      name: 'Typescript',
      src: '/typescript.png'
    },

  ];

  return (
    <div >
      <p className={'text-lg font-medium mb-2'}>Some of the frameworks and libraries I&apos;ve been working with lately.</p>

      <div className="grid grid-cols-4 gap-1">
        {skills.map((skill, index) => (
          <figure key={index} className="p-4 tooltip">
            <div className="tooltiptext">{skill.name}</div>
            <Image className="w-24 h-24 mx-auto mb-3" src={`/personal-site${skill.src}`} alt={skill.name}
                 width="512" height="512"/>
          </figure>
        ))}
      </div>

    </div>
  );
};

export default Skills;
