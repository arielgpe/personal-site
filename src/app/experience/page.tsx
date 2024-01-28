import Image from 'next/image';

const Experience = () => {

  const experiences = [
    {
      src: '/it_crowd_argentina_logo.jpeg',
      name: 'It Crowd Argentina',
      position: 'Senior Software Developer (Remote)',
      duration: 'November 2018 - Present',
      description: [
        'Worked as a contractor for multiple projects using technologies such as NodeJS, React and Angular.',
        'Managed production sites hosted on AWS, Heroku, Netflify and Google Cloud Services.',
        'Worked with Firestore (serverless), MongoDB and PostgresSQL.',
        'Developed Android/IOS applications with Ionic and also developed plugins using Cordova.',
        'Created a product review tool on top of ThreeJS which allowed users to mark specific parts of a product (shoes, shirts, etc...) and leave reviews for further improvement.'
      ]
    },
    {
      src: '/newtechsa_logo.jpeg',
      name: 'Newtech SRL',
      position: 'Senior Software Developer',
      duration: 'August 2016 - November 2018',
      description: [
        'Coded cohesive software for Verizon internal use.',
        'Migrated legacy software from JSF to Angular.',
        'Developed products such as ChatBots with IBM Watson.',
      ]
    },
    {
      src: '/media_revolution_logo.jpeg',
      name: 'Media Revolution',
      position: 'Full Stack Developer',
      duration: 'April 2014 - August 2016',
      description: [
        'Managed the Android and Javascript Team.',
        'Developed clean and reusable code using Java and Javascript (Angular).',
        'Provided feedback on the design and creation of new products.',
      ]
    }
  ];

  return (
    <div className={'overflow-y-scroll h-[550px]'}>
      <p className={'text-lg font-large mb-2'}>My latest work experience (scroll to view all)</p>

      <div className="grid grid-cols-1 gap-1">
        {experiences.map((experience, index) => (
          <figure key={index} className="rounded-xl p-4">
            <Image className="w-24 h-24 rounded-full mx-auto mb-3" src={experience.src} alt={experience.name}
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
