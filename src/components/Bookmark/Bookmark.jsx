import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const ADD_BOOKMARK = gql`
mutation bookmark($bathroomId: ID!) {
  bookmark(bathroomId: $bathroomId) {
    id
  }
}
`

const Bookmark = props => {
  const Bathroom_ID_Object = {bathroomId: props.bathroomId};
  const setTrue = () => {
    return props.setBookmark(true);
  }

  return(
    <div>
      <Mutation mutation={ADD_BOOKMARK} variables={ Bathroom_ID_Object }>
        {bookmark => (
          <div style={{backgroundColor: "black", color: "white"}} onClick={ bookmark }>
            Save to Favorites
          </div>
        )}
      </Mutation>
    </div>
  )
}

export default Bookmark;