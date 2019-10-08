import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const ShowBathroomPage = (props) => {

  const [form, setForm] = useState({
    title: '',
    description: ''
  });

  const handleChange = event => setForm({ ...form, [event.target.name]: event.target.value });

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
      reviews {
        id
        title
        description
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

  const UPDATE_BATHROOM = gql`
  mutation updateBathroom(
    $id: ID!,
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
    updateBathroom(
      id: $id,
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
    }
  }
  `

  const POST_REVIEW = gql`
    mutation postReview($bathroomId: ID!, $title: String!, $description: String!) {
      postReview(bathroomId: $bathroomId, title: $title, description: $description) {
        id
      }
    }
  `

  const UPDATE_REVIEW = gql`
  mutation updateReview($id: ID!, $title: String!, $description: String!) {
    updateReview(id: $id, title: $title, description: $description) {
      id
    }
  }
  `

  const Bathroom_ID_Object = {bathroomId: props.match.params.id};
  const Mutate_Bathroom_ID = {id: props.match.params.id};
  const Post_Review_ID = {
    bathroomId: props.match.params.id,
    title: form.title,
    description: form.description
  };
  return(
      <Query asyncMode query={ GET_BATHROOM }
      variables={ Bathroom_ID_Object }>
        
        {({ loading, error, data}) => {
          if(loading) return <div>Fetching</div>
          if(error) return <div>Error</div>
          
          const Bathroom = data;
          
          let deleteAction;
          let updateAction;
          let showReviews;
          let updateReviews;

          // If the user owns the Bathroom they can delete it
          if(props.user.userId === Bathroom.getBathroom.postedBy.id) {

            deleteAction = <Mutation mutation={ DELETE_BATHROOM } variables={Mutate_Bathroom_ID}>
              { deleteMutation => <button onClick={ deleteMutation }>Delete</button> }
            </Mutation>

            // updateAction = 
          }

          // If there are no reviews prompt the user to write a review. Else display the list of reviews.
          if(Bathroom.getBathroom.reviews.length === 0) {
            showReviews = <div>Write the first review!</div>
          } else {
            showReviews = Bathroom.getBathroom.reviews.map((review, index) => (
              <div key={index}>
                <br/>Title: { review.title }<br/>
                Description: { review.description }
              </div>
            ))
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
              <input
                name='title'
                placeholder='Title'
                onChange={ handleChange }
                defaultValue={ form.title }
              />

              <input
                name='description'
                placeholder='Description'
                onChange={ handleChange }
                defaultValue={ form.description }
              />

              <Mutation mutation={ POST_REVIEW } variables={ Post_Review_ID } onCompleted={() => props.history.push(`/bathroom/${props.match.params.id}`)}>
                { postReview => <button onClick={ postReview }>Post Review</button>}
              </Mutation>

              { showReviews }
            </div>
          )
        }}
      </Query>
  )
}

export default ShowBathroomPage;