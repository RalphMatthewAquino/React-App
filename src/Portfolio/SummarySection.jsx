import React from 'react';

import '../css_styles/Portfolio.css';
import AboutMe from './AboutMe';

import { BiArrowBack } from 'react-icons/bi';

const ProfileSummary = () => {
    return (
        <>
            <div className='profile-section-container'>
                <div className='profile-section-content'>
                    <p className='profile-intro'>Hi, I am</p>
                    <h1>{AboutMe.profile_name}</h1>
                    <p className='profile-description'>{AboutMe.profile_summary}</p>
                    
                    <button className='profile-projects-button'>
                        <span className='profile-button-icons'>
                            <BiArrowBack size={20} color='#f0000' className='project-arrow-icon'/>
                            See Projects
                        </span>
                    </button>
                </div>

                <img src={AboutMe.profile_photos[1]} alt='Profile Photo' className='profile-section-photo'/>
            </div>

        </>
    )
}

export default ProfileSummary;