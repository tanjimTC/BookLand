import React from "react";
import "./Add.css";
import { useForm } from "react-hook-form";

const Add = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="addForm">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-10 col-md-6 col-lg-8 col-xl-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="row">
                <div class="col text-center">
                  <h3> Add Books </h3>
                  <br />
                  <i class="text-h3">
                    “... a mind needs books as a sword needs a whetstone, if it
                    is to keep its edge.”
                  </i>
                  <br />
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col mt-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Book Name"
                    name="bookName"
                    ref={register({ required: true })}
                  />{" "}
                  {errors.bookName && <span>This field is required</span>}
                  <br />
                </div>
              </div>
              <div class="row align-items-center mt-2">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Author"
                    name="author"
                    ref={register({ required: true })}
                  />{" "}
                  {errors.author && <span>This field is required</span>}
                  <br />
                </div>
              </div>
              <div class="row align-items-center mt-2">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Genre"
                    name="genre"
                    ref={register({ required: true })}
                  />{" "}
                  {errors.genre && <span>This field is required</span>}
                  <br />
                </div>
              </div>
              <div class="row align-items-center mt-2">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Price"
                    name="price"
                    ref={register({ required: true })}
                  />{" "}
                  {errors.price && <span>This field is required</span>}
                  <br />
                </div>
              </div>
              <div class="row align-items-center mt-2">
                <div class="col">
                  <input
                    type="file"
                    class="form-control"
                    name="image"
                    ref={register({ required: true })}
                  />{" "}
                  {errors.image && <span>This field is required</span>}
                  <br />
                </div>
              </div>
              <div class="row justify-content-start mt-2">
                <div class="col">
                  <button
                    class="btn "
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
