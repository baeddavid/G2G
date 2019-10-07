import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ShowBathroomPage = (props) => {
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

  const Bathroom_ID_Object = {bathroomId: props.match.params.id};
  return(
      <Query query={ GET_BATHROOM }
      variables={ Bathroom_ID_Object }>
        
        {({ loading, error, data}) => {
          if(loading) return <div>Fetching</div>
          if(error) return <div>Error</div>
          
          const Bathroom = data;
          return(
            <div>
              <div>Business Name: { Bathroom.getBathroom.businessName }</div>
              <div>Decsription: { Bathroom.getBathroom.description }</div>
              <div>Address: { Bathroom.getBathroom.address }</div>
              <div>Gender Neutral: { Bathroom.getBathroom.genderNeutral  }</div>
              <div>Category: { Bathroom.getBathroom.category }</div>
              <div>Changing Stations: { Bathroom.getBathroom.changingStations ? 'true' : 'false' }</div>
              <div>Purchase Required: { Bathroom.getBathroom.purchaseRequired ? 'true' : 'false' }</div>
              <div>Accessible Stall: { Bathroom.getBathroom.accessibleStall ? 'true' : 'false' }</div>
              <div>Single Occupany: { Bathroom.getBathroom.singleOccupancy ? 'true' : 'false' }</div>
            </div>
          )
        }}
      </Query>
  )
}

export default ShowBathroomPage;