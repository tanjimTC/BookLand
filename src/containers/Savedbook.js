import React from "react";
import NavBar from "../components/Menu/NavBar";
import Savedbooks from "../components/Savedbooks/Savedbooks";

const Savedbook = (props) => {
  const { saved, allbooks, updateState } = props;

  return (
    <div>
      <NavBar />
      {saved.map((x) => (
        <Savedbooks
          key={x._id}
          data={x}
          allbooks={allbooks}
          updateState={updateState}
        />
      ))}
    </div>
  );
};

export default Savedbook;
