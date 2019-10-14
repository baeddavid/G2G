import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import RemoveBookmark from '../Bookmark/RemoveBookmark';

const BookmarkIndex = props => {

  props.setBookmark(props.currentState);
  return(
    <div>
      {props.currentState ? 
      <RemoveBookmark refetch={props.refetch} bookmarkId={props.bookmarkId} setBookmark={props.setBookmark} currentState={props.currentState}/>
      : 
      <Bookmark refetch={props.refetch} bathroomId={props.bathroomId} setBookmark={props.setBookmark} currentState={props.currentState}/>}
    </div>
  )
}

export default BookmarkIndex;