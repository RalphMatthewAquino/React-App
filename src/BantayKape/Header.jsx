import React from 'react';
import '../css_styles/BantayKape.css';
import BantayKapeInfo from './BantayKapeInfo';
import BantayKapeIntroSection from './IntroSection';

const BantayKapeHeader = () => {
    return (
        <>
            <header className='bantaykape-header'>
                <nav className='bantaykape-nav'>
                    <div className='bantaykape-brand-container'>
                        <img src={BantayKapeInfo.logo} alt='BantayKape Logo' className='bantaykape-img'/>
                    </div>
                    
                    <div className='bantaykape-navigation-container'>
                        <ul className='bantaykape-nav-list'>
                            {BantayKapeInfo.nav_items.map((item, index) => (
                                <li key={index} className='nav-item'>
                                    <button className='bantaykape-navigation-button'>
                                        <span className='bantaykape-navigation-button-text'>
                                            {item.nav_item}
                                        </span>
                                    </button>
                                    
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <BantayKapeIntroSection />
            </header>
        </>
        
    );
}

export default BantayKapeHeader;