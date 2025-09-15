import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const projects = [
  {
    title: 'Nova Station Alpha',
    description: 'Our flagship space settlement design featuring a rotating torus structure capable of housing 10,000 residents. The station incorporates advanced life support systems, artificial gravity, and sustainable resource management.',
    imageUrl: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    technologies: ['Structural Engineering', 'Life Support Systems', 'Artificial Gravity', 'Resource Management'],
    status: 'In Development',
    features: [
      'Rotating torus design for artificial gravity',
      'Advanced closed-loop life support',
      'Modular construction system',
      'Sustainable energy generation'
    ]
  },
  {
    title: 'Lunar Gateway Hub',
    description: 'A lunar-based space settlement designed as a stepping stone for deeper space exploration. Features innovative lunar regolith processing and low-gravity adaptation technologies.',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    technologies: ['Lunar Construction', 'Regolith Processing', 'Low-Gravity Adaptation', 'Radiation Shielding'],
    status: 'Concept Phase',
    features: [
      'Underground habitat design',
      'Lunar regolith utilization',
      'Radiation protection systems',
      'Low-gravity agriculture'
    ]
  },
  {
    title: 'Mars Colony Initiative',
    description: 'A comprehensive Mars surface settlement featuring pressurized domes, underground networks, and advanced terraforming technologies for long-term human habitation.',
    imageUrl: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    technologies: ['Mars Architecture', 'Terraforming', 'Atmospheric Processing', 'Surface Transportation'],
    status: 'Research Phase',
    features: [
      'Pressurized dome habitats',
      'Underground tunnel networks',
      'Atmospheric processing plants',
      'Surface transportation systems'
    ]
  }
];

const Projects: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 border-b border-white border-opacity-10 transition-all duration-700 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Our Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our innovative space settlement designs that push the boundaries 
            of human habitation beyond Earth. Each project represents years of research, 
            design, and engineering excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-effect rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 hover:space-glow ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'In Development' 
                        ? 'bg-green-500 bg-opacity-20 text-green-400 border border-green-500 border-opacity-30'
                        : project.status === 'Concept Phase'
                        ? 'bg-yellow-500 bg-opacity-20 text-yellow-400 border border-yellow-500 border-opacity-30'
                        : 'bg-blue-500 bg-opacity-20 text-blue-400 border border-blue-500 border-opacity-30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <span className="text-space-blue text-sm mt-1">•</span>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-space-blue bg-opacity-20 text-space-blue text-xs rounded-full border border-space-blue border-opacity-30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-space-blue mb-2">3</div>
            <div className="text-gray-300">Active Projects</div>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-space-blue mb-2">2+</div>
            <div className="text-gray-300">Years Research</div>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-space-blue mb-2">15+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-space-blue mb-2">50K+</div>
            <div className="text-gray-300">Potential Residents</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;