import React, { useEffect, useState } from "react";
import "./Book.css";
import Axios from "axios";
import Add from "../Add/Add";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { ClockLoader, HashLoader } from "react-spinners";

const Books = (props) => {
  const { updateState } = props;
  const [state, setState] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const override = css`
    display: block;
    margin: 100px auto;
    border: red;
  `;

  useEffect(() => {
    Axios.get("https://bookland-server.herokuapp.com/book").then((response) => {
      setData(response.data);
    });
  }, []);

  const updateUi = () => {
    Axios.get("https://bookland-server.herokuapp.com/book").then((response) => {
      setData(response.data);
    });
  };

  const remove = () => {
    Axios.delete(
      "https://bookland-server.herokuapp.com/book/cart/" + state
    ).then((response) => {
      updateUi();
      updateState();
    });
    fetch("https://bookland-server.herokuapp.com/book/delete/" + state, {
      method: "DELETE",
    }).then((response) => {
      console.log("delete");
      updateState();
    });
  };
  const save = (id, name) => {
    Axios.post("https://bookland-server.herokuapp.com/book/savebook", {
      id: id,
      bookName: name,
    })
      .then(function (response) {
        toast.dark("✔️ Book saved Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        updateState();
      })
      .catch((err) => alert(err.response.data));
  };

  return (
    <div className="books">
      <div className="container pt-4">
        {data.length < 1 && (
          <ClockLoader
            css={override}
            size={200}
            color={"#000"}
            loading={loading}
          />
        )}
        <div className="card-deck row">
          {data.map((x) => (
            <div className="col-xs-12 col-sm-6 col-md-4 p-3 mb-2" key={x._id}>
              <div className="card">
                <div className="dropdown">
                  <button
                    className="btn menu-btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <button
                      type="button"
                      className="btn "
                      data-toggle="modal"
                      data-target="#exampleModal1"
                      onClick={() => setState(x._id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn "
                      data-toggle="modal"
                      data-target="#exampleModal2"
                      onClick={() => save(x._id, x.bookName)}
                    >
                      Add to Saved list
                    </button>
                    <button
                      type="button"
                      className="btn "
                      data-toggle="modal"
                      data-target="#exampleModal3"
                      onClick={() => setState(x._id)}
                    >
                      delete
                    </button>
                  </div>
                </div>
                <div className="view overlay">
                  <img
                    className="card-img-top"
                    src={
                      "https://bookland-server.herokuapp.com/uploads/" + x.image
                    }
                    alt="Card cap"
                  />
                  <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="card-body">
                  <h4 className="card-title">{x.bookName}</h4>

                  <p className="card-text">
                    A <u>{x.genre}</u> by <b>{x.author}</b>
                    <br />
                    Price :<b> ${x.price}</b>
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Modals 1*/}

          <div
            className="modal fade"
            id="exampleModal1"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Update Book
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
                  <Add
                    update="update"
                    id={state}
                    data={data}
                    updateUi={updateUi}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Modals 2 */}

          <div
            className="modal fade"
            id="exampleModal3"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Delete Book
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
                  Are you sure want to delete this book
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
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
