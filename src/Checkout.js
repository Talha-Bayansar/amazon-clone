import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
