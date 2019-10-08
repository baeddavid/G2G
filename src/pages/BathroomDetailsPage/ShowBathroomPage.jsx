import React, { useEffect } from 'react';
import { useQuery, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

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

const ShowBathroomPage = props => {

  const Bathroom_ID_Object = {bathroomId: props.match.params.id};
  const Mutate_Bathroom_ID = {id: props.match.params.id};

  const { loading, error, data } = useQuery(GET_BATHROOM, { variables: Bathroom_ID_Object },);
  
  if(loading) return <p>Loading...</p>;
  if(error) return <h1>Error! You weren't supposed to see this :( </h1>

  const Bathroom = data;

  let deleteAction;
  let showReviews;

  if(props.user.userId === Bathroom.getBathroom.postedBy.id) {
    deleteAction = <Mutation mutation={ DELETE_BATHROOM } variables={ Mutate_Bathroom_ID }>
      { deleteMutation => <div onClick={ deleteMutation }>Delete</div>}
    </Mutation>
  }


  let tempArr = Bathroom.getBathroom.reviews.slice(0).reverse();
  if(tempArr.length === 0) {
    showReviews = <div>Write the first review!</div>
  } else {
    showReviews = tempArr.map((review, index) => (
      <div key={index}>
        <br/>Title: { review.title }<br/>
        Description: { review.description }
      </div>
    ))
  }

  return(
    <div>
      <Link to={'/'}><div>Back to home</div></Link>
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
      <Link to={`/bathroom/${props.match.params.id}/createreview`}><div style={{color: 'black'}}>Add a review</div></Link>
      { showReviews }
    </div>
  )
}

export default ShowBathroomPage;