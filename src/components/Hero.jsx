import React from 'react';
import githubImage from './github.png';
import linkedinImage from './linkedin.png';
import profilePicture from './profile-picture.png'
import wavePicture from './wave.png'
import './Hero.css';

import './Hero.css';

function Hero() {
    return (
        <>
            <section className='hero'>
                <div className='hero-text'>
                    <h1>Front-End React Developer <img src={wavePicture} alt="" className='wave'/></h1>
                    <p>Hi, my name is Oliver. A passionate Front-end React Developer based in Győr, Hungary.&#128205;</p>
                    <a href="https://hu.linkedin.com/">
                        <img src={linkedinImage} alt="linkedin" className='contact'/>
                    </a>
                    <a href="https://github.com/GerencserOliver">
                        <img src={githubImage} alt="github" className='contact'/>
                    </a>
                </div>
                <div>
                    <img src={profilePicture} alt="myself" className='profile'/>
                </div>
            </section>
        </>
    );
}

export default Hero;
