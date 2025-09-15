import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="text-gradient">NSS Gerard K. O'Neill</span>
          <br />
          <span className="text-white">Space Settlement Contest</span>
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-space-silver font-light mb-8 leading-relaxed">
          Colegiul Național "Ion Luca Caragiale"
          <br />
          <span className="text-lg sm:text-xl text-gray-400">București, România</span>
        </h2>
        
        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Pioneering the future of space colonization through innovative design, 
          sustainable technology, and visionary thinking. Join us on our journey 
          to make humanity a multi-planetary species.
        </p>
        
        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-space-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 space-glow"
          >
            Discover Our Mission
          </button>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-space-blue text-space-blue hover:bg-space-blue hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View Our Projects
          </button>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-space-blue rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-space-silver rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default Hero;