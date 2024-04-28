import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Laptop2 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);



  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>Laptops</h2>
        &nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          
          viewBox="0 0 512 512"
        >
          <rect
            x="48"
            y="96"
            width="416"
            height="304"
            rx="32.14"
            ry="32.14"
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M16 416h480"
          />
        </svg>
      </div>

      <div className="product-grid" data-aos="slide-right">
        {PRODUCTS.map((product) => {
          // Check if the product's ID is less than or equal to 8
          if (product.id > 9 && product.id <= 18) {
            return (
              <div key={product.id} onClick={() => navigate(`${product.id}`)}>
                <Product data={product} />
              </div>
            );
          }
          return null; // If the ID is greater than 8, don't render the product
        })}
      </div>

      <div className="page-changer">
        <Link to="/laptops/pg1" aria-label="Go Back">
          <button className="arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </button>
        </Link>
        <Link to="/laptops/pg1" aria-label="page 1">
          <button className="next-pg">1</button>
        </Link>
        <Link to="/laptops/pg2" aria-label="page 2"> 
          <button className="current-pg">2</button>
        </Link>
      </div>
    </div>
  );
};
