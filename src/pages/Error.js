import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Hero>
      <Banner name="404" title="page not found">
        <Link to="/" className="btn">
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
