import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
const ManageAllProducts = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://intense-everglades-68946.herokuapp.com/cars`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user.email]);

  const handleDelete = (id, title) => {
    console.log(id, title);
    const confirmation = window.confirm(`Are Sure You Wanna Delete ${title}`);
    if (confirmation) {
      const url = `https://intense-everglades-68946.herokuapp.com/cars/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = products.filter((order) => order._id !== id);
            setProducts(remaining);
          }
        });
    } else {
      alert(`Deleting ${title} aborted`);
    }
  };

  return (
    <>
      <div className="container-fluid align-items-center">
        <div className="row">
          <div className="col-12">
            <h1>All The Products</h1>
            <p>Total Products {products.length}</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {products?.length > 0 ? (
              products.map((product) => (
                <AllProducts
                  key={product._id}
                  product={product}
                  handleDelete={handleDelete}
                ></AllProducts>
              ))
            ) : (
              <h4 className="ms-3">Nothing Orderd Yet</h4>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

function AllProducts(props) {
  const product = props.product;
  const handleDelete = props.handleDelete;
  return (
    <div className="card mb-3" style={{ maxWidth: "100%" }}>
      <div className="row g-0">
        <div className="col-md-3 col-12 col-lg-3 col-sm-12">
          <img
            src={product?.img}
            className="w-100 rounded-start "
            alt="..."
            height="280"
          />
        </div>
        <div className="col-md-6 col-12 col-lg-6 col-sm-12">
          <div className="card-body">
            <h5 className="card-title">
              <strong>{product?.name} </strong>
            </h5>
            <p className="card-text">Price: {product?.price}</p>
            <p className="card-text">
              Engine Capacity: {product?.EngineCapacity}
            </p>
            <p className="card-text">Fuel System: {product?.Fuel_System}</p>
            <p className="card-text">Transmission: {product?.Transmission}</p>
          </div>
        </div>
        <div className="col-md-2 col-12 col-sm-12 col-lg-2 d-flex align-items-center justify-content-start justify-content-sm-start justify-content-md-end justify-content-lg-end">
          <button
            className="btn btn-danger m-2"
            onClick={() => handleDelete(product?._id, product?.name)}
          >
            <span className="bi bi-archive-fill"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManageAllProducts;
