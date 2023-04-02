import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="product">
      <div>
        <figure className="product--img">
          <img className="header--img__item" src={product.ImgUrl} />
        </figure>
        <div>
          <h3>{product.title}</h3>
          {product.salePrice != null ? (
            <p className="price">
              <span className="sale">${product.originalPrice.toFixed(2)} </span>{" "}
              ${product.salePrice.toFixed(2)}
            </p>
          ) : (
            <p className="price">${product.originalPrice}</p>
          )}
        </div>
      </div>

      <div className="product--btns">
        <button className="product__btn">add to cart</button>
        <button className="lowlighted-btn product__btn">
          <Link to={`/products/${product.nameInUrl}`}>read more</Link>
        </button>
      </div>
    </div>
  );
}

export default Product;
