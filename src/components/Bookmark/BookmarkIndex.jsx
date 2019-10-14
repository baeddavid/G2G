import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import RemoveBookmark from '../Bookmark/RemoveBookmark';

const BookmarkIndex = ({ bookmarkId, bathroomId, setBookmark, currentState, refetch}) => {

  setBookmark(currentState);
  return(
    <div>
      {currentState ? 
      <RemoveBookmark refetch={refetch} bookmarkId={bookmarkId} setBookmark={setBookmark} currentState={currentState}/>
      : 
      <Bookmark refetch={refetch} bathroomId={bathroomId} setBookmark={setBookmark} currentState={currentState}/>}
    </div>
  )
}

export default BookmarkIndex;