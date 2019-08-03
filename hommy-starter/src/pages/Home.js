import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Hero>
      <Banner
        title="Discover a place you'll love to live"
        subtitle="Don't settle for average"
      >
        <Link to="/houses" className="btn-primary">
          Your new home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Home;

//rafc
//rfc
//rcc
