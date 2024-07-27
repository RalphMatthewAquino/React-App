import React from 'react';
import BantayKapeLogo from '../assets/bantaykape-logo.png';
import { FaPhone, FaUserFriends, FaDownload, FaQuestionCircle } from 'react-icons/fa';


const BantayKapeInfo = {
    title: 'BantayKape',
    logo: BantayKapeLogo,
    titleIntroduction: 'Leading Android mobile application for safeguarding coffee crops',
    nav_items: [
        {
            nav_item: 'About Us',
            logo: <FaUserFriends size={20}/>
        },
        {
            nav_item: 'Help',
            logo: <FaQuestionCircle size={20}/>
        },
        {
            nav_item: 'Contact Us',
            logo: <FaPhone size={20}/>
        }
        
    ],

    description: 'BantayKape is an innovative Android mobile application designed to detect and identify pests and diseases in coffee crops with integrated management solutions.'
}

export default BantayKapeInfo;