import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = async (data) => {
    const confirmation = await window.confirm(`Are Sure You Wanna add review`);
    let review = data;
    if (confirmation) {
      axios
        .post("https://intense-everglades-68946.herokuapp.com/review", review)
        .then((res) => {
          if (res.data.insertedId) {
            alert("Adding Successful");
          }
          reset();
        });
    } else {
      alert(`Adding Review Cancelled`);
      reset();
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h3>Add a review about My Car</h3>
          <div className="add-service w-100">
            <h2 className="text-dark mt-3 text-center mb-5">
              Please Fill Up This From
            </h2>
            <form className="order-from mt-2" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control"
                placeholder="Name"
                defaultValue={user?.displayName}
                required
                {...register("name", { required: true, maxLength: 50 })}
              />

              <div className="form-floating w-100">
                <textarea
                  className="form-control"
                  required
                  placeholder="Review "
                  type="text"
                  {...register("review")}
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
                <label
                  htmlFor="floatingTextarea2"
                  className="textarea-placeholder"
                >
                  Your Review
                </label>
              </div>

              <input
                className="form-floating"
                required
                placeholder="Ratting (Rate 1-5)"
                type="text"
                {...register("ratting")}
              />

              {/* <button
              onClick={() => handleBook(service?.title)}
              className="btn btn-success mt-3"
            >
              Book It Now
            </button> */}
              <input
                className="btn btn-dark mt-5"
                type="submit"
                value="Add Review"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
