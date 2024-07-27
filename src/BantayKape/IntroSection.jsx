import React from 'react';
import '../css_styles/BantayKape.css';
import BantayKapeInfo from './BantayKapeInfo';
import PlayStoreIcon from '../assets/playstore.svg';

import { FaGooglePlay } from 'react-icons/fa';

const BantayKapeIntroSection = () => {
    return (
        <>
            <div className='bantaykape-intro-section-container'>
                <h1 className='bantaykape-intro'>{BantayKapeInfo.title}</h1>
                <p className='bantaykape-intro-title'>{BantayKapeInfo.titleIntroduction}</p>

                <button className='bantaykape-intro-section-button'>
                    <span className='bantaykape-intro-section-button-text'>
                        <img src={PlayStoreIcon} alt='Google play store icon' className='google-play-store-icon'/>
                        Download it from Google Play Store
                    </span>
                </button>
            </div>
        </>
    )
}

export default BantayKapeIntroSection;