import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const projectLinks = [
    { name: 'Nova Station Alpha', href: '#projects' },
    { name: 'Lunar Gateway Hub', href: '#projects' },
    { name: 'Mars Colony Initiative', href: '#projects' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-space-dark border-t border-white border-opacity-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 space-glow px-3 py-1 rounded">
                NSS Space Settlement
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Pioneering the future of space colonization through innovative design, 
                sustainable technology, and visionary thinking.
              </p>
            </div>
            
            {/* School Info */}
            <div className="glass-effect p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">Colegiul Național</h4>
              <p className="text-gray-300 text-sm">"Ion Luca Caragiale"</p>
              <p className="text-gray-400 text-sm">București, România</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href.substring(1))}
                    className="text-gray-300 hover:text-space-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Projects</h4>
            <ul className="space-y-2">
              {projectLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, 'projects')}
                    className="text-gray-300 hover:text-space-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm mb-2">Email</p>
                <a 
                  href="mailto:nss.team@cnilc.ro"
                  className="text-space-blue hover:text-blue-400 transition-colors duration-300"
                >
                  nss.team@cnilc.ro
                </a>
              </div>
              
              <div>
                <p className="text-gray-300 text-sm mb-3">Follow Us</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="text-2xl hover:scale-110 transition-transform duration-300"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contest Information */}
        <div className="glass-effect p-6 rounded-xl mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h5 className="text-lg font-semibold text-white mb-2">NSS Contest</h5>
              <p className="text-gray-300 text-sm">Gerard K. O'Neill Space Settlement Contest</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white mb-2">Submission</h5>
              <p className="text-gray-300 text-sm">March 2025</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white mb-2">Category</h5>
              <p className="text-gray-300 text-sm">High School Division</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} CNILC NSS Team. All Rights Reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">Built with ❤️ for space exploration</span>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">Powered by</span>
                <span className="text-space-blue font-semibold">React + TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;