import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const teamMembers = [
  
  // New members — ARKADIA 11 (all 11th Grade)
  {
    name: 'Lungu Răzvan Tudor',
    role: 'Team Member — ARKADIA 11',
    grade: '11th Grade',
    bio: 'Participant in the ARKADIA 11 project.',
    imageUrl: 'https://via.placeholder.com/256x256?text=ARKADIA',
    specialties: ['ARKADIA 11']
  },
  {
    name: 'Radu Vlad Alexandru',
    role: 'Team Member — ARKADIA 11',
    grade: '11th Grade',
    bio: 'Participant in the ARKADIA 11 project.',
    imageUrl: 'https://via.placeholder.com/256x256?text=ARKADIA',
    specialties: ['ARKADIA 11']
  },
  {
    name: 'Șerban Lara Isabela',
    role: 'Team Member — ARKADIA 11',
    grade: '11th Grade',
    bio: 'Participant in the ARKADIA 11 project.',
    imageUrl: 'https://via.placeholder.com/256x256?text=ARKADIA',
    specialties: ['ARKADIA 11']
  },
  {
    name: 'Turcan Eric Octavian',
    role: 'Team Member — ARKADIA 11',
    grade: '11th Grade',
    bio: 'Participant in the ARKADIA 11 project.',
    imageUrl: 'https://via.placeholder.com/256x256?text=ARKADIA',
    specialties: ['ARKADIA 11']
  },
  {
    name: 'Blana Matei',
    role: 'Team Member — ARKADIA 11',
    grade: '11th Grade',
    bio: 'Participant in the ARKADIA 11 project.',
    imageUrl: 'https://via.placeholder.com/256x256?text=ARKADIA',
    specialties: ['ARKADIA 11']
  },
  {
    name: 'Armin',
    role: 'Team Member — ARKADIA 11',
    grade: '11th Grade',
    bio: 'Participant in the ARKADIA 11 project.',
    imageUrl: 'https://via.placeholder.com/256x256?text=ARKADIA',
    specialties: ['ARKADIA 11']
  }
];

const Team: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

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

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`glass-effect p-6 rounded-2xl text-center transition-all duration-500 hover:transform hover:scale-105 hover:space-glow ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto border-4 border-space-blue object-cover"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-space-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {member.grade}
                </div>
              </div>

              {/* Member Info */}
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-space-blue text-lg font-semibold mb-4">{member.role}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.bio}</p>

              {/* Specialties */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Specialties</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.specialties.map((specialty, specIndex) => (
                    <span
                      key={specIndex}
                      className="px-3 py-1 bg-space-blue bg-opacity-20 text-space-blue text-xs rounded-full border border-space-blue border-opacity-30"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
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