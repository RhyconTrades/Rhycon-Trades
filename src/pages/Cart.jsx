import React from "react";
import CartProduct from "../ui/CartProduct";

function Cart({cart , setCart}) {
  let totalPrice = 0
  cart.map((item) => totalPrice += (item.salePrice || item.totalPrice))
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
                {cart.map((item) => <CartProduct cart={cart} setCart={setCart} product={item} key={item.id}/>)}
          </div>
        </div>
        <div className="cart--price">
          <p className="cart--price__sub">Subtotal <span>${(totalPrice * 0.9).toFixed(2)}</span></p>
          <p className="cart--price__sub">Tax <span>${(totalPrice * 0.1).toFixed(2)}</span></p>
          <h4 className="cart--price__sub cart--price__total">Total <span>${totalPrice.toFixed(2)}</span></h4>
        </div>
      </div>
    </main>
  );
}

export default Cart;
