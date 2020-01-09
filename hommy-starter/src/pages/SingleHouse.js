import React, { Component } from "react";
import defaultBcg from "../images/house-4.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { HouseContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleHouse extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = HouseContext;

  render() {
    const { getHouse } = this.context;
    const house = getHouse(this.state.slug);
    console.log(house);
    if (!house) {
      return (
        <div className="error">
          <h3> No house could be found...</h3>
          <Link to="/" className="btn-primary">
            Go back
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      rooms,
      price,
      size,
      extras,
      pets,
      elevator,
      images
    } = house;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to="/houses" className="btn-primary">
              go back
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-house">
          <div className="single-house-images">
            {defaultImg.map((item, index) => {
              return <img key={item} src={item} alt="images of the house" />;
            })}
          </div>
          <div className="single-house-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} SQ </h6>
              <h6>rooms: {rooms} </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>
                {elevator ? "elevator available" : "no elevator abailable"}
              </h6>
            </article>
          </div>
        </section>
        <section className="house-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, i) => {
              return <li key={i}>-{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
