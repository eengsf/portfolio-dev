import { useEffect, useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';

import Projects from './components/Projects';
import About from './components/About';
import GradientCursor from './components/GradientCursor';
import NavItem from './components/NavItem';
import Robotic from './components/Robotic';
import Experience from './components/experience';

const sosmed = [
  {
    icon: <FaGithub />,
    link: 'https://github.com/eengsf',
  },
  {
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/shofiyul-fuad-b8836628b',
  },
  {
    icon: <AiFillTikTok />,
    link: 'https://www.tiktok.com/@eengsf_?_t=ZS-8vNVc20mEZL&_r=1',
  },
  {
    icon: <FaYoutube />,
    link: 'https://www.youtube.com/@shofiyulfuad1677',
  },
];

function App() {
  const [navActive, setNavActive] = useState('about');

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const sections = [
      { ref: aboutRef, name: 'about' },
      { ref: experienceRef, name: 'experience' },
      { ref: projectsRef, name: 'projects' },
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -70% 0px', // vertikal up, horizontal left, vertical down, horizontal right
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchedSection = sections.find(
            (section) => section.ref.current === entry.target
          );
          if (matchedSection) {
            setNavActive(matchedSection.name);
          }
        }
      });
    }, observerOptions);

    // observe each section
    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <div className=" w-screen h-screen flex lg:flex-row flex-col">
        <GradientCursor />
        <header className="pointer-events-none lg:fixed lg:w-[45%] w-full h-full flex flex-col justify-between lg:ps-14 md:px-12 px-7 lg:py-24 md:py-16 py-10">
          <div className="flex flex-col gap-3">
            <h1 className="sm:text-5xl text-4xl font-bold text-light">
              Shofiyul Fuad
            </h1>
            <h2 className="sm:text-2xl text-xl font-semibold text-light">
              Programmer
            </h2>
            <p className="text-secondary lg:w-full sm:w-3/4 w-full">
              Hi, I’m a programmer who enjoys the challenge of creating
              technological solutions. I have skills in web development, mobile
              application development, and the field of microcontroller embedded
              systems.
            </p>
          </div>
          <nav className='lg:block hidden'>
            <ul className="flex flex-col gap-5 my-10 pointer-events-auto">
              <NavItem
                name="about"
                href="#about"
                navActive={navActive}
                setNavActive={setNavActive}
              />
              <NavItem
                name="experience"
                href="#experience"
                navActive={navActive}
                setNavActive={setNavActive}
              />
              <NavItem
                name="projects"
                href="#projects"
                navActive={navActive}
                setNavActive={setNavActive}
              />
            </ul>
          </nav>

          <ul className="flex gap-5 pointer-events-auto my-10">
            {sosmed.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tertiary hover:text-light cursor-pointer text-2xl"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </header>
        <main className="lg:pl-[45%] w-full lg:max-h-full h-fit lg:overflow-y-auto lg:pt-24 pt-10  flex flex-col gap-24 scroll-smooth ">
          <section
            id="about"
            data-section="about"
            ref={aboutRef}
            className="flex flex-col w-full scroll-mt-24"
          >
            <About />
          </section>
          <section
            id="experience"
            data-section="experience"
            ref={experienceRef}
            className="w-full scroll-mt-24"
          >
            <Experience/>
          </section>
          <section
            id="projects"
            data-section="projects"
            ref={projectsRef}
            className="w-full scroll-mt-24 md:px-12 px-7"
          >
            <Projects />
          </section>
          <section className="w-full md:px-12 px-7">
            <Robotic />
          </section>
          <footer className=" text-secondary lg:pb-10 pb-5 lg:text-start text-center md:px-12 px-0">
            <div className="max-w-6xl px-4">
              <p className="text-sm text-tertiary">Shofiyul Fuad | Programmer</p>
              <p className="text-sm mt-1">
                Built with{' '}
                <span className="text-tertiary">React.js & Tailwind CSS</span>,
                deployed with <span className="text-tertiary">Vercel</span>
              </p>
              <p className="text-sm">Thank you for visiting my portfolio.</p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
