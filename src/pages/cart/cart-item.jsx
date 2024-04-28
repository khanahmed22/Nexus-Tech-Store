import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt="Product Image"/>
      <div className="description">
        <h4>
          {productName}
        </h4>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button className="add" onClick={() => addToCart(id)}> + </button>
          <input
            name="Quantity"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="minus" onClick={() => removeFromCart(id)}>- </button>
        </div>
      </div>
    </div>
  );
};
