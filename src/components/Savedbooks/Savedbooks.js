import Axios from "axios";
import React, { useState, useEffect } from "react";

const Savedbooks = (props) => {
  const [savedbook, setSavedbook] = useState();
  const [state, setState] = useState();
  const { id, bookName } = props.data;
  const { allbooks } = props;
  useEffect(() => {
    const book = allbooks.filter((x) => x._id === id);
    setSavedbook(book[0]);
  }, [id, allbooks]);

  const remove = () => {
    Axios.delete("http://localhost:3200/book/cart/" + state).then(
      (response) => {
        // updateUi();
      }
    );
  };

  return (
    <div className="">
      {savedbook && (
        <div className="">
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
                    src={"http://localhost:3200/uploads/" + savedbook.image}
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
                        Price : <sup>$</sup> {bookName.price}{" "}
                      </p>
                    </b>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-toggle="modal"
                      data-target="#exampleModal4"
                      style={{ width: "150px" }}
                      onClick={() => setState(savedbook._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModal4"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Remove from saved Book
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Are you sure want to Remove this book from saved list
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    data-dismiss="modal"
                    className="btn btn-danger"
                    onClick={remove}
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
