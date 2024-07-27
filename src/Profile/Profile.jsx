import React from 'react';

import FamilyListComponent from './FamilyProfile.jsx';

import ReactLogo from '../assets/react.svg';

import '../css_styles/Profile.css'


    const info = {
        name: 'AkoAyMatsu',
        age: 23,
        work_status: 'Currently unemployed',
        parents: [
            'Rufino F. Aquino',
            'Jennifer R. Aquino',
        ],
        hobbies: [
            'Coding',
            'Playing online games',
            'Watching'
        ],
        siblings:[
            'Rajeanne Princess Alphega R. Aquino',
            'Rohanne Faith R. Aquino'
        ]
    }

    const hobbiesList = info.hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
    ))

    const Profile = () => {
        return (

            <>
                <header className='component-header'>

                    <div className='image-container'>
                        <img src={ReactLogo} alt='React Logo' className='react-logo' />
                    </div>
                    <h1 className='h1-header'>Welcome, {info.name}!</h1>
     
                    <h3 className='age'>Age: {info.age}</h3>
                    <h3 className='work-status'>Work Status: {info.work_status}</h3>
    
                    <FamilyListComponent parentProp={info.parents} siblingProp={info.siblings} />

                    <h3 className='hobbies'>Hobbies:</h3>
                    <ul className='hobbies-list'>
                        {hobbiesList}
                    </ul>
                </header>
            
            </>
            
        );
    }

export default Profile;