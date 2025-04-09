import React from 'react';

const robotics = [
  {
    name: 'Fire Fighting Robot',
    link: 'https://www.youtube.com/watch?v=diCfQHWRh60&t=1s',
    description: 'A mission to extinguish multiple fire points in different rooms within a maze-like arena and return to the starting point',
    image: '/krpai.jpg', 
  },
  {
    name: 'Rescue Robot',
    link: 'https://www.youtube.com/watch?v=4l2zqPrFwx8&t=17s',
    description: 'A mission to extinguish fire sources while simultaneously rescuing victims by relocating them to a safe area.',
    image: '/krsri.png',
  },
  {
    name: 'Stair Climbing Robot',
    link: 'https://www.youtube.com/watch?v=UPSTKmEljeU',
    description: 'A mission to maintain balance while ascending stairs',
    image: '/hexapod.jpg',
  },
];

function Robotic() {
  return (
    <>
      {robotics.map((item, index) => (
        <a href={item.link} 
        key={index}
        target="_blank"
        rel="noopener noreferrer"
        className="flex sm:flex-row flex-col-reverse items-start sm:gap-4 gap-0 cursor-pointer lg:hover:bg-tertiary/10 rounded-lg transition-all duration-150 mb-5 lg:bg-transparent bg-tertiary/10 p-5"
      >
        <div className="w-36 h-20 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
          <img src={item.image} alt={item.name} className=" object-cover" />
        </div>

        <div className=" flex-1">
          <h2 className="text-lg text-tertiary font-semibold">
            {item.name}
          </h2>
          <p className="text-secondary mb-4 text-sm">{item.description}</p>
          
        </div>
      </a>
      ))}
    </>
  );
}

export default Robotic;
