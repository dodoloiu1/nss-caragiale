import React from 'react';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useTeams } from './TeamsContext';

const Team: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const { teams } = useTeams();

  return (
    <section
      id="team"
      ref={ref}
      className={`py-20 border-b border-white border-opacity-10 transition-all duration-700 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the passionate students behind our space settlement project. 
            Each member brings unique skills and perspectives to create innovative solutions 
            for humanity's future in space.
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <Link
              key={team.id}
              to={`/teams/${team.id}`}
              className={`block glass-effect rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 hover:space-glow ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-40 bg-black/30">
                <img src={team.imageUrl} alt={team.name} className="w-full h-40 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{team.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{team.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats (optional) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-space-blue mb-2">12</div>
            <div className="text-gray-300">Team Members</div>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-space-blue mb-2">2</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-space-blue mb-2">15+</div>
            <div className="text-gray-300">Specialties</div>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-space-blue mb-2">100%</div>
            <div className="text-gray-300">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;