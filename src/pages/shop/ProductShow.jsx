import { PRODUCTS } from "../../products";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import "./ProductShow.css";
import { Toaster } from "sonner";

export const ProductDisplay = () => {
  const { id } = useParams();
  const { cartItems, addToCart, removeFromCart, updateCartItemCount ,getCartItemCount} =
    useContext(ShopContext);
  return (
    <div className="product-show">
      <img src={PRODUCTS[id - 1].productImage} alt="Product Image"></img>

      <div className="product-info">
        <h3>{PRODUCTS[id - 1].productName}</h3>

        <hr></hr>
        <p className="info">{PRODUCTS[id - 1].description}</p>
        <hr></hr>
        <p className="price">${PRODUCTS[id - 1].price}</p>

        <div className="btns">
          <button className="add-btn" onClick={() => addToCart(id)}>
          <ion-icon size="large" name="cart"></ion-icon>Add
          </button>

          {getCartItemCount() > 0 ? (
            <button className="minus-btn" onClick={() => removeFromCart(id)}>
            
            <ion-icon size="large" name="trash"></ion-icon> 
          </button>
            
          ) : (
            <p></p>
          )}


          {getCartItemCount() > 0 ? (
            <input
            name="Quantity"
            className="quantity"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          ) : (
            <p></p>
          )}

          
        </div>
      </div>
      <Toaster richColors position="bottom-center" />
    </div>
  );
};
