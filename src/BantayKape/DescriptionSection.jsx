import React from 'react';
import '../css_styles/BantayKape.css';
import BantayKapeInfo from './BantayKapeInfo';




const DescriptionSection = () => {

    return (
        <>
            <div className='description-section-container'>
                <div className='bantaykape-description'>
                    <h1 className='about-bantaykape-title'>What is BantayKape?</h1>
                    <p className='about-bantaykape-text'>
                        {BantayKapeInfo.description}
                    </p>
                </div>

                <div className='bantaykape-images'>
                    <img src={BantayKapeInfo.logo[1]} alt='BantayLape Description Logo' className='bantaykape-description-logo'/>
                </div>
            </div>
        </>
    )
}

export default DescriptionSection;