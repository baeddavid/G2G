import React from "react";
import Bookmark from "../Bookmark/Bookmark";
import RemoveBookmark from "../Bookmark/RemoveBookmark";

const BookmarkIndex = ({
  bookmarkId,
  bathroomId,
  setBookmark,
  currentState,
  isBookmarked,
}) => {
  return (
    <div>
      {isBookmarked ? (
        <RemoveBookmark
          bookmarkId={bookmarkId}
          setBookmark={setBookmark}
          currentState={currentState}
        />
      ) : (
        <Bookmark
          bathroomId={bathroomId}
          setBookmark={setBookmark}
          currentState={currentState}
        />
      )}
    </div>
  );
};

export default BookmarkIndex;
