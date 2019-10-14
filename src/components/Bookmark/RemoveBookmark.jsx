import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const REMOVE_BOOKMARK = gql`
mutation removeBookmark($id: ID!) {
  removeBookmark(id: $id) {
    id
  }
}
`

const RemoveBookmark = props => {
  const BOOKMARK_ID = {id: props.bookmarkId};
  return(
    <div>
      <Mutation mutation={REMOVE_BOOKMARK} variables={ BOOKMARK_ID } onCompleted={ () => {
        props.setBookmark(!props.currentState);
        props.refetch();
      }}>
        { removeBookmark => <div style={{backgroundColor: "black", color: "white"}} onClick={ removeBookmark }>
          Remove Bookmark</div> }
      </Mutation>
    </div>
  )
}

export default RemoveBookmark;