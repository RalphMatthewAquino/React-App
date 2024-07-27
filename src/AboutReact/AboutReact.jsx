import React from 'react';

import AboutReactHeader from './AboutReactHeader';

import AboutReactFooter from './AboutReactFooter';

import '../css_styles/AboutReact.css';

const AboutReact = () => {

    const aboutReactFacts = {
        title: "ReactFacts",
        react_facts_navigation: "React Course - Project 1",
        react_title: "Fun facts about React",
        about_react: [
            "Was first released in 2013",
            "Was originally created by Jordan Walke",
            "Has well over 100k stars on GitHub",
            "Is maintained by Facebook",
            "Powers thousand of enterprise apps, including mobile apps"
        ],
        about_react_footer: "2024 CodeWithMat. All rights reserved."
    }

    const reactFacts = aboutReactFacts.about_react.map((item, index) => {
        return (
            <li className='about-react-items' key={index}>{item}</li>
        )
    })
    return (
        <>
            <AboutReactHeader 
                react_title={ aboutReactFacts.title}
                react_proj_nav={ aboutReactFacts.react_facts_navigation }
            />
            <div className='react-facts-body-container'>
                <h1 className='fun-facts-about-react'>{aboutReactFacts.react_title}</h1>
                <ul className='react-facts-list'>
                    {reactFacts}
                </ul>
            </div>
                

            <AboutReactFooter 
                react_footer={ aboutReactFacts.about_react_footer }
            />
        </>
    );
}

export default AboutReact;