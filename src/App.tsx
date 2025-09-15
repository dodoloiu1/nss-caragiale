import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import BackgroundStars from './components/BackgroundStars';

const App: React.FC = () => {
  return (
    <div className="text-gray-200 font-lato min-h-screen">
      <BackgroundStars />
      <Navbar />
      <header>
        <Hero />
      </header>
      <main className="max-w-4xl mx-auto px-5">
        <About />
        <Team />
        <Projects />
        <Awards />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;