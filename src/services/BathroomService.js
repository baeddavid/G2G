import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag'

const GET_CLOSEST = gql`
query getClosest($currentLat:Float!, $currentLng: Float!) {
  getClosest(currentLat: ${30.2578}, currentLng: ${-97.7499}) {
    bathrooms {
      address
      id
      lat
      lng
    }
  }
}
`
