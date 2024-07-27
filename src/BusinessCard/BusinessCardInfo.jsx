import React from 'react';

import ReactLogo from '../assets/react.svg';

import '../css_styles/BusinessCard.css';

import ProfilePic from '../assets/profile.png';

import ProfilePhoto from '../assets/profile-pic.jpg';
import { FaInstagramSquare, FaGithubSquare, FaFacebook, FaLinkedin, FaEnvelopeSquare, FaTwitterSquare, FaEnvelopeOpenText, FaEnvelope, FaGoogleDrive, FaYahoo, FaGoogle, FaAmilia, FaRegEnvelope} from 'react-icons/fa';

import { FaCameraRetro, FaPlane, FaCode, FaBasketballBall, FaVolleyballBall } from 'react-icons/fa';

const BusinessInfo = {
    name: "Ralph Matthew Aquino",
    email: "akoaymatsu@gmail.com",
    specialization: "Aspiring Machine Learning Engineer",
    websiteURL: "https://www.akoaymatsu.edu.ph/",
    profile_pic: ProfilePhoto,
    about: `Aspiring Machine Learning Engineer passionate about 
            data analysis and AI development. I am also flexible in Web and
            Mobile App Development eager to contribute to a dynamic and challenging work environment`,
    interests: [
        {
            icon: FaCode,
            title: "Software Development",
            description: "I am proficient in Web and Mobile App Development and AI Development.",
            color: '#1DA1F2'
        },
        {
            icon: FaBasketballBall,
            title: "Basketball",
            description: "I enjoy watching and playing basketball.",
            color: '#FF4500'
        },
        {
            icon: FaVolleyballBall,
            title: "Volleyball",
            description: "I enjoy watching and playing volleyball.",
            color: '#FFD700'
        },
        {
            icon: FaCameraRetro,
            title: "Photography",
            description: "I enjoy capturing the beauty of the world.",
            color: '#FF69B4'
        },
        {
            icon: FaPlane,
            title: "Travel",
            description: "I enjoy traveling the world.",
            color: '#4CAF50'
        }
    ],
    social: [
        {
            network: "GitHub",
            url: "https://github.com/johndoe",
            icon: FaGithubSquare,
            color: 'white'
        },
        {
            network: "LinkedIn",
            url: "https://www.linkedin.com/in/john-doe",
            icon: FaLinkedin,
            color: '#0077B5'
        },
        {
            network: "Twitter",
            url: "https://twitter.com/johndoe",
            icon: FaTwitterSquare,
            color: '#1DA1F2'
        },
        {
            network: "Instagram",
            url: "https://instagram.com/johndoe",
            icon: FaInstagramSquare,
            color: '#E4405F'
        },
    ]
}

const BusinessCardInfo = () => {
    return (
        <>
            <div className='business-card-container'>

                <div className='profile-info-section'>
                    <img src={BusinessInfo.profile_pic} alt="Profile Picture" className='profile-photo'/>
                    
                    <h1 className='profile-name'>{BusinessInfo.name}</h1>
                    <h2 className='specialization'>{BusinessInfo.specialization}</h2>
                    <h3 className='profile-web-url'>{BusinessInfo.websiteURL}</h3>

                    <div className='social-link-button-container'>

                        <button className='facebook-button'>
                            <span className='facebook-icon'>
                                <FaFacebook size={35} color='#1877F2' className='fb-icon'/>    
                            </span>Facebook
                        </button>

                        <button className='mail-button'>
                            <span className='mail-icon'>
                                <FaRegEnvelope size={35} color='#D93025' className='email-icon'/>    
                            </span>Email
                        </button>
                        
                    </div>
                </div>

                <About aboutProp={BusinessInfo.about}/>

                <Interests interestProp={BusinessInfo.interests}/>

                <Footer footerProp={BusinessInfo.social}/>

            </div>
            
        </>
        
    );
}

const About = ({ aboutProp }) => {
    return (
        <div className='about-profile-container'>
            <h2 className='about-profile-header'>About Me</h2>
            <p className='about-profile-description'>
                {aboutProp}
            </p>
        </div>
    );
}

const Interests = ({ interestProp }) => {
    const interests = interestProp.map((interest, index) => {
        const IconComponent = interest.icon;
        return (
            <li key={index} className='interest-item'>
                <div className='interest-info-container'>
                    <span>
                        <IconComponent 
                            size={35} 
                            color={interest.color}
                            className={AnimationClass(interest.title)}
                            /> 
                    </span>
                    <h2 className='interest-title'>{interest.title}</h2>
                </div>
                <p className='interest-description'>{interest.description}</p>
            </li>
        );
    })
    return (
        <div className='profile-interest-container'>
            <h2 className='interests-header'>Interests</h2>
            <ul className='interest-list'>
                {interests}
            </ul>
        </div>
    );
}

const Footer = ({ footerProp }) => {
    const footerList = footerProp.map((item, index) => {
        const IconComponent = item.icon;
        return (
            <li key={index} className='footer-item'

            style={{
                'filter':`drop-shadow(0px 0px 2px ${item.color})`
            }}
            
            >
                <span>
                    <IconComponent size={55} color={item.color} className='footer-icons'/> 
                </span>
            </li>
        );
    })
    return (
        <div  className='profile-footer'>
            <footer>
                <ul className='profile-footer-list'>
                    {footerList}
                </ul>
            </footer>
        </div>
        
    )
}

const AnimationClass = (title) => {
    switch (title) {
        case "Software Development":
            return 'fade';
        case "Basketball":
            return 'dribble';
        case "Volleyball":
            return 'spin';
        case "Photography":
            return 'pulse'; // Use the same animation or create a new one
        case "Travel":
            return 'shake'; // Use the same animation or create a new one
        default:
            return '';
    }
}


export default BusinessCardInfo;