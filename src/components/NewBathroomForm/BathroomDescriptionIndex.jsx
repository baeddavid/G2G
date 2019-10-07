import React from 'react';

const BathroomDescriptionIndex = ({ nextStep, prevStep, handleChange, form }) => {

    const saveAndContinue = e => {
        e.preventDefault();
        nextStep();
    }

    const back = e => {
        e.preventDefault();
        prevStep();
    }

    return(
        <div>
            <input
                name='businessName'
                placeholder='Business Name'
                onChange={ handleChange }
                defaultValue={ form.businessName }
            />

            <input
                name='description'
                placeholder='Business Description'
                onChange={ handleChange }
                defaultValue={ form.description }
            />

            <input
                name='address'
                placeholder='Address'
                onChange={ handleChange }
                defaultValue={ form.address }
            />

            <button onClick={ back }>Back</button>
            <button onClick={ saveAndContinue }>Save and Continue</button>
        </div>
    )
}

export default BathroomDescriptionIndex;