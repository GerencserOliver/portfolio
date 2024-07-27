import React from "react";
import GymProject from "../images/gym-project.jpg";
import '../styles/Projects.scss';

function Projects(){
    return (
        <div className="wrapper" id="projects">
            <div className="projects">
                <h1>Portfolio</h1>
                <div className="project">
                    <a href="https://gym-website-gamma-five.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src={GymProject} alt="Project 1" className="projectImg"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
