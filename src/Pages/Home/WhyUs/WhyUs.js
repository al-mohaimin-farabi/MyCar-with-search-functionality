import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
  AOS.init();
  return (
    <div className="container my-4">
      <h2
        data-aos="flip-up"
        data-aos-duration="1000"
        data-aos-delay="50"
        data-aos-once="false"
        data-aos-easing="linear"
      >
        Why Us?
      </h2>
      <p
        data-aos="flip-up"
        data-aos-duration="1000"
        data-aos-delay="50"
        data-aos-once="false"
        data-aos-easing="linear"
      >
        My Car is a car-based E-Commerce site where you can buy your favorite
        car at the cheapest price on the internet. We provide customized
        services. This means you can customize anything in your selected order.
        Buy a car online and get it delivered to your front door within 4-7
        working days.
      </p>
    </div>
  );
};

export default WhyUs;
