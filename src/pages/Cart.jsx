import React from "react";
import CartProduct from "../ui/CartProduct";

function Cart() {
  return (
    <main>
      <div className="cart-container">
        <h2 className="cart-title">Cart</h2>
        <div className="cart">
          <div className="cart--bar">
            <h4 className="cart--bar__title">Product</h4>
            <h4 className="cart--bar__title">Price</h4>
          </div>
          <div className="cart--table">
                <CartProduct />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
