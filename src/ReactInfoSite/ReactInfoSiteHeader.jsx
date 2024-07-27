import React from 'react';

import ReactLogo from '../assets/react.svg';

import '../css_styles/ReactInfoSite.css'

const ReactInfoSiteHeader = ({headerItems}) => {

    const navItems = headerItems.map((item, index) => {
        return (
            <li className='react-header-items' key={index}>{item}</li>
        )
    })
    return (
        <>
            <nav className='react-info-site-nav'>
                <div className='react-nav-header-container'>
                    <img src={ReactLogo} 
                         className="react-info-site-header-logo"
                         alt='React Info Site Header Logo'
                         />
                    <a href='https://react.dev/'>
                        <h1 className='react-header-name'>React</h1>
                    </a>
                </div>

                <div className='react-list-container'>
                    <ul>
                        {navItems}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default ReactInfoSiteHeader;