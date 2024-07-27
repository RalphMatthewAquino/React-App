import React from 'react';

import '../css_styles/ReactInfoSite.css'

const ReactInfoList = ({reactInfoList}) => {
    const reactInfo = reactInfoList.map((info, index) => {
        return <li key={index} className='react-info-list-items'>{info}</li>
    })
    return (
        <>
            <ul>
                {reactInfo}
            </ul> 
        </>
    )
}

export default ReactInfoList;