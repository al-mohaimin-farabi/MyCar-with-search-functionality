import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Review = () => {
  AOS.init();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://intense-everglades-68946.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container mt-3">
      <h2
        className="mt-4 mb-4"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="50"
        data-aos-once="false"
        data-aos-easing="linear"
      >
        Take a look what people say about us
      </h2>
      <div className="row row-cols-1 row-cols-md-2 g-2">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="col"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            <div
              className="card h-100 rounded shadow"
              key={review._id}
              style={{ border: "1px solid #E2E2E2" }}
            >
              <div className="card-body">
                <h5
                  className="card-title"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  data-aos-delay="50"
                >
                  {review.name}
                </h5>
                <p
                  className="card-text"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  data-aos-delay="50"
                >
                  {review.review}
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <p
                  className="card-text pb-2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
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
