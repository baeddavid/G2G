import React from "react";

const RemoveBookmarkButton = ({ removeBookmark, BOOKMARK_ID }) => {
  return (
    <div
      style={{ backgroundColor: "black", color: "white" }}
      onClick={() => removeBookmark({ variables: BOOKMARK_ID })}
    >
      Remove Bookmark
    </div>
  );
};

export default RemoveBookmarkButton;
