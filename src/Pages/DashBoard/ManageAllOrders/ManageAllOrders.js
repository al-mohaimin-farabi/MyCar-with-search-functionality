import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
const ManageAllOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("Pending...");
  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const handleDelete = (id, title) => {
    const confirmation = window.confirm(`Are Sure You Wanna Delete ${title}`);
    if (confirmation) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
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
          <div className="col-12 col-md-8 col-lg-8">
            <h1>All The Orders</h1>
            <p>Total order {orders.length}</p>
          </div>
          <div className="col-12 col-md-4 col-lg-4 mt-3">
            <button
              className="btn btn-danger me-3"
              onClick={() => setStatus("Shipped")}
            >
              <span className="bi bi-truck"></span> Ship
            </button>
          </div>
        </div>
      </div>
      {orders?.length > 0 ? (
        <ul className="list-group align-middle">
          {orders?.map((order) => (
            <li
              key={Math.random() * 1000}
              className="list-group-item align-middle"
            >
              <div className="d-flex justify-content-center align-item-center">
                <div className="col-6   ">
                  <p className="mt-2">
                    <strong>{order?.carName} </strong>
                    <span className="mt-2">For {order?.Name}</span>
                  </p>
                  <strong>Status: {status}</strong>
                  <p className="mt-2">Email: {order?.Email}</p>
                  <p className="mt-2">Phone: {order?.phonenumber}</p>
                  <p className="mt-2">Delivery City: {order?.DeliveryCity}</p>
                  <p className="mt-2">
                    Delivery Details: {order?.DeliveryDetails}
                  </p>
                </div>
                <div className="col-6 text-end d-flex align-items-center justify-content-end">
                  <button
                    className="btn btn-danger me-3"
                    onClick={() => handleDelete(order?._id, order?.carName)}
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

export default ManageAllOrders;
