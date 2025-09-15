import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const features = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "Pushing the boundaries of space settlement design with cutting-edge technology and creative solutions."
    },
    {
      icon: "🌍",
      title: "Sustainability",
      description: "Developing environmentally conscious solutions for long-term space habitation and resource management."
    },
    {
      icon: "👥",
      title: "Collaboration",
      description: "Working together as a unified team to tackle the complex challenges of space colonization."
    },
    {
      icon: "🎓",
      title: "Education",
      description: "Learning and growing through hands-on experience in aerospace engineering and design."
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 border-b border-white border-opacity-10 transition-all duration-700 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            About Our Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of students from Colegiul Național "Ion Luca Caragiale" 
            in Bucharest, dedicated to advancing humanity's future in space through innovative 
            settlement design and sustainable technology.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Inspired by Gerard K. O'Neill's visionary concepts of space settlements, 
              we are developing comprehensive designs for sustainable human habitats beyond Earth. 
              Our project focuses on creating self-sufficient communities that can thrive in the 
              challenging environment of space.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Through the NSS Gerard K. O'Neill Space Settlement Contest, we aim to contribute 
              to the global conversation about humanity's future as a spacefaring civilization, 
              combining scientific rigor with creative innovation.
            </p>
          </div>
          
          <div className="glass-effect p-8 rounded-2xl">
            <h4 className="text-2xl font-bold text-white mb-4">Our Goals</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-space-blue text-xl">•</span>
                <span className="text-gray-300">Design innovative space settlement architectures</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-space-blue text-xl">•</span>
                <span className="text-gray-300">Develop sustainable life support systems</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-space-blue text-xl">•</span>
                <span className="text-gray-300">Create efficient resource management solutions</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-space-blue text-xl">•</span>
                <span className="text-gray-300">Promote STEM education and space exploration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-effect p-6 rounded-xl text-center transition-all duration-500 hover:transform hover:scale-105 hover:space-glow ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;