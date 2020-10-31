import React from "react";
import Books from "../components/Books/Books";
import NavBar from "../components/Menu/NavBar";

const Book = (props) => {
  const { updateState } = props;
  return (
    <div>
      <NavBar />
      <Books updateState={updateState} />
    </div>
  );
};

export default Book;
