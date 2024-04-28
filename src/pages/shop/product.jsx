import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage,description } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product-card">
      
      <img src={productImage} alt="Product Image" />
    
      
      <div className="product-card-info">
        <h4>
          {productName}
        </h4>

        <h5 className="product-desc">{description}</h5>
        <p> ${price}</p>
      </div>
      
    </div>
  );
};
