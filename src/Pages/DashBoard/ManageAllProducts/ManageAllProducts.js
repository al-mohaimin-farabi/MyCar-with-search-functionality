import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
const ManageAllProducts = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/cars`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user.email]);

  const handleDelete = (id, title) => {
    console.log(id, title);
    const confirmation = window.confirm(`Are Sure You Wanna Delete ${title}`);
    if (confirmation) {
      const url = `http://localhost:5000/cars/${id}`;
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
      {products?.length > 0 ? (
        <ul className="list-group align-middle">
          {products?.map((product) => (
            <li
              key={Math.random() * 1000}
              className="list-group-item align-middle"
            >
              <div className="d-flex justify-content-center align-item-center">
                <div className="col-7">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={product.img}
                        className="w-100"
                        height="220"
                        alt=""
                      />
                    </div>
                    <div className="col-8">
                      <h6 className="mt-2">
                        <strong>{product?.name} </strong>
                      </h6>
                      <p>Price: {product.price}</p>
                      <p>Engine Capacity: {product.EngineCapacity}</p>
                      <p>Fuel System: {product.Fuel_System}</p>
                      <p>Transmission:{product.Transmission}</p>
                    </div>
                  </div>
                </div>
                <div className="col-5 text-end d-flex align-items-center justify-content-end">
                  <button
                    className="btn btn-danger me-3"
                    onClick={() => handleDelete(product?._id, product?.name)}
                  >
                    <span className="bi bi-archive-fill"></span>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h4 className="ms-3">Nothing Orderd Yet</h4>
      )}
    </>
  );
};

export default ManageAllProducts;
