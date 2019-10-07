import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const BathroomConfirmationIndex = ({ 
    form, 
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
 }) => {

    const POST_MUTATION = gql`
        mutation PostMutation(
            $category: String!,
            $genderNeutral: String!,
            $description: String!,
            $address: String!,
            $businessName: String,
            $purhcaseRequired: Boolean!,
            $accessibleStall: Boolean!,
            $singleOccupancy: Boolean!,
            $changingStations: Boolean!,
            $lat: Float!,
            $lng: Float!
        ) {
            post(
                category: $category,
                genderNeutral: $genderNeutral,
                description: $description,
                address: $address,
                businessName: $businessName,
                purchaseRequired: $purhcaseRequired,
                accessibleStall: $accessibleStall,
                singleOccupancy: $singleOccupancy,
                changingStations: $changingStations,
                lat: $lat,
                lng: $lng
            ) {
                id
                createdAt
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
                Bathroom Type: { form.category }<br />
                Bathroom Gender: { form.genderNeutral }<br />
                Purchase Required: { form.purchaseRequired ? 'true' : 'false' }<br />
                Accessible Stall: { form.accessibleStall ? 'true' : 'false' }<br />
                Single Occupancy: { form.singleOccupancy ? 'true' : 'false' }<br />
                Changing Stations: { form.changingStations ? 'true' : 'false' }<br />
                Business Name: { form.businessName }<br />
                Business Address: { form.address }<br />
                Business Description: { form.description }<br />
            </div>
            <button onClick={ back }>Back</button>
            <Mutation mutation={ POST_MUTATION } variables={{
                category,
                genderNeutral,
                purchaseRequired,
                accessibleStall,
                singleOccupancy,
                changingStations,
                businessName,
                address,
                description,
                lat,
                lng
            }}>{ postMutation => <button onClick={postMutation}>Confirm</button> }</Mutation>
        </div>
    )
}

export default BathroomConfirmationIndex;