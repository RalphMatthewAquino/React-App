import React from "react";

import AboutMe from "./AboutMe";

const TechStackSection = () => {
    const TechStackMap = AboutMe.tech_stack.map((item, index) => {
        return (
            <div key={index} className="tech-stack-item">
                <img 
                    src={item.tech_logo} 
                    alt={item.tech} 
                    className={`tech-logo ${item.tech.toLowerCase()}`} 
                />
                <h1 className="tech-name">{item.tech}</h1>
                <p className="tech-desc">{item.description}</p>
            </div>
        );
    })

    return (
        <>  
            <h1 className='tech-stack-section-title'>Tech Stack</h1>
            <div className='tech-stack-section-container'>
                {TechStackMap}
            </div>
        </>
        
    );
}

export default TechStackSection;