import React, { useState } from "react";
import { Link } from "react-router-dom";

function Product({ product  , cart}) {

  const [reload , setReload] = useState(false)

  function getProduct(item) {
    cart.push(item);
    setReload(!reload)
  }
  
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
                      {cart.find((item) => item.id == product.id) ? (
                <Link to='/cart' className="product__btn">
                  <button className="product__btn">
                    Check Cart
                  </button>{" "}
                </Link>
              ) : (
                <button
                  onClick={() => getProduct(product)}
                  className="product__btn"
                >
                  add to cart
                </button>
              )}
          <Link className="product__btn" to={`/products/${product.nameInUrl}`}>
            <button className="lowlighted-btn product__btn">
              read more
            </button>
          </Link>
      </div>
    </div>
  );
}

export default Product;
