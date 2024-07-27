import React from 'react';

import ReactLogo from '../assets/react.svg';

import '../css_styles/ReactInfoSite.css'

import ReactInfoList from './ReactInfoSiteList.jsx';

import ReactInfoSiteHeader from './ReactInfoSiteHeader.jsx';

const ReactInfoSite  = () => {

    const reactInfo = {
        title: 'React JS',
        info: 'React is a JavaScript library for building user interfaces.',

        characteristics: [
            'Was first released in 2013',
            'Was originally created by Jordan Walke',
            'Has well over 100K stars on Github',
            'Is maintained by Facebook',
            'Powers thousands of enterprise apps, including mobile apps'
        ],
        header_items: [
            "Home",
            "FAQs",
            "Logout"
        ]
    }

    return(
        <>  
            <ReactInfoSiteHeader headerItems={reactInfo.header_items}/>
                <div className='react-logo-container'>
                    <img src={ReactLogo} alt='React Logo' className='react-profile-logo' />
                </div>

                <div className='react-body-container'>
                    <h1 className='react-info-title'>{reactInfo.title}</h1>
                    <h2 className='react-info'>{reactInfo.info}</h2>


                    <h3>Here are some fun facts about React:</h3>

                    <ReactInfoList reactInfoList={reactInfo.characteristics} />
                </div>
        </>
    ) 


}

export default ReactInfoSite;