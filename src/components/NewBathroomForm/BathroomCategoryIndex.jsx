import React from 'react';

export default function BathroomCategoryIndex({ form, nextStep, setForm }) {

    const saveAndContinue = e => {
        e.preventDefault();
        nextStep();
    }

    return(
        <div>
            <h1>New Bathroom</h1>
            <div>Thanks for being a contributing member of the G2G community! By providing this information, you’re helping us keep our database updated and useful.</div>
            {/* Should we say swipe? Or tap arrow button */}
            <div>Select relevant answers. Then swipe</div>
            <div>
                <div>Where is this bathroom?</div>
                <div
                    onClick={ () => setForm({ ...form, category: 'Private Business' })}
                    >Private Business</div>
                <div
                    onClick={ () => setForm({ ...form, category: 'Indoor Public' })}
                    >Indoor Public</div>
                <div
                    onClick={ () => setForm({ ...form, category: 'Outdoor Public'})}
                    >Outdoor Public</div>
                <div>Which bathroom did you use?</div>
                <div
                    onClick={ () => setForm({ ...form, genderNeutral: 'Women\'s' })}
                    >Women's</div>
                <div
                    onClick={ () => setForm({ ...form, genderNeutral: 'Gender Neutral' })}
                    >Gender Neutral</div>
                <div
                    onClick={ () => setForm({ ...form, genderNeutral: 'Men\'s'})}
                    >Men's</div>
                <button onClick={ saveAndContinue }>Save and Continue</button>
            </div>
        </div>
    )
}