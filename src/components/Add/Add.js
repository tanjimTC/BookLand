import React from "react";
import "./Add.css";
import { useForm } from "react-hook-form";
import Axios from "axios";

const Add = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("bookName", data.bookName);
    formData.append("author", data.author);
    formData.append("genre", data.genre);
    formData.append("price", data.price);
    formData.append("image", data.image[0]);

    Axios.post("http://localhost:3200/book/addbook", formData)
      .then((json) => console.log(json.data))
      .catch((err) => console.log(err));

    console.log(data.bookName);
  };
  return (
    <section className="addForm">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-6 col-lg-8 col-xl-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
              action="/"
              method="post"
            >
              <div className="row">
                <div className="col text-center">
                  <h3> Add Books </h3>
                  <br />
                  <i className="text-h3">
                    “... a mind needs books as a sword needs a whetstone, if it
                    is to keep its edge.”
                  </i>
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
