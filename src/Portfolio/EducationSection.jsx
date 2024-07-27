import React from "react";

import AboutMe from "./AboutMe";

const EducationSection = () => {
    const EducationComponent = AboutMe.education.map((item, index) => {
        return (
            <div key={index} className="educ-item">
                <img 
                    src={item.school_logo} 
                    alt={item.school} 
                    className={`school-logo ${item.school.toLowerCase()}`} 
                />
                <h1 className="school-name">{item.school}</h1>
                <p className="year-graduated">{item.year_graduated}</p>
            </div>
        );
    })

    return (
        <>  
            <h1 className='education-section-title'>Education</h1>
            <div className='education-section-container'>
                {EducationComponent}
            </div>
        </>
        
    );
}

export default EducationSection;