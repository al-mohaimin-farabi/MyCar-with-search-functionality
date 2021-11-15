import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
const UserOrder = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
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
            const remaining = myOrders.filter((order) => order._id !== id);
            setMyOrder(remaining);
          }
        });
    } else {
      alert(`Deleting ${title} aborted`);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h3>Orders of Mr. {user.displayName}</h3>
            <p> E-mail: {user?.email}</p>
            <p>Total order {myOrders.length}</p>
          </div>
        </div>
      </div>
      {myOrders?.length > 0 ? (
        <ul className="list-group align-middle">
          {myOrders?.map((order) => (
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

export default UserOrder;
