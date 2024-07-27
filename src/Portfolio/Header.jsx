import React from 'react';
import '../css_styles/Portfolio.css';

import AboutMe from './AboutMe';

const MapNavItems = ({ type, items, list_class_name }) => {    
    const mapItems = type === 'nav' ? (
        <ul className={list_class_name}>
            {items.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
    ) : (
        <ul className={list_class_name}>
            {    
                items.map((item, index) => (
                    <li key={index} className={`${item.platform.toLowerCase()}`}>
                        {item.icon}
                    </li>
                ))
            }
        </ul>
    );
  
    return mapItems;
};

const PortfolioHeader = () => {
    return (
        <header className='portfolio-header'>
            <nav className='portfolio-nav'>
                <div className='brand-container'>
                    <img src={AboutMe.profile_photos[0]} alt='Portfolio Logo' className='portfolio-logo'/>
                    <h1 className='portfolio-title'>{AboutMe.website}</h1>
                </div>
                
                <div className='portfolio-nav-links-container'>
                    <MapNavItems 
                        type = 'nav'
                        items = { AboutMe.header_items }
                        list_class_name = 'nav-items'
                    />
                </div>

                <div className='portfolio-social-links-container'>
                    <MapNavItems 
                        type = 'social'
                        items = { AboutMe.social_links }
                        list_class_name = 'social-links'
                    />
                </div>
            </nav>
        </header>
    );
}

export default PortfolioHeader;