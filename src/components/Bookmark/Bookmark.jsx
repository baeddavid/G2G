import React from 'react';
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';

const ADD_BOOKMARK = gql`
mutation bookmark($bathroomId: ID!) {
  bookmark(bathroomId: $bathroomId) {
    id
  }
}
`

const Bookmark = ({bathroomId, setBookmark, currentState, refetch}) => {
  
  const[addBookmark, {loading}] = useMutation(ADD_BOOKMARK, {
    onCompleted() {
      setBookmark(!currentState);
      refetch();
    }
  });
  if(loading) return <div style={{backgroundColor: "black", color: "white"}}>Save to Favorites</div>
  return(
    <div style={{backgroundColor: "black", color: "white"}} onClick={ () => addBookmark({ variables: bathroomId }) }>
      Save to Favorites
    </div>
  )
}

export default Bookmark;