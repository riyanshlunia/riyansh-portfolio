import { useState } from 'react';

const Domains = () => {
  const [activeHover, setActiveHover] = useState(null);

  const sections = [
    {
      title: 'Creatives.',
      color: '#4A90E2',
      leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor',
      imgSrc: 'https://via.placeholder.com/150'
    },
    {
      title: 'Non Tech.',
      color: '#4A90E5',
      leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      imgSrc: 'https://via.placeholder.com/150'
    },
    {
      title: 'Devs.',
      color: '#6366F1',
      leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      imgSrc: 'https://via.placeholder.com/150'
    },
    {
      title: 'Tech',
      color: '#2563EB',
      leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      imgSrc: 'https://via.placeholder.com/150'
    },
    {
      title: 'UI/UX',
      color: '#3B82F6',
      leftText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      imgSrc: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div
      className="min-h-screen bg-[#061529]"
      style={{
        background: 'linear-gradient(to bottom, #0B1221 0%, #061529 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Our Domains</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor
          </p>
        </div>

        <div className="space-y-24 md:space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start md:items-center transition-all duration-200 ${
                activeHover === index ? 'border border-[#31c4bf] rounded-3xl p-5' : 'p-4'
              }`}
              onMouseEnter={() => setActiveHover(index)}
              onMouseLeave={() => setActiveHover(null)}
            >
              <div className="w-full md:w-1/3 pr-4 md:pr-8 text-white/70 mb-4 md:mb-0">
                <p className="text-sm md:text-md leading-relaxed">{section.leftText}</p>
              </div>

              <div className="hidden md:block w-px h-20 bg-gray-600 mx-4 md:mx-8" />

              <div className="flex-1 text-left md:text-right md:pr-24">
                <h2
                  className="text-4xl md:text-6xl font-bold transition-colors duration-300"
                  style={{
                    color: activeHover === index ? '#FFFFFF' : section.color
                  }}
                >
                  {section.title}
                </h2>
              </div>

              {activeHover === index && (
                <div
                  className="absolute left-0 md:left-[45%] top-full md:top-1/2 mt-8 md:mt-0 w-full md:w-64 bg-white/10 overflow-hidden text-white transition-all duration-300 border border-[#31c4bf]/30 md:-translate-y-1/2 z-10"
                  style={{
                    transform: activeHover === index ? 'none' : 'rotate(-12deg)'
                  }}
                >
                  <img
                    src={section.imgSrc}
                    alt={`${section.title} thumbnail`}
                    className="w-full h-full object-cover md:rotate-12 md:transform-none"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domains;
