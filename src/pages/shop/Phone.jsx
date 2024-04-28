import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Phone = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>Phones</h2>
        &nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <rect
            x="128"
            y="16"
            width="256"
            height="480"
            rx="48"
            ry="48"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            d="M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
        </svg>
      </div>

      <div className="product-grid" data-aos="slide-right">
        {PRODUCTS.map((product) => {
          // Check if the product's ID is less than or equal to 8
          if (product.id > 18 && product.id <= 27) {
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
        <Link to="/phones/pg1" aria-label="page 1">
          <button className="current-pg">1</button>
        </Link>
        <Link to="/phones/pg2" aria-label="Page 2">
          <button className="next-pg">2</button>
        </Link>
        <Link to="/phones/pg2" aria-label="Go to Page 2">
          <button className="arrow">
            {" "}
            <ion-icon name="arrow-forward-outline"></ion-icon>{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};
