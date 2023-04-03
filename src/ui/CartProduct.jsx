import React from "react";

function CartProduct() {
  return (
    <div className="cart--table__column">
      <div className="table--column__info">
        <figure className="column--info__img">
          <img src="https://i.postimg.cc/76p17yL7/Screenshot-2023-04-02-224834.png" />
        </figure>
        <div className="column--info__display">
          <h4 className="info--display__title">Name</h4>
          <button className="info--display__btn">remove</button>
        </div>
      </div>
      <p className="table--column__price">29$</p>
    </div>
  );
}

export default CartProduct;
