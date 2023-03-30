import React from "react";
import Testimonial from "../ui/Testimonial";

function Testimonials() {
  return (
    <section id="testimonials">
        <h2 className="section-title">Our Customers are &nbsp; <span className="purple"> Satisfied</span> </h2>
      <div className="container testimonials-wrapper">
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </section>
  );
}

export default Testimonials;
