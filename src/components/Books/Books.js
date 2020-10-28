import React, { useState } from "react";
import "./Book.css";
import { data } from "../../DataBase";

const Books = () => {
  const [state, setState] = useState();

  const remove = () => {
    console.log("called", state);
    const modals = document.getElementsByClassName("modal");

    // on every modal change state like in hidden modal
    for (let i = 0; i < modals.length; i++) {
      modals[i].classList.remove("show");
      modals[i].setAttribute("aria-hidden", "true");
      modals[i].setAttribute("style", "display: none");
    }

    // get modal backdrops
    const modalsBackdrops = document.getElementsByClassName("modal-backdrop");

    // remove every modal backdrop
    for (let i = 0; i < modalsBackdrops.length; i++) {
      document.body.removeChild(modalsBackdrops[i]);
    }
  };

  return (
    <div className="books">
      <div className="container pt-4">
        <div className="card-deck row">
          {data.map((x) => (
            <div className="col-xs-12 col-sm-6 col-md-4" key={x.id}>
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
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn "
                      data-toggle="modal"
                      data-target="#exampleModal2"
                    >
                      Add to Saved list
                    </button>
                    <button
                      type="button"
                      className="btn "
                      data-toggle="modal"
                      data-target="#exampleModal3"
                      onClick={() => setState(x.id)}
                    >
                      delete
                    </button>
                  </div>
                </div>
                <div className="view overlay">
                  <img
                    className="card-img-top"
                    src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
                    alt="Card cap"
                  />
                  <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div className="card-body">
                  <h4 className="card-title">{x.name}</h4>

                  <p className="card-text">
                    A novel by {x.author}
                    <br />
                    price: ${x.price}
                  </p>

                  <button type="button" className="btn btn-primary btn-md">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Modals 1*/}

          <div
            className="modal fade"
            id="exampleModal1"
            tabindex="-1"
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
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modals 2*/}

          <div
            className="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Save
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
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modals 3*/}

          <div
            className="modal fade"
            id="exampleModal3"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Are you sure want to delete this book
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
                <div className="modal-body">...</div>
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
                    className="btn btn-danger"
                    onClick={remove}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card mb-4">
              <div className="view overlay">
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg"
                  alt="Card cap"
                />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body">
                <h4 className="card-title">2 Card title</h4>

                <p className="card-text">
                  A novel by john green
                  <br />
                  price: $16.00
                </p>

                <button type="button" className="btn btn-primary btn-md">
                  Edit
                </button>
              </div>
            </div>
          </div> */}

          {/* <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card mb-4">
              <div className="view overlay">
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                  alt="Card cap"
                />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body">
                <h4 className="card-title">3 Card title</h4>

                <p className="card-text">
                  A novel by john green
                  <br />
                  price: $16.00
                </p>

                <button type="button" className="btn btn-primary btn-md">
                  Edit
                </button>
              </div>
            </div>
          </div> */}

          {/* <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <div className="view overlay">
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
                  alt="Card cap"
                />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body">
                <h4 className="card-title">4 Card title</h4>

                <p className="card-text">
                  A novel by john green
                  <br />
                  price: $16.00
                </p>

                <button type="button" className="btn btn-primary btn-md">
                  Edit
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Books;
