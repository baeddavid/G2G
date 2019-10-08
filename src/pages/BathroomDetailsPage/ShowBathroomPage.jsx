import React from 'react';
import { Query, Mutation } from 'react-apollo';
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
      postedBy {
        id
      }
    }
  }
  `

  const DELETE_BATHROOM = gql`
  mutation deleteBathroom($id: ID!) {
    deleteBathroom(id: $id) {
      postedBy {
        name
      }
    }
  }
  `

  const Bathroom_ID_Object = {bathroomId: props.match.params.id};
  const Delete_Bathroom_ID = {id: props.match.params.id};
  return(
      <Query query={ GET_BATHROOM }
      variables={ Bathroom_ID_Object }>
        
        {({ loading, error, data}) => {
          if(loading) return <div>Fetching</div>
          if(error) return <div>Error</div>
          
          const Bathroom = data;

          let deleteAction;
          if(props.user.userId === Bathroom.getBathroom.postedBy.id) {
            deleteAction = <Mutation mutation={ DELETE_BATHROOM } variables={Delete_Bathroom_ID} >
              { deleteMutation => <button onClick={ deleteMutation }>Delete</button> }
            </Mutation>
          }
          
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
              <div>Author ID: { Bathroom.getBathroom.postedBy.id }</div>
              <div>Current User ID: { props.user.userId }</div>
              {deleteAction}
            </div>
          )
        }}
      </Query>
  )
}

export default ShowBathroomPage;