import React, { Component } from "react";
import defaultBcg from "../images/house-4.jpeg";
import Hero from "../components/Hero";
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
  componentDidMount() {}

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
      extras,
      pets,
      parking,
      images
    } = house;
    return (
      <div>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to="/houses" className="btn-primary">
              go back
            </Link>
          </Banner>
        </StyledHero>
      </div>
    );
  }
}
