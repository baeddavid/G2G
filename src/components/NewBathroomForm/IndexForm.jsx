import React, { useState } from 'react';
import BathroomCategoryIndex from './BathroomCategoryIndex';
import BathroomTypesIndex from './BathroomTypesIndex';
import BathroomDescriptionIndex from './BathroomDescriptionIndex';
import BathroomSuccessIndex from './BathroomSucessIndex';

export default function IndexForm({ setNewBathroomId, newBathroomId, location }) {

    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        category: '',
        genderNeutral: '',
        businessName: '',
        directions: '',
        description: '',
        address: '',
        lat: location.lat,
        lng: location.lng,
        purchaseRequired: false,
        accessibleStall: false,
        singleOccupancy: false,
        changingStations: false,
    });

    const nextStep = () => setStep(step + 1);

    const prevStep = () => setStep(step - 1);

    const handleChange = event => setForm({ ...form, [event.target.name]: event.target.value });

    switch(step) {
        case 1:
            return <BathroomCategoryIndex
                        nextStep={ nextStep }
                        handleChange={ handleChange }
                        form={ form }
                        setForm={ setForm }
                    />
        case 2:
            return <BathroomTypesIndex
                        nextStep={ nextStep }
                        prevStep={ prevStep }
                        handleChange={ handleChange }
                        form={ form }
                        setForm={ setForm }
                    />
        case 3:
            return <BathroomDescriptionIndex
                        nextStep={ nextStep }
                        prevStep={ prevStep }
                        handleChange={ handleChange }
                        form={ form }
                        setNewBathroomId={ setNewBathroomId }
                    />
        case 4:
            return <BathroomSuccessIndex newBathroomId={ newBathroomId } />

        default: return null;
    }    
}