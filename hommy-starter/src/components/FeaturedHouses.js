import React, { Component } from "react";
import { HouseContext } from "../context";

export default class FeaturedHouses extends Component {
  static contextType = HouseContext;
  render() {
    const { featuredHouses: houses } = this.context;
    console.log(houses);
    return <div>Hello from featured houses</div>;
  }
}
