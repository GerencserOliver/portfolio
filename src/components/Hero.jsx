import React from 'react';
import githubImage from '../images/github.png';
import linkedinImage from '../images/linkedin.png';
import profilePicture from '../images/profile-picture.png'
import wavePicture from '../images/wave.png'
import skillOne from '../images/html-css.png'
import skillTwo from '../images/js-ts.png'
import skillThree from '../images/react.png'
import '../styles/Hero.css';

function Hero() {
    return (
        <>
            <section className='hero'>
                <div className='hero-text'>
                    <h1>Front-End React Developer <img src={wavePicture} alt="" className='wave'/></h1>
                    <p>Hi, my name is Oliver. A passionate Front-end React Developer based in Győr, Hungary.&#128205;</p>
                    <div className='contact'>
                        <a href="https://hu.linkedin.com/">
                            <img src={linkedinImage} alt="linkedin" className='contact-logo'/>
                        </a>
                        <a href="https://github.com/GerencserOliver">
                            <img src={githubImage} alt="github" className='contact-logo'/>
                        </a>
                    </div>
                </div>
                <div>
                    <img src={profilePicture} alt="myself" className='profile'/>
                </div>
                <div className='logos'>
                    <li><img src={skillOne} alt="" className='skills'/></li>
                    <li><img src={skillTwo} alt="" className='skills'/></li>
                    <li><img src={skillThree} alt="" className='skills'/></li>
                </div>
            </section>
        </>
    );
}

export default Hero;
