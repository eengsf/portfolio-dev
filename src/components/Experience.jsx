import React from 'react';

const listEx = [
  {
    date: 'Apr 2022 - May 2022',
    name: 'Practical Assistant (Database Management)',
    description: [
      'Guided laboratory sessions for students, providing instruction on the fundamentals of database management, including database design and SQL query implementation.',
      'Performed technical troubleshooting and provided solutions to issues encountered by students during the lab sessions.',
    ],
  },
  {
    date: 'Jan 2020 - Dec 2021',
    name: 'Hexapod Legged Robot Programmer (Trunojoyo Robotics Team)',
    description: [
      'Contributed to the team’s success in a national competition, achieving a top 10 national ranking',
      'Developed innovative algorithms, improving robot performance on complex tracks by up to 30% more stability on uneven surfaces',
      'Coordinated with mechanical and electronics teams to ensure smooth system integration',
    ],
  },
  {
    date: 'Jan 2020 - Dec 2020',
    name: 'Head of Programming Division (UKM FT SOKET)',
    description: [
      'Led and was responsible for the programming division',
      'Supervised the development and testing of microcontroller-based projects',
      'Conducted regular training sessions for division members, covering topics from robotics programming to control algorithm implementation',
      'Coordinated and collaborated with other divisions for external partnerships such as inter-campus robotics benchmarking and public training sessions',
    ],
  },
];

function Experience() {
  return (
    <>
      <div className="flex gap-3 items-center mb-3">
        <h2 className="text-2xl text-light align-middle font-bold">Experience</h2>
        <span className="w-1/4 h-[0.25px] bg-light"></span>
      </div>
      {listEx.map((item, index) => (
        <div key={index} className='mb-2'>
          <h2 className=" text-light font-semibold">{item.name}</h2>
          <p className="text-tertiary text-sm">{item.date}</p>
          <ul className="list-disc pl-6 text-secondary">
            {item.description.map((desc, index) => (
              <li key={index} className='text-sm'>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Experience;
