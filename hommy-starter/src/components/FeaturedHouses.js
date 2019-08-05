import React, { Component } from "react";
import { HouseContext } from "../context";
import Loading from "./Loading";
import House from "./House";

export default class FeaturedHouses extends Component {
  static contextType = HouseContext;
  render() {
    let { loading, featuredHouses: houses } = this.context;
    houses = houses.map(h => {
      return <House key={h.id} house={h} />;
    });
    return (
      <section className="featured-houses">
        <div className="featured-houses-center">
          {loading ? <Loading /> : houses}
        </div>
      </section>
    );
  }
}

