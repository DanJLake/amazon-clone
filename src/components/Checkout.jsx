import React from "react";
import "./checkout.scss";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2 className="checkout-title">Your Shopping Basket is empty.</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              'Add to basket' below the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout-title">Your Shopping Basket</h2>

            {/* List all items in basket */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout-right">
          <div>
            <Subtotal />
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
