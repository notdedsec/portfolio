import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
//import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
//import Work from './Work/Work';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

//import { heroData, aboutData, skillsData, projectsData, workData, contactData, footerData } from '../mock/data';
import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
//  const [skills, setSkills] = useState({});
  const [projects, setProjects] = useState([]);
//  const [work, setWork] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
//    setSkills({ ...skillsData });
    setProjects([...projectsData]);
//    setWork([...workData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);
  /*
  return (
    <PortfolioProvider value={{ hero, about, skills, projects, work, contact, footer }}>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
  */
  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
