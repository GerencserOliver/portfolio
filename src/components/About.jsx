import React, { useState } from "react";
import UIUX from "../images/ui_ux.png";
import '../styles/About.scss';

function About() {

    return (
        <>
            <section className='about'>
                <div className='about-img'>
                    <img src={UIUX} alt="" />
                </div>
                <div className="about-text">
                    <h1>About me</h1>
                    <h2>Front-end Developer based in Győr, Hungary 📍</h2>
                    <p>Hello there, I'm Oliver, a Frontend Developer specializing in user-centric design. I'm deeply passionate about crafting intuitive UI/UX experiences that resonate with users. <br/><br/> In my toolkit, React is my go-to framework, enabling me to build dynamic and responsive web applications. Combined with Tailwind CSS and TypeScript, I'm equipped to create polished and efficient solutions for various projects.</p>
                </div>
            </section>
        </>
    );
}

export default About;