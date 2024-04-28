import "./NotFound.css";
import { Link } from "react-router-dom";

export const NotFound=() => {
  return (
    <>
      <div className="error-div">
        <img src="/404.webp" alt="Page Not Found"></img>
        <h1>Uh-oh!</h1>
        <h2>There's nothing here.</h2>
        <p>Let's get you back to our HomePage</p>
        <Link to="/" aria-label="Go Back To Home Page">
          <button>Back To Home</button>
        </Link>
      </div>
    </>
  );
}
