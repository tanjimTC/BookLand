import React, { useState, useEffect } from "react";

const Savedbooks = (props) => {
  const [savedbook, setSavedbook] = useState();
  const { id } = props.data;
  const { allbooks, updateState } = props;

  useEffect(() => {
    fetch("https://bookland-server.herokuapp.com/book/savebook")
      .then((res) => res.json())
      .then((data) => {
        const book = allbooks.find((x) => x._id === id);
        setSavedbook(book);
      });
  }, [id, allbooks]);

  const removesaved = (key) => {
    fetch("https://bookland-server.herokuapp.com/book/delete/" + key, {
      method: "DELETE",
    }).then((response) => {
      console.log("delete");
      updateState();
    });
  };

  return (
    <div className="">
      {savedbook && (
        <div className="container">
          <div className="card col-md-12">
            <div
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,206,198,1) 20%, rgba(133,189,186,1) 100%)",
              }}
              className="row p-3"
            >
              <div className="col-sm-5">
                <img
                  className="d-block w-75 mx-auto"
                  src={
                    "https://bookland-server.herokuapp.com/uploads/" +
                    savedbook.image
                  }
                  alt=""
                />
              </div>

              <div className="col-sm-7 d-flex justify-content-center align-items-center">
                <div className="card-block p-2 my-3">
                  <h4 className="card-title">
                    Book Name : {savedbook.bookName}
                  </h4>
                  <b>
                    <p>Author : {savedbook.author}</p>
                    <p>genre : {savedbook.genre}</p>
                    <p>
                      Price : <sup>$</sup> {savedbook.price}{" "}
                    </p>
                  </b>
                  <button
                    type="button"
                    className="btn btn-danger"
                    // data-toggle="modal"
                    // data-target="#exampleModal4"
                    style={{ width: "150px" }}
                    onClick={() => removesaved(savedbook._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Savedbooks;
