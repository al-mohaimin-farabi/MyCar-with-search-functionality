import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
const ManageAllOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://intense-everglades-68946.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const handleDelete = (id, title) => {
    const confirmation = window.confirm(`Are Sure You Wanna Delete ${title}`);
    if (confirmation) {
      const url = `https://intense-everglades-68946.herokuapp.com/orders/${id}`;
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
      <div className="container-fluid align-items-center mb-2">
        <div className="row">
          <div className="col-12 ">
            <h1>All The Orders</h1>
            <p>Total order {orders.length}</p>
          </div>
        </div>
      </div>
      {orders?.length > 0 ? (
        <ul className="list-group align-middle">
          {orders?.map((order) => (
            <AllOrder
              key={order._id}
              order={order}
              handleDelete={handleDelete}
            ></AllOrder>
          ))}
        </ul>
      ) : (
        <h4 className="ms-3">Nothing Orderd Yet</h4>
      )}
    </>
  );
};

function AllOrder(props) {
  const order = props.order;
  const handleDelete = props.handleDelete;
  const [status, setStatus] = useState("Pending...");
  return (
    <div className="col-12 mb-2">
      <li key={Math.random() * 1000} className="list-group-item align-middle">
        <div className="d-flex justify-content-center align-item-center flex-wrap">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <p className="mt-2">
              <strong>{order?.carName} </strong>
              <span className="mt-2">For {order?.Name}</span>
            </p>
            <strong>Status: {status}</strong>
            <p className="mt-2">Email: {order?.Email}</p>
            <p className="mt-2">Phone: {order?.phonenumber}</p>
            <p className="mt-2">Delivery City: {order?.DeliveryCity}</p>
            <p className="mt-2">Delivery Details: {order?.DeliveryDetails}</p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-md-end justify-content-lg-end justify-content-start">
            <button
              className="btn btn-danger me-3"
              onClick={() => handleDelete(order?._id, order?.carName)}
            >
              <span className="bi bi-archive-fill"></span>
            </button>
            <button
              className="btn btn-danger me-3"
              onClick={() => setStatus("Shipped")}
            >
              <span className="bi bi-truck "></span> Ship
            </button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default ManageAllOrders;
