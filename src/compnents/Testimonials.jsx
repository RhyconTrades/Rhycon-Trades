import React from "react";
import Testimonial from "../ui/Testimonial";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Testimonials({testimonials}) {

  return (
    <section id="testimonials">
        <h2 className="section-title">Our Customers are &nbsp; <span className="purple"> Satisfied</span> </h2>
        <div className="container testimonials-wrapper">
        { testimonials != null &&
          testimonials.slice(0 , 4).map((testimonial) => <Testimonial testimonial={testimonial} key={testimonial.id} />)
        }

      </div>
    </section>
  );
}

export default Testimonials;
