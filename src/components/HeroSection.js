import React from 'react';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {

    return (
        <div className="hero-container">
            <video src="/videos/video-4.mp4" autoPlay loop muted />
            <h1>Stef Verlinde</h1>
            <p>Full-stack developer</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    ABOUT ME
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    PROJECTS
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
