import React from "react";
import { Link } from "react-router-dom";
import "./css/quote.css";

const Home = () => {
  return (
    <Link to="/quote">
      <div className="container home border">
        <p>Quotes</p>
      </div>
    </Link>
  );
};

export default Home;
