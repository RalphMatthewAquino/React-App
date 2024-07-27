import React from 'react';

import '../css_styles/ReactStudy.css';

import ReactLogo from '../assets/react.svg';

const ReactStudyHeader = () => {
    const navItems = [
        "Home",
        "Documentation",
        "FAQs",
        "Logout"
    ]
    return (
       <>
            <nav className='nav'>
                    <div className='nav-header'>  
                        <img src={ReactLogo} alt="React Logo" />
                        <h2 className='react-study-title'>
                            <a href='https://react.dev/'>React Study</a>
                        </h2>
                    </div>

                    <div className='nav-links-container'>
                        <ul className='nav-links'>
                            {navItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                        
                    </div>
            </nav>
       </>
    )
}

export default ReactStudyHeader;