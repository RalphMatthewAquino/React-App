import React from 'react';

import '../css_styles/AboutReact.css';


const AboutReactFooter = ({react_footer}) => {
    const reactFooter = react_footer;

    return (
        <footer className='about-react-footer'>
            <small className='react-footer-title'>&copy; {reactFooter}</small>
        </footer>
    );
}

export default AboutReactFooter;