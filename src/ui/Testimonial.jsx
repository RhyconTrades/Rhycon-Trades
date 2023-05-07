import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Testimonial({ testimonial }) {
  return (
    <div className="testimonial">
      <figure>
        <img className="skeleton-img" src={testimonial.imgUrl} />
      </figure>
      <div className="testimonial--content">
        <h3 className="testimonial__name">{testimonial.name}</h3>
        <p className="testimonial__income">
          <span className="star">
            <FontAwesomeIcon icon="fa fa-star" />
          </span>
          {testimonial.ammountMade}
        </p>
        <p className="testimonial__description">{testimonial.description}</p>
      </div>
    </div>
  );
}

export default Testimonial;
