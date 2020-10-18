import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import AboutMe from '../AboutMe';
import Social from '../Social';

function Home () {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <Cards />
            <Social />
        </>
    )
}

export default Home;