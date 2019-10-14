import React from 'react';
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';
import RemoveBookmarkButton  from '../Bookmark/RemoveBookmarkButton';

const REMOVE_BOOKMARK = gql`
mutation removeBookmark($id: ID!) {
  removeBookmark(id: $id) {
    id
  }
}
`

const RemoveBookmark = ({bookmarkId, currentState, setBookmark, refetch})=> {

  const BOOKMARK_ID = {id: bookmarkId};
  const[removeBookmark, {loading}] = useMutation(REMOVE_BOOKMARK, {
    onCompleted() {
      setBookmark(!currentState);
      refetch();
    }
  });
  
  if(loading) return <div style={{backgroundColor: "black", color: "white"}}>Remove Bookmark</div>

  return(
    <RemoveBookmarkButton removeBookmark={removeBookmark} BOOKMARK_ID={BOOKMARK_ID} />
  )
}

export default RemoveBookmark;