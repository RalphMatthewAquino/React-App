import React from 'react';
import '../css_styles/BantayKape.css';
import BantayKapeHeader from './Header';

import BantayKapeIntroSection from './IntroSection';

import DescriptionSection from './DescriptionSection';

const BantayKapeMain = () => {
    return (
        <>
            <div>
                <BantayKapeHeader />

                <DescriptionSection />
            </div>
        </>
    )   
}

export default BantayKapeMain;