import React from "react";
import GymProject from "../images/gym-project.jpg";
import '../styles/Projects.scss';

function Projects(){
    return (
        <div className="wrapper" id="projects">
            <div className="projects">
                <h1>Portfolio</h1>
                <div className="project">
                    <img src={GymProject} alt="Project 1" className="projectImg"/>
                </div>
            </div>
        </div>
    );
}

export default Projects;