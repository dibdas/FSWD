import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromCart } from "../../redux/slices/cartSlice";
import "./SingleProduct.css";

function SingleProduct({ product }) {
  const dispatch = useDispatch();
  // getting the whole cart
  const cart = useSelector((state) => state.cartReducer.cart);
  // checking whether the item is present inside the cart or not , if present,
  //  then what is the quantity of it
  const currentItem = cart.find((item) => item.id === product.id);
  const currentItemQunatity = currentItem ? currentItem.quantity : 0;
  console.log(cart.quantity);
  return (
    <div className="single-product">
      <img
        className="product-image"
        src={product.images[0]}
        alt={product.title}
      />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">{product.price}</p>
      <p style={{ fontSize: `1.6rem`, color: `black` }}>
        Category:{product.category.name}
      </p>
      <div className="card-info">
        <button onClick={() => dispatch(addTocart(product.id, product.price))}>
          +
        </button>
        <h2>{currentItemQunatity}</h2>
        <button
          onClick={() => dispatch(removeFromCart(product.id, product.price))}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
