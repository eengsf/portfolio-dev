import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiCplusplus,
  SiArduino,
  SiDart,
  SiFlutter,
} from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiTailwindcss />, name: 'TailwindCSS' },
  { icon: <SiShadcnui />, name: 'ShadCN' },
  { icon: <IoLogoFirebase />, name: 'Firebase' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiDart />, name: 'Dart' },
  { icon: <SiFlutter />, name: 'Flutter' },
  { icon: <SiCplusplus />, name: 'C++' },
  { icon: <SiArduino />, name: 'Arduino' },
];

function About() {
  return (
    <>
      <div className="flex gap-3 items-center lg:static sticky top-0  md:px-12 px-7 py-3 lg:bg-transparent backdrop-blur-lg bg-primary/10">
        <h2 className="text-2xl text-light align-middle font-bold">About</h2>
        <span className="w-1/4 h-[0.25px] bg-light"></span>
      </div>
      <div className="md:px-12 px-7">
        <p className="text-secondary mb-3">
          A graduate of Electrical Engineering with a focus on{' '}
          <span className="text-tertiary">web programming</span>, particularly
          using <span className="text-tertiary">React and Next.js</span>.
          Actively involved in creating and developing web projects to
          strengthen technical skills while applying experience in building
          efficient, responsive, and user-friendly web interfaces.
        </p>
        <p className="text-secondary mb-6">
          Previously experienced in embedded programming and control algorithms,
          as well as active participation in national-level robotics
          competitions, which helped sharpen{' '}
          <span className="text-tertiary">
            problem-solving skills and systematic logical thinking.
          </span>
        </p>

        <h2 className="text-lg text-light mb-4">Skills</h2>
        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-4 text-center text-light">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-sm hover:scale-110 transition"
            >
              <div className="text-3xl mb-1 text-tertiary">{skill.icon}</div>
              <span className="text-xs text-secondary">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
