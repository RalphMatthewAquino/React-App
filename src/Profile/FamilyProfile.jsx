import React from 'react';

    const FamilyListComponent = ({parentProp, siblingProp}) => {
        
        const parentList = parentProp.map
        ((parent, index) => (
            <li key={index}>{parent}</li>
        ))

        const siblingsList = siblingProp.map
        ((sibling, index) => (
            <li key={index}>{sibling}</li>
        ))

        return (
            <>
                <h3 className='parents'>Parents:</h3>
                <ul className='parents-list'>
                    {parentList}
                </ul>

                <h3 className='siblings'>Siblings:</h3>
                <ul className='siblings-list'>
                    {siblingsList}
                </ul>
            </>
        )
    }
    
export default FamilyListComponent;