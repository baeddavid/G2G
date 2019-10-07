import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const BathroomConfirmationIndex = ({ 
    form
 }) => {
    const { 
        nextStep, 
        prevStep,
        category,
        genderNeutral,
        description,
        address,
        businessName,
        purchaseRequired,
        accessibleStall,
        singleOccupancy,
        changingStations,
        lat,
        lng
    } = form;

    const POST_MUTATION = gql`
        mutation PostMutation(
            $businessName: String,
            $description: String!,
            $address: String!,
            $genderNeutral: String!,
            $category: String!,
            $lat: Float!,
            $lng: Float!,
            $changingStations: Boolean!,
            $purchaseRequired: Boolean!,
            $accessibleStall: Boolean!,
            $singleOccupancy: Boolean!
        ) {
            postBathroom(
                businessName: $businessName,
                description: $description,
                address: $address,
                genderNeutral: $genderNeutral,
                category: $category,
                lat: $lat,
                lng: $lng,
                changingStations: $changingStations,
                purchaseRequired: $purchaseRequired,
                accessibleStall: $accessibleStall,
                singleOccupancy: $singleOccupancy
            ) {
                id
                businessName
                description
                address
                lat
                lng
            }
        }
    `

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
            <h1>Confirm New Bathroom Details</h1>
            <p>Click Confirm if the following details have been correctly entered</p>
            <div>
                Bathroom Type: { category }<br />
                Bathroom Gender: { genderNeutral }<br />
                Purchase Required: { purchaseRequired ? 'true' : 'false' }<br />
                Accessible Stall: { accessibleStall ? 'true' : 'false' }<br />
                Single Occupancy: { singleOccupancy ? 'true' : 'false' }<br />
                Changing Stations: { changingStations ? 'true' : 'false' }<br />
                Business Name: { businessName }<br />
                Business Address: { address }<br />
                Business Description: { description }<br />
            </div>
            <button onClick={ back }>Back</button>
            <Mutation mutation={ POST_MUTATION } variables={{
                businessName,
                description,
                address,
                genderNeutral,
                category,
                lat,
                lng,
                changingStations,
                purchaseRequired,
                accessibleStall,
                singleOccupancy
            }}>
                { postMutation => <button onClick={postMutation}>Confirm</button> }
            </Mutation>
        </div>
    )
}

export default BathroomConfirmationIndex;