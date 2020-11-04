import React from "react";
import "./Add.css";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = (props) => {
  toast.configure();
  const { update, id, updateUi } = props;
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    const formData = new FormData();

    formData.append("bookName", data.bookName);
    formData.append("author", data.author);
    formData.append("genre", data.genre);
    formData.append("price", data.price);
    formData.append("image", data.image[0]);

    if (update === "update") {
      console.log("got here insdie update");
      Axios.put("http://localhost:3200/book/cart/" + id, formData)
        .then((json) => {
          console.log("inside update", json.data);
          updateUi();
        })
        .catch((err) => console.log(err));
    } else {
      Axios.post("http://localhost:3200/book/addbook", formData)
        .then((json) => {
          toast.dark("✔️ Book Added Successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        })
        .catch((err) => console.log(err));
    }

    e.target.reset();
  };
  return (
    <section className="addForm mb-3">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-10 col-md-6 col-lg-8 col-xl-6 mx-auto p-5 mb-5 addBookfrom"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,206,198,1) 20%, rgba(133,189,186,1) 100%)",
            }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
              action="/"
              method="post"
            >
              <div className="row">
                <div className="col text-center">
                  {update ? <h3> Edit Books </h3> : <h3> Add Books </h3>}
                  <br />
                  {!update && (
                    <i className="text-h3">
                      “... a mind needs books as a sword needs a whetstone, if
                      it is to keep its edge.”
                    </i>
                  )}
                  <br />
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col mt-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Book Name"
                    name="bookName"
                    ref={register({ required: true })}
                  />{" "}
                  {errors.bookName && <span>This field is required</span>}
                  <br />
                </div>
              </div>
              <div className="row align-items-center mt-2">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Author"
                    name="author"
                    ref={register({ required: true })}
                  />{" "}
                  {errors.author && <span>This field is required</span>}
                  <br />
                </div>
              </div>
              <div className="row align-items-center mt-2">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Genre"
                    name="genre"
                    ref={register({ required: true })}
                  />{" "}
                  {errors.genre && <span>This field is required</span>}
                  <br />
                </div>
              </div>
              <div className="row align-items-center mt-2">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    name="price"
                    ref={register({ required: true })}
                  />{" "}
                  {errors.price && <span>This field is required</span>}
                  <br />
                </div>
              </div>
              <div className="row align-items-center mt-2">
                <div className="col">
                  <input
                    type="file"
                    className="form-control"
                    name="image"
                    ref={register({ required: true })}
                  />{" "}
                  {errors.image && <span>This field is required</span>}
                  <br />
                </div>
              </div>
              <div className="row justify-content-start mt-2">
                <div className="col">
                  {update ? (
                    <button
                      className="btn "
                      style={{
                        backgroundColor: "#3F3D56",
                        color: "#FFFFFF",
                        width: "150px",
                      }}
                      type="submit"
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      className="btn "
                      style={{
                        backgroundColor: "#3F3D56",
                        color: "#FFFFFF",
                        width: "150px",
                      }}
                      type="submit"
                    >
                      Add Book
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Add;
