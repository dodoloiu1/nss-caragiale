import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Awards: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const items = [
    {
      year: '2025',
      title: '1st Place – Team Arkadia-10',
      description:
        'The Arkadia-10 project won first place with a space settlement designed at the Martian L5 point, focused on advanced interplanetary communications and sustainable life support systems.'
    },
    {
      year: '2024',
      title: '2nd Place – Team Ellipsis',
      description:
        'Team Elipsis earned second place with an innovative lunar-orbit settlement centered on utilizing selenian resources and developing a space-based economy.'
    },
    {
      year: '2025',
      title: '3rd Place – Team Demetra',
      description:
        'Project Demetra received third place for an advanced space agriculture system enabling reliable food cultivation under reduced gravity.'
    },
    {
      year: '2025',
      title: 'Honorable Mention – Team Bioma',
      description:
        'Team Bioma received an honorable mention for innovative research in space ecology and the development of a fully functional artificial ecosystem.'
    },
    
  ];

  return (
    <section
      id="premii"
      ref={ref}
      className={`py-20 border-b border-white border-opacity-10 transition-all duration-700 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      tabIndex={0}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">Awards and Achievements</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Over the years, the NSS Caragiale club has achieved remarkable results at the NASA Space Settlement Contest,
            demonstrating excellence in space settlement design.
          </p>
        </div>

        <div className="relative">
          <div className="border-l border-white/20 ml-4">
            {items.map((item, index) => (
              <div key={index} className="relative pl-6 pb-10">
                <span className="absolute -left-2 top-1.5 w-3 h-3 rounded-full bg-space-blue shadow-[0_0_0_4px_rgba(59,130,246,0.2)]"></span>
                <div className="glass-effect p-6 rounded-xl">
                  <div className="text-space-blue font-bold text-lg"><strong>{item.year}</strong></div>
                  <div className="text-2xl font-semibold text-white mt-1">{item.title}</div>
                  <p className="text-gray-300 mt-3 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;


