import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/house-1.jpeg";

export default function Houses({ house }) {
  //console.log(house);
  const { name, slug, images, price } = house;
  return (
    <article className="house">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt=" house" />
        <div className="price-top">
          <h6>€{price} </h6>
          <p>/ month</p>
        </div>
        <Link to={`/house/${slug}`} className="btn-primary house-link">
          Learn more
        </Link>
      </div>
      <p className="house-info">{name}</p>
    </article>
  );
}
