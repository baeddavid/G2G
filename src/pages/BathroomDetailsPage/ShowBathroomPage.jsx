import React, { useEffect } from 'react';
import { useQuery, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import LoadingPage from '../LoadingPage/LoadingPage';
import DeletedPage from '../DeletedPage/DeletedPage';
import ErrorPage from '../ErrorPage/ErrorPage';

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

const ShowBathroomPage = props => {

  const Bathroom_ID_Object = {bathroomId: props.match.params.id};

  const { loading, error, data } = useQuery(GET_BATHROOM, { fetchPolicy: 'no-cache', variables: Bathroom_ID_Object });
  
  if(loading) return <LoadingPage />;
  if(error) return <DeletedPage />;

  const Bathroom = data;

  let deleteAction;
  let showReviews;

  if(props.user.userId === Bathroom.getBathroom.postedBy.id) {
    deleteAction = <Link to={`/bathroom/${props.match.params.id}/delete`}><div>Delete</div></Link>
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