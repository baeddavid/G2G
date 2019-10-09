import React from 'react';
import { Query } from 'react-apollo';
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
    postedBy {
      id
    }
  }
}
`

const EditBathroomPage = props => {
  const Bathroom_ID_Object = {bathroomId: props.match.params.id};

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