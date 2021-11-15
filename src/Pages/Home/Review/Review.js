import React, { useEffect, useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container mt-3">
      <h2 className="mt-4 mb-4">Take a look what people say about us</h2>
      <div className="row row-cols-1 row-cols-md-2 g-2">
        {reviews.map((review) => (
          <div key={review._id} className="col">
            <div
              className="card h-100 rounded shadow"
              key={review._id}
              style={{ border: "1px solid #E2E2E2" }}
            >
              <div className="card-body">
                <h5 className="card-title">{review.name}</h5>
                <p className="card-text">{review.review}</p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <p className="card-text pb-2">
                  Ratting: {review.ratting}{" "}
                  <span className="bi bi-star-fill text-warning"></span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
