import React, { useState } from 'react';
import BathroomCategoryIndex from './BathroomCategoryIndex';
import BathroomTypesIndex from './BathroomTypesIndex';
import BathroomDescriptionIndex from './BathroomDescriptionIndex';
import BathroomConfirmationIndex from './BathroomConfirmationIndex';
import BathroomSuccessIndex from './BathroomSucessIndex';

export default function IndexForm(props) {

    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        category: '',
        genderNeutral: '',
        businessName: '',
        directions: '',
        description: '',
        address: '',
        newBathroomId: null,
        lat: props.location.lat,
        lng: props.location.lng,
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
                    />
        case 4:
            return <BathroomConfirmationIndex
                        nextStep={ nextStep }
                        prevStep={ prevStep }
                        form={ form }
                        setForm={ setForm }
                    />
        case 5:
            return <BathroomSuccessIndex
                        newBathroomId={ form.newBathroomId }
            />
    }    
}