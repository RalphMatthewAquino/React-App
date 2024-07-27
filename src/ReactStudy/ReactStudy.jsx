import React from 'react';

import '../css_styles/ReactStudy.css';

import ReactStudyHeader from './ReactStudyHeader.jsx';

import ReactStudyFooter from './ReactStudyFooter.jsx';

import ViteLogo from '../assets/vite.svg';

import NewReactLogo from '../assets/logo-react.svg';


const AnotherReactComponent = ({prop}) => {
    return (
        <div>
            <h1>{prop}</h1>
        </div>
    )
}

const reasonsToStudyReact = {
    react_title: 'React JS',
    title_description: "Reasons I'm excited to learn ReactJS:",
    reasons: [
        "Out of curiousity",
        "It will the ease the way I develop web applications",
        "Skill that will make be hireable in the future",
        "I'm planning to integrate my machine learning models to my web applications using React"
    ]
}

const ReactStudyPage = () => {
    return(
        <>
            <ReactStudyHeader />

                {/*<AnotherReactComponent prop={reasonsToStudyReact.react_title}/>*/}

                <div className='react-study-logo-container'>
                    <a href='https://react.dev/'>
                        <img src={NewReactLogo} alt='React Logo' className='react-study-logo' />
                    </a>

                    <a href='https://vitejs.dev/'>
                        <img src={ViteLogo} alt='Vite Logo' className='vite-study-logo' />
                    </a>

                </div>


                <div className='reason-list-container'>
                    <h1 className='react-study-page-title'>{reasonsToStudyReact.react_title}</h1>
                    <h3>{reasonsToStudyReact.title_description}</h3>
                    <ol>
                        {reasonsToStudyReact.reasons.map((reason, index) => (
                            <li key={index} className='reason-list'>{reason}</li>
                        ))}
                    </ol>
                </div>
            
            <ReactStudyFooter />
        </>
    )
}

export default ReactStudyPage;