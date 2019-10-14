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
  console.log(props.bookmarkId);
  return(
    <div>
      <Mutation mutation={REMOVE_BOOKMARK} variables={ props.bookmarkId } onCompleted={ () => {
        props.isBookmarked = false;
        props.refetch();
      }}>
        { removeBookmark => <div style={{backgroundColor: "black", color: "white"}} onClick={ removeBookmark }>
          Remove Bookmark</div> }
      </Mutation>
    </div>
  )
}

export default RemoveBookmark;