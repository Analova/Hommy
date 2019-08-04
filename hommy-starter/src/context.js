import React, { Component } from "react";
import items from "./data";

const HouseContext = React.createContext();

class HouseProvider extends Component {
  state = {
    houses: [],
    featuredHouses: [],
    sortedHouses: [],
    loading: true
  };
  // get Data
  componentDidMount() {
    let houses = this.formatData(items);
    let featuredHouses = houses.filter(house => house.featured === true);
    this.setState({
      houses,
      featuredHouses,
      sortedHouses: houses,
      loading: false
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let house = { ...item.fields, images, id };
      return house;
    });
    return tempItems;
  }

  render() {
    return (
      <HouseContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </HouseContext.Provider>
    );
  }
}
const HouseConsumer = HouseContext.Consumer;

export { HouseProvider, HouseConsumer, HouseContext };
