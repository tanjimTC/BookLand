import Axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../components/Menu/NavBar";
import Savedbooks from "../components/Savedbooks/Savedbooks";

const Savedbook = (props) => {
  const { saved, allbooks } = props;
  // console.log(saved, allbooks);
  // console.log("saved data", saved);
  // const data = allbooks.filter((x) => x._id === saved.id);
  // console.log("total", data);

  return (
    <div>
      <NavBar />
      {saved.map((x) => (
        <Savedbooks key={x._id} data={x} allbooks={allbooks} />
      ))}
    </div>
  );
};

export default Savedbook;
