import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import AboutMe from '../AboutMe';
import Social from '../Social';
import Contact from '../Contact';
import Floatbutton from '../Floatbutton';

function Home () {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Cards />
            <Contact />
            <Social />
            <Floatbutton />
        </>
    )
}

export default Home;