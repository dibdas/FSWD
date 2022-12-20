import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImCart } from "react-icons/im";
import { BsFillCartPlusFill } from "react-icons/bs";
import { RiShoppingCartFill } from "react-icons/ri";
import "./Navbar.css";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cartReducer.cart);
  // const count = 0;
  let count = 0;
  cart.forEach((element) => {
    count += element.quantity;
  });

  return (
    <nav>
      <h2>My Shop</h2>

      <div className="right">
        <div className="cart-layout">
          {/* <AiOutlineShoppingCart />
          <ImCart /> */}
          {/* <BsFillCartPlusFill /> */}
          <RiShoppingCartFill />
          {/* <h3>7</h3> */}
          <h3>{count}</h3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
