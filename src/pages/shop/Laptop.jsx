import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export const Laptop = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>Laptops </h2>{" "}
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
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M16 416h480"
          />
        </svg>
      </div>

      <div className="product-grid" data-aos="slide-right">
        {PRODUCTS.map((product) => {
          // Check if the product's ID is less than or equal to 8
          if (product.id <= 9) {
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
        <Link to="/laptops/pg1" aria-label="Page 1">
          <button className="current-pg">1</button>
        </Link>
        <Link to="/laptops/pg2" aria-label="Page 2">
          <button className="next-pg">2</button>
        </Link>
        <Link to="/laptops/pg2" aria-label=" Go to Page 2">
          <button className="arrow">
            {" "}
            <ion-icon name="arrow-forward-outline"></ion-icon>{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};
