import React from "react";
import { Link } from "react-router-dom";

function Product() {
  return (
      <div className="product">

        <div>
          <figure className="product--img">
            <img
              className="header--img__item"
              src="https://cdn.discordapp.com/attachments/1088531111942037534/1090683077010919494/image.png"
            />
          </figure>
          <div>
            <h3>Product Name</h3>
            <p className="price">
              <span className="sale">$10.0 </span> $9.00{" "}
            </p>
          </div>
        </div>

        <div className="product--btns">
          <button className="product__btn">add to cart</button>
          <button className="lowlighted-btn product__btn">
            <Link to='/products/1'>
              read more
            </Link>
          </button>
        </div>
      </div>
  );
}

export default Product;
