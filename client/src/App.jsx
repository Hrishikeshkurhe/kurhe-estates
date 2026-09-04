import React from 'react';
import Nav from './components/Nav.jsx';
import ProgressMark from './components/ProgressMark.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Marquee from './sections/Marquee.jsx';
import AboutInfinia from './sections/AboutInfinia.jsx';
import Residences from './sections/Residences.jsx';
import Specifications from './sections/Specifications.jsx';
import Amenities from './sections/Amenities.jsx';
import Location from './sections/Location.jsx';
import Credits from './sections/Credits.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <>
      <ProgressMark />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <AboutInfinia />
        <Residences />
        <Specifications />
        <Amenities />
        <Location />
        <Credits />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
