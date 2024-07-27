import React from 'react';

import { FaGlobe, FaBars, FaUserCircle, FaStar, FaSearch } from 'react-icons/fa';

import AirBnBLogo from '../assets/airbnb-images/airbnb.svg'; //

import AirBnbDispImages from '../assets/airbnb-images/airbnb-disp-images.png'; //

import '../css_styles/AirBnB.css';

import SamplePicture from '../assets/airbnb-images/airbnb-img-10.png';

import ProfileInfo from './ProfileData';

const AirBnBMain = () => {
    return (
        <>
            <div>
                <HeaderComponent />

                <section>
                    <div className='airbnb-disp-image-container'>
                        <img 
                            src={AirBnbDispImages} 
                            alt='Airbnb Display Images' 
                            className='airbnb-disp-image'
                        />

                        <div className='airbnb-description-container'>
                            <h1 className='airbnb-desc-title'>Online Experiences</h1>
                            <p className='airbnb-description'>Join unique and interactive activities led by one-of-a-kind hosts-all leaving home.</p>
                        </div>
                        
                    </div>
                </section>

                <ProfilesSection /> 
            </div>
        </>
    )
}

const HeaderComponent = () => {
    return (
        <header className='airbnb-header'>
            <nav  className='airbnb-navbar'>
                <img src={AirBnBLogo} alt='Airbnb Logo' className='airbnb-logo' />
                <div className='airbnb-button-container'>
                    <button className='airbnb-stays-button'>
                        Stays
                    </button>

                    <button className='airbnb-experiences-button'>
                        Experiences
                    </button>
                </div>
                <div className='airbnb-utility-container'>
                    <button className='airbnb-your-home-button'>
                        Airbnb your home
                    </button>

                    <button className='airbnb-world-icon-button'>
                        <span className='world-icon-container'>
                            <FaGlobe size={20}/>
                        </span>
                    </button>

                    <button className='airbnb-user-icon-button'>
                        <span className='user-icon-container'>
                            <FaBars size={20} />
                            <FaUserCircle size={40} color='grey'/>
                        </span>
                    </button>
                </div>
            </nav>


            <SearchBar />

        </header>
    )
}

const SearchBar = () => {
    return (
      <div className="search-bar">
            <div className="search-item">
                <label>Where</label>
                <input type="text" placeholder="Search destinations" className='inputs' disabled/>
            </div>
            <div className="divider"></div>
            <div className="search-item">
                <label>Check in</label>
                <input type="text" placeholder="Add dates" className='inputs' disabled/>
            </div>
            <div className="divider"></div>
            <div className="search-item">
                <label>Check out</label>
                <input type="text" placeholder="Add dates" className='inputs' disabled/>
            </div>
            <div className="divider"></div>
            <div className="search-item">
                <div>
                    <label>Who</label>
                    <input type="text" placeholder="Add guests" className='inputs' disabled/>
                </div>
                
                <button className="search-button">
                    <FaSearch size={20}/>
                </button>
            </div>
            
      </div>
    );
  };

const ProfilesSection = () => {
    const Profile = ProfileInfo.map((profile, index) => {
        return (
            <div className='profile-card' key={index}>
                <img src={profile.photo} alt='Hero Image' className='hero-image'/>
    
                <div className='profile-stat-container'>
                    <span className='star-rating-icon'>
                        <FaStar size={25} color='red' />
                    </span>
                    <h3 className='profile-rating'>{profile.rating}</h3>
                    <h3 className='profile-slot-availability'>({profile.slots}) &nbsp;
                        <span className='country'>
                            {profile.country}
                        </span>
                    </h3>
                </div>
    
                <p className='program-description'>{profile.description}</p>
                <p className='program-price-desc'>
                    <strong>
                        From
                        <span className='program-price'>
                            &nbsp; {profile.price} &nbsp;
                        </span>
                    </strong>
                    / person
                </p>
            </div>
        ) 
    })

    return (
        <div className='profile-grid'>
            {Profile}
        </div>
    );
};

export default AirBnBMain;

