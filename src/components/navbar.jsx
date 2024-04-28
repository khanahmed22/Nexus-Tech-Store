import { useRef, useEffect } from "react";
import "./navbar.css";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const { getCartItemCount } = useContext(ShopContext);
  const navigate = useNavigate();

  const [showSearchDiv, setShowSearchDiv] = useState(true);

  const navRef = useRef();
  const searchRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <button className="nav-btn" onClick={showNavbar} aria-label="Menu Button">
        <ion-icon name="menu"></ion-icon>
      </button>

      <div className="nexus-logo">
        <svg
          id="logo-72"
          width="52"
          height="44"
          viewBox="0 0 53 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z"
            
            fill="#FFFFFF"
          ></path>{" "}
        </svg>
        <p>Nexus Tech Store</p>
      </div>

      <nav ref={navRef}>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}
          aria-label="Menu Close Button"
        >
          <ion-icon name="close"></ion-icon>
        </button>

        <NavLink onClick={showNavbar} to="/">
          Home
        </NavLink>

        <NavLink onClick={showNavbar} to="/laptops/pg1">
          Laptops
        </NavLink>

        <NavLink onClick={showNavbar} to="/phones/pg1">
          Phones
        </NavLink>

        <NavLink onClick={showNavbar} to="/Audio">
          Audio
        </NavLink>

        <NavLink onClick={showNavbar} to="/Accessories">
          Accessories
        </NavLink>

       
      </nav>

      <div className="search-div">
        <form>
          <input
            className="search-bar"
            ref={searchRef}
            placeholder="Search"
            value={search}
            type="search"
            onChange={(e) => {
              setSearch(e.target.value);
              setShowResults(true); // Always show results when typing
            }}
          ></input>
        </form>
        <br></br>
        {showResults && (
          <div className="search-results">
            {PRODUCTS.filter((item) =>
              item.productName.toLowerCase().includes(search.toLowerCase())
            )
              .slice(0, 5)
              .map((item) => (
                <div
                  className="search-appear"
                  key={item.id}
                  onClick={() => navigate(`/laptops/pg1/${item.id}`)}
                >
                  <img src={item.productImage} alt={item.productName} />
                  <label>{item.productName}</label>
                </div>
              ))}
          </div>
        )}
      </div>

      <Link to="/cart" aria-label="My Cart">
        <div className="cart-display">
          <svg
            className="cart-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <circle cx="176" cy="416" r="32" />
            <circle cx="400" cy="416" r="32" />
            <path d="M456.8 120.78a23.92 23.92 0 00-18.56-8.78H133.89l-6.13-34.78A16 16 0 00112 64H48a16 16 0 000 32h50.58l45.66 258.78A16 16 0 00160 368h256a16 16 0 000-32H173.42l-5.64-32h241.66A24.07 24.07 0 00433 284.71l28.8-144a24 24 0 00-5-19.93z" />
          </svg>

          {getCartItemCount() > 0 ? (
            <div className="cart-count">{getCartItemCount()}</div>
          ) : (
            <p></p>
          )}
        </div>
      </Link>
    </header>
  );
};
