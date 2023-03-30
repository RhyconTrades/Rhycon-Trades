import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Testimonial() {
  return (
    <div className="testimonial">
    <figure>
      <img src="https://media.discordapp.net/attachments/1088531111942037534/1089864830820819034/D35800C8-E152-4781-ACFF-DB49118250B3.png" />
    </figure>
    <div className="testimonial--content">
      <h3 className="testimonial__name">Probably a Human</h3>
      <p className="testimonial__income">
        <span className="dollar">
          <FontAwesomeIcon icon="fa fa-dollar-sign" />
        </span>{" "}
        $1200
      </p>
      <p className="testimonial__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        provident totam cum aspernatur consectetur ipsa cumque deserunt
        aliquam neque. Vitae!
      </p>
    </div>
  </div>
  )
}

export default Testimonial