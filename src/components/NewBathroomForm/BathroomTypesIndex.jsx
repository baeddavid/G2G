import React from 'react';

const BathroomTypesIndex = ({ form, nextStep, prevStep, setForm }) => {

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
            <h1>New Bathroom</h1>
            <div>Let us know the options available!</div>
            <div
                onClick={ () => setForm({ ...form, purchaseRequired: !form.purchaseRequired })}
                >Purchase Required</div>
            <div
                onClick={ () => setForm({ ...form, accessibleStall: !form.accessibleStall })}
                >Acessible Stall</div>
            <div
                onClick={ () => setForm({ ...form, singleOccupancy: !form.singleOccupancy })}
                >Single Occupancy</div>
            <div
                onClick={ () => setForm({ ...form, changingStations: !form.changingStations })}
                >Baby Changing</div>

            <button onClick={ back }>Back</button>
            <button onClick={ saveAndContinue }>Save and Continue</button>
        </div>
    )
}

export default BathroomTypesIndex;