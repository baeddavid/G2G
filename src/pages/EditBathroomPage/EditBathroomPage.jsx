import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import EditBathroom from '../../components/EditBathroom/EditBathroom';

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
  }
}
`

const EditBathroomPage = props => {
  const Bathroom_ID_Object = {bathroomId: props.match.params.id};
  const[form, setForm] = useState({
    category: '',
    genderNeutral: '',
    businessName: '',
    description: '',
    address: '',
    lat: props.location.lat,
    lng: props.location.lng,
    purchaseRequired: false,
    accessibleStall: false,
    singleOccupancy: false,
    changingStations: false,
  })

  return(
    <div>
      <Query query={GET_BATHROOM} variables={Bathroom_ID_Object} fetchPolicy={'no-cache'}>
        {({ loading, error, data }) => {
          if(loading) return 'Loading...';
          if(error) return 'We made a fucky wucky';
          return(
            <EditBathroom data={data.getBathroom} {...props}/>
          )
        }}
      </Query>
    </div>
  )
}

export default EditBathroomPage;