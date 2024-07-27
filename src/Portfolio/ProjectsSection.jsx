import React from "react";

import '../css_styles/Portfolio.css';

import AboutMe from "./AboutMe";

const ProjectsSection = () => {
    const ProjectsComponent = AboutMe.projects.map((item, index) => {
        return (
            <div key={index} className="project-item">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`project-logo ${item.title.toLowerCase().replace(/\s+/g, '-')}`} 
                />
                <h1 className="project-name">{item.title} (<i>{item.year}</i>)</h1>
                <p className="project-desc">{item.description}</p>
            </div>
        );
    })

    return (
        <>  
            <h1 className='project-section-title'>Major Projects</h1>
            <div className='projects-section-container'>
                {ProjectsComponent}
            </div>
        </>
        
    );
}

export default ProjectsSection;