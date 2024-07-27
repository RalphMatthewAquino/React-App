import React from 'react';

import '../css_styles/AboutReact.css';

import ReactLogo from '../assets/react.svg';

import { FaReact } from 'react-icons/fa';

const AboutReactHeader = ({ react_title, react_proj_nav }) => {
    
    const reactTitle = react_title;
    const reactProjNav = react_proj_nav;
    
    return (
        <>
            <nav className='about-react-nav'>
                <div className='about-react-header'>
                    <img src={ReactLogo} alt="React Logo" className='about-react-logo'/>
                    <h1 className='about-react-title'>{reactTitle}</h1>
                </div>

                <div className='about-react-nav-items'>
                    <h1 className='react-proj-nav-item'>{reactProjNav}</h1>
                </div>
            </nav>
        </>
        
    );
}

export default AboutReactHeader;