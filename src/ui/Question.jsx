import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Question() {
    const [clicked , setClicked] = useState(false)

    function changeState(){
        setClicked(!clicked)
    }

  return (
    <li className="question">
      <h3 className="question__header">
        Lorem ipsum dolor sit amet consectetur?
        <button onClick={changeState} className="purple more">
          <FontAwesomeIcon icon={`${clicked ? "fa fa-minus" : "fa fa-plus"}`} />
        </button>
      </h3>
      <p className={`question__content ${clicked ? "show-question": "hide-question"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        dignissimos sapiente magnam ex beatae sint asperiores enim odit earum
        explicabo!
      </p>
    </li>
  );
}

export default Question;
