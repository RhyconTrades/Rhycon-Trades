import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Testimonial({ testimonial }) {
  return (
    <div className="testimonial">
      <figure>
        <img src={testimonial.imgUrl} />
      </figure>
      <div className="testimonial--content">
        <h3 className="testimonial__name">{testimonial.name}</h3>
        <p className="testimonial__income">
          <span className="dollar">
            <FontAwesomeIcon icon="fa fa-dollar-sign" />
          </span>{" "}
          ${testimonial.ammountMade}
        </p>
        <p className="testimonial__description">{testimonial.description}</p>
      </div>
    </div>
  );
}

export default Testimonial;
