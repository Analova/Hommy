import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedHouses from "../components/FeaturedHouses";

const Home = () => {
  return (
    <>
      <Hero>
        <div>
          <h1 className="title">Discover a place you'll love to live</h1>
          <h2 className="subtitle">Don't settle for average</h2>

          <Link to="/houses" className="btn-primary">
            Your new home
          </Link>
        </div>
      </Hero>
      <Services />
      <FeaturedHouses />
    </>
  );
};

export default Home;

//rafc
//rfc
//rcc
