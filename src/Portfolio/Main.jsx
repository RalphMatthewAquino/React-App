import React from 'react';

import '../css_styles/Portfolio.css';

import PortfolioHeader from './Header';

import ProfileSummary from './SummarySection';
import TechStackSection from './TechStackSection';
import ProjectsSection from './ProjectsSection';
import EducationSection from './EducationSection';
import PortfolioFooter from './Footer';

const Portfolio = () => {
    return (
        <>
            <div className='main-section'>
                <PortfolioHeader />
                <section>
                    <ProfileSummary />
                </section>
            </div>

            <div className='divider'>
                
            </div>

            <div className='section-container'>
                <section>
                    <EducationSection />
                </section>

                <div className='divider'>
                    
                </div>

                <section>
                    <TechStackSection  />
                </section>

                <div className='divider'></div>

                <section>
                    <ProjectsSection />
                </section>
            </div>
            

            <PortfolioFooter />
        </>
    );
}

export default Portfolio;