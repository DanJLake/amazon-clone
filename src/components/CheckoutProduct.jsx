import React from "react";
import "./checkoutProduct.scss";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    //Remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      //Key and value (can just use key if they are the same)
      id: id,
    });
  };

  return (
    <div className="checkout-product">
      <img src={image} alt="" />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <span className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>⭐</span>
            ))}
        </span>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
