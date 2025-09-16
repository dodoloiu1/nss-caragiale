import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import MembersPage from './components/MembersPage';
import { TeamsProvider } from './components/TeamsContext';
import AdminPanel from './components/AdminPanel';

const App: React.FC = () => {
  const [adminOpen, setAdminOpen] = useState(false);
  return (
    <TeamsProvider>
      <div className="text-gray-200 font-lato min-h-screen">
        <BackgroundStars />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route path="/teams/:teamId" element={<MembersPage />} />
        </Routes>
        <Footer onSecretTripleClick={() => setAdminOpen(true)} />
        <ScrollToTopButton />
        <AdminPanel open={adminOpen} onClose={() => setAdminOpen(false)} />
      </div>
    </TeamsProvider>
  );
};

export default App;