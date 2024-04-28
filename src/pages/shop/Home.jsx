import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Link } from "react-router-dom";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Product } from "./product";

import AOS from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  const navigate = useNavigate();
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  useEffect(() => {
    AOS.init({ duration: "2500" });
  }, []);
  return (
    <>
      <div className="swiper-div" data-aos="fade-right">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/slide2.webp" alt="Welcome to Nexus Tech"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide1.webp" alt="Best Prices In Town" loading="lazy"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slide3.webp" alt="All your favorite Brands we have" loading="lazy"></img>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>

      <div className="Grid-1" data-aos="fade-left">
        <div className="laptop-div">
          <img src="/laptop.webp" alt="Browse Laptops"></img>
          <div className="laptop-info">
            <p>Laptops</p>
            <Link to="/laptops/pg1" aria-label="Link to our Laptops Listings">
              <button>Browse</button>
            </Link>
          </div>
        </div>

        <div className="phone-div">
          <img src="/phone.webp" alt="Browse Phones"></img>
          <div className="phone-info">
            <p>Phones</p>
            <Link to="/phones/pg1" aria-label="Link to our Phone Listings">
              <button>Browse</button>
            </Link>
          </div>
        </div>

        <div className="earbud-div">
          <img src="/earbuds.webp" alt="Browse Earbuds"></img>
          <div className="earbud-info">
            <p>Earbuds</p>
            <Link to="/Audio" aria-label="Link to our Earbud Listings">
              <button>Browse</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bestsellers" data-aos="slide-right">
        <h2>BestSellers 🔥</h2>
      </div>

      <div className="flexbox-1" data-aos="zoom-in">
        <div className="acer">
          <img src="/laptops/acer1.webp" alt="Best Laptops"></img>
          <h2>Acer Aspire 5 A515-58M-50ER Notebook </h2>
          <p>$999</p>
          <Link to="laptops/pg1/5" aria-label="Link to Acer Aspire 5">
            <button>Checkout</button>
          </Link>
        </div>

        <div className="sub-flex">
          <div>
            <img src="/phones/sam1.webp" alt="Best Phones"></img>
            <h2>Samsung Galaxy A04s</h2>
            <p>$200</p>
            <Link to="phones/pg1/19" aria-label="Link to Galaxy A04s">
              <button>Checkout</button>
            </Link>
          </div>

          <div>
            <img src="/phones/sam3.webp" alt="Best Phones"></img>
            <h2>Samsung Galaxy A54 </h2>
            <p>$699</p>
            <Link to="phones/pg1/24" aria-label="Link to Galaxy A54">
              <button>Checkout</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="work" data-aos="slide-right">
        <h2> For the Workaholics</h2>
      </div>

      <div className="Grid-2" data-aos="zoom-in-right">
        <div onClick={() => navigate("/laptops/pg1/9")}>
          <img src="/laptops/macbook.webp" alt="Macbook Air" loading="lazy"></img>
          <h3>Apple MacBook Air 13.6" M2</h3>
          <p>$2000</p>
        </div>

        <div onClick={() => navigate("/laptops/pg1/4")}>
          <img src="/laptops/hp2.webp" alt="HP Laptop" loading="lazy"></img>
          <h3>HP Laptop 15-FD0334NIA</h3>
          <p>$228</p>
        </div>

        <div onClick={() => navigate("/laptops/pg2/13")}>
          <img src="/laptops/micro2.webp" alt="Microsoft Laptop" loading="lazy"></img>
          <h3>Microsoft Surface Laptop 3 13.5"</h3>
          <p>$759</p>
        </div>

        <div onClick={() => navigate("/laptops/pg2/10")}>
          <img src="/laptops/macbook2.webp" alt="Another Macbook" loading="lazy"></img>
          <h3>Apple MacBook Pro A1278</h3>
          <p>$799</p>
        </div>
      </div>

      <div className="fun" data-aos="slide-right">
        <h2> For the TikTokers</h2>
      </div>

      <div className="Grid-3" data-aos="zoom-in-right">
        <div onClick={() => navigate("/phones/pg1/24")}>
          <img src="/phones/sam3.webp" alt=" Samsung Galaxy A54" loading="lazy"></img>
          <h3>Samsung Galaxy A54 8GB+256GB</h3>
          <p>$699</p>
        </div>

        <div onClick={() => navigate("/phones/pg1/26")}>
          <img src="/phones/apple.webp" alt="iPhone 15 Pro Max" loading="lazy"></img>
          <h3>Apple iPhone 15 Pro Max 5G</h3>
          <p>$999</p>
        </div>

        <div onClick={() => navigate("/phones/pg2/28")}>
          <img src="/phones/realme.webp" alt="Realme Note 50 " loading="lazy"></img>
          <h3>Realme Note 50 RAM 4GB-ROM 64GB Battery 5000 mAh</h3>
          <p>$399</p>
        </div>

        <div onClick={() => navigate("/phones/pg2/31")}>
          <img src="/phones/poco.webp" alt="Poco M6 Pro" loading="lazy"></img>
          <h3>Poco M6 Pro 6.67" FHD</h3>
          <p>$899</p>
        </div>
      </div>

      <div className="audiophile" data-aos="slide-right">
        <h2> For the Audiophiles</h2>
      </div>

      <div className="Grid-4" data-aos="zoom-in-right">
        <div onClick={() => navigate("/Audio/36")}>
          <img src="/audio/earbud1.webp" alt="Airpods Pro" loading="lazy"></img>
          <h3>Airpods Pro</h3>
          <p>$259</p>
        </div>

        <div onClick={() => navigate("/Audio/38")}>
          <img src="/audio/sambud.webp" alt="Samsung Galaxy Buds 2" loading="lazy"></img>
          <h3>Samsung Galaxy Buds 2</h3>
          <p>$199</p>
        </div>

        <div onClick={() => navigate("/Audio/39")}>
          <img src="/audio/ronin.webp" alt="Ronin R-4400" loading="lazy"></img>
          <h3>Ronin R-4400 Wireless Bluetooth</h3>
          <p>$199</p>
        </div>
      </div>

      <div className="choose" data-aos="slide-right">
        <h2> Why Choose Nexus Tech Store?</h2>
        <h3>Because!</h3>
      </div>

      <div className="features-grid" data-aos="zoom-out-up">
        <div>
          <img src="/delivery.webp" alt="48H Delivery" loading="lazy"></img>
          <p>48hr Delivery</p>
        </div>

        <div>
          <img src="/shield.webp" alt="1 Year Brand Warranty" loading="lazy"></img>
          <p> 1 Year Brand Warranty</p>
        </div>

        <div>
          <img src="/service.webp" alt="Best Service" loading="lazy"></img>
          <p>24/7 Customer Service</p>
        </div>

        <div>
          <img src="/money.webp" alt="7 Day Money Back Gurantee" loading="lazy"></img>
          <p>7 Day Money-Back Guarantee </p>
        </div>
      </div>
    </>
  );
};
