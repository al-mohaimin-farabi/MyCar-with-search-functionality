import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Purchase.css";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const Purchase = () => {
  AOS.init();
  const { carId } = useParams();
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  // console.log(serviceid);
  const [car, setCar] = useState([]);
  useEffect(() => {
    fetch(`https://intense-everglades-68946.herokuapp.com/cars/${carId}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data) => {
    const confirmation = await window.confirm(
      `Are Sure You Wanna Buy ${car?.name}`
    );
    let order = data;
    order.carId = carId;
    order.carName = car.name;

    console.log(order);
    if (confirmation) {
      axios
        .post("https://intense-everglades-68946.herokuapp.com/order", order)
        .then((res) => {
          if (res.data.insertedId) {
            alert("Adding Successful");
          }
          history.push("/bookingSuccess");
          reset();
        });
    } else {
      alert(
        `You Have Cancelled Booking ${car?.name}. Redirecting to home page`
      );
      history.push("/home");
    }
  };
  return (
    <>
      <Navigation></Navigation>
      <div className="container  ">
        <div className="col-12 mt-4">
          <h3>Pending...</h3>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7 col-lg-7 col-12 ">
            <div className=" my-card">
              <div className="card border-secodary p-3 text-start">
                <div className="w-100 my-img">
                  <img
                    className="p-0 m-0 my-img w-100 rounded"
                    src={car?.img}
                    alt={car?.name}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{car?.name}</h5>
                  <p className="card-p">{car?.description}</p>
                  <p className="card-p">Price: {car?.price}</p>
                  <p className="card-p">Drivetrain: {car?.Drivetrain}</p>
                  <p className="card-p">Transmission: {car?.Transmission}</p>
                  <p className="card-p">Seat: {car?.Seat}</p>
                  <p className="card-p">Fuel System: {car?.Fuel_System}</p>
                  <p className="card-p">
                    EngineCapacity: {car?.EngineCapacity}
                  </p>
                  <NavLink to="/home" className="btn btn-secondary mt-3 me-2">
                    Back To Home
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-lg-5 col-12">
            <div className="add-service w-100">
              <h2 className="text-dark mt-3 text-center mb-3">
                Please Fill Up This From
              </h2>
              <form className="order-from" onSubmit={handleSubmit(onSubmit)}>
                <input
                  data-aos="fade-up"
                  placeholder="Name"
                  defaultValue={user?.displayName}
                  required
                  {...register("Name", { required: true, maxLength: 50 })}
                />
                <input
                  data-aos="fade-up"
                  required
                  placeholder="Email"
                  defaultValue={user?.email}
                  {...register("Email")}
                />
                <input
                  data-aos="fade-up"
                  required
                  placeholder="Delivery City "
                  type="text"
                  {...register("DeliveryCity")}
                />

                <div className="form-floating w-100">
                  <textarea
                    data-aos="fade-up"
                    className="form-control "
                    required
                    placeholder="Delivery Details "
                    type="text"
                    {...register("DeliveryDetails")}
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                  ></textarea>
                  <label
                    data-aos="fade-up"
                    htmlFor="floatingTextarea2"
                    className="textarea-placeholder"
                  >
                    Delivery Details
                  </label>
                </div>

                <input
                  data-aos="fade-up"
                  required
                  placeholder="Phone Number"
                  type="number"
                  {...register("phonenumber")}
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
                  value="Buy It Now"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Purchase;
