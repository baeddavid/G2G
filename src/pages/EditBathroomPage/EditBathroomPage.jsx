import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import EditBathroom from '../../components/EditBathroom/EditBathroom';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

const GET_BATHROOM = gql`
query getBathroom($bathroomId: ID!) {
  getBathroom(bathroomId: $bathroomId) {
    id
    businessName
    description
    address
    genderNeutral
    category
    changingStations
    purchaseRequired
    accessibleStall
    singleOccupancy
    lat
    lng
    postedBy {
      id
    }
  }
}
`

const EditBathroomPage = props => {
  const Bathroom_ID_Object = {bathroomId: props.match.params.id};
  const { loading, error, data } = useQuery(GET_BATHROOM, {
    fetchPolicy: "no-cache",
    variables: Bathroom_ID_Object
  });

  if(loading) return <LoadingPage />
  if(error) return <ErrorPage />


  return(
    <EditBathroom data={data.getBathroom} {...props} />
  )
}

export default EditBathroomPage;