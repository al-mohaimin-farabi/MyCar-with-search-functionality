import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./AddProduct.css";
const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://intense-everglades-68946.herokuapp.com/cars", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Adding Successful");
        }
      });
    reset();
  };
  return (
    <div className="add-service">
      <h2 className="text-primary mt-3 text-center mb-3">
        Please Add A Product
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          {...register("name", { required: true, maxLength: 50 })}
        />
        <input placeholder="Img url" type="text" {...register("img")} />
        <textarea placeholder="Description" {...register("description")} />
        <input
          placeholder="Drivetrain"
          type="text"
          {...register("Drivetrain")}
        />
        <input placeholder="Price" type="text" {...register("price")} />
        <input
          placeholder="Transmission"
          type="text"
          {...register("Transmission")}
        />
        <input placeholder="Seat" type="number" {...register("Seat")} />
        <input
          placeholder="Fuel System"
          type="text"
          {...register("Fuel_System")}
        />
        <input
          placeholder="Engine Capacity"
          type="text"
          {...register("EngineCapacity")}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
