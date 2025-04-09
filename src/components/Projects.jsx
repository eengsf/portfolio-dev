import React from 'react';

const listProjects = [
  {
    name: 'Movie Streaming App',
    image: '/movie-streaming-app.jpeg',
    description:
      'A movie streaming application equipped with advanced search features, personalized recommendations, and detailed film information. Users can explore various genres and enjoy high-quality streaming.',
    tech: ['Dart', 'Flutter'],
    demo: 'https://vt.tiktok.com/ZSrAM6gEt/',
  },
  {
    name: 'Dashboard Management',
    image: '/dashboard-management.png',
    description:
      'A modern and responsive car rental management dashboard, designed with features for managing vehicle inventory and efficiently tracking customer rentals.',
    tech: [
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwindcss',
      'ShadCN UI',
      'Firebase',
    ],
    demo: 'https://dashboard-rental.vercel.app/dashboard',
  },
  {
    name: 'Carental',
    image: '/carental.png',
    description:
      ' A modern car rental website that allows users to easily book vehicles, with features like location selection, pickup date, and 24/7 support. Built with a responsive and user-friendly design.',
    tech: [
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwindcss',
      'ShadCN UI',
      'Firebase',
    ],
    demo: 'https://car-rental-two-liart.vercel.app/',
  },
  {
    name: 'Country List App AI',
    image: '/countrylist-ai.png',
    description:
      'An interactive web application that displays a complete list of countries along with detailed information. This application is also equipped with AI integration to provide smart explanations or analyses of the selected country.',
    tech: ['TypeScript', 'React.js', 'Next.js', 'Tailwindcss', 'GraphQL'],
    demo: 'https://country-list-ai.vercel.app/',
  },
  {
    name: 'Slicing UI Tokopedia',
    image: '/slicing-tokped.png',
    description:
      'A responsive and interactive Tokopedia UI slicing project, focusing on replicating the user interface using ShadCN UI technology.',
    tech: ['TypeScript', 'React.js', 'Next.js', 'Tailwindcss', 'ShadCN UI'],
    demo: 'https://clone-tokped.vercel.app/',
  },
];

const Projects = () => {
  return (
    <>
      <div className="flex gap-3 items-center lg:static sticky top-0   py-3 lg:bg-transparent backdrop-blur-lg bg-primary/10 lg:-mx-0 md:-mx-12 -mx-7 lg:px-0 md:px-12 px-7">
        <h2 className="text-2xl text-light align-middle font-bold">Projects</h2>
        <span className="w-1/4 h-[0.25px] bg-light"></span>
      </div>
      {listProjects.map((item, index) => (
        <a
          href={item.demo}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="flex sm:flex-row flex-col-reverse items-start gap-4 mb-5 cursor-pointer lg:hover:bg-tertiary/10 p-5 rounded-lg transition-all duration-150 lg:bg-transparent bg-tertiary/10 "
        >
          <div className="w-36 h-20 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
            <img src={item.image} alt={item.name} className=" object-cover" />
          </div>

          <div className="-mt-2 flex-1">
            <h2 className="text-lg text-light font-semibold mb-1">
              {item.name}
            </h2>
            <p className="text-secondary mb-4 text-sm">{item.description}</p>
            <ul className="flex flex-wrap gap-2 text-secondary">
              {item.tech.map((desc, index) => (
                <li key={index}>
                  <div className="py-1 px-3 text-xs rounded-xl bg-tertiary/15 text-tertiary">
                    {desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </a>
      ))}
    </>
  );
};

export default Projects;
