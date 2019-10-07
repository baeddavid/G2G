import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ShowBathroomPage = (props) => {
  console.log(props)
  const GET_BATHROOM = gql`
  query getBathroom($bathroomId: ID!) {
    getBathroom(bathroomId: $bathroomId) {
      businessName
      description
      address
      genderNeutral
      category
      changingStations
      purchaseRequired
      accessibleStall
      singleOccupancy
    }
  }
  `
  return(
      <Query query={ GET_BATHROOM }
      variables={ props.newBathroomId }>
        
        {({ loading, error, data}) => {
          if(loading) return <div>Fetching</div>
          if(error) return <div>Error</div>
          
          const Bathroom = data;

          return(
            <div>
              <div>Business Name: { Bathroom.businessName }</div>
              <div>Decsription: { Bathroom.description }</div>
              <div>Address: { Bathroom.address }</div>
              <div>Gender Neutral: { Bathroom.genderNeutral }</div>
              <div>Category: { Bathroom.category }</div>
              <div>Changing Stations: { Bathroom.changingStations }</div>
              <div>Purchase Required: { Bathroom.purchaseRequired }</div>
              <div>Accessible Stall: { Bathroom.accessibleStall }</div>
              <div>Single Occupany: { Bathroom.singleOccupancy }</div>
            </div>
          )
        }}
      </Query>
  )
}

export default ShowBathroomPage;