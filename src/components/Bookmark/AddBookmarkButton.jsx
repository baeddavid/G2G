import React from "react";

const AddBookmarkButton = ({ addBookmark, bathroomId }) => {
  return (
    <div
      style={{ backgroundColor: "black", color: "white" }}
      onClick={() => addBookmark({ variables: bathroomId })}
    >
      Save to Favorites
    </div>
  );
};

export default AddBookmarkButton;
