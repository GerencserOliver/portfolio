import React from 'react';
import profilePicture from '../images/profile-picture.png'
import wavePicture from '../images/wave.png'
import skillOne from '../images/html-css.png'
import skillTwo from '../images/js-ts.png'
import skillThree from '../images/react.png'
import skillFour from '../images/tail-sass.png'
import Decoration1 from '../images/png1.png'
import '../styles/Hero.scss';

function Hero() {
    return (
        <>
            <div className='wrapper'>
                <section className='hero' id='hero'>
                    <div className='hero-text'>
                        <h1>Front-End React Developer <img src={wavePicture} alt="" className='wave'/></h1>
                        <p>Hi, my name is Oliver. A passionate Front-end React Developer based in Győr, Hungary.&#128205;</p>
                        <div className='hero-svg'>
                            <a href="https://github.com/GerencserOliver">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                            </a>
                        </div>
                        <img src={Decoration1} alt="" className='decor1'/>
                    </div>
                    <div>
                        <img src={profilePicture} alt="myself" className='profile'/>
                    </div>
                    <div className='logos'>
                        <li><img src={skillOne} alt="" className='skills'/></li>
                        <li><img src={skillTwo} alt="" className='skills'/></li>
                        <li><img src={skillThree} alt="" className='skills'/></li>
                        <li><img src={skillFour} alt="" className='skills'/></li>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Hero;
