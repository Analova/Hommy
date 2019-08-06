import React, { Component } from "react";
import items from "./data";

const HouseContext = React.createContext();

class HouseProvider extends Component {
  state = {
    houses: [],
    featuredHouses: [],
    sortedHouses: [],
    loading: true,
    type: "all",
    rooms: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    elevator: false,
    pets: false
  };
  // get Data
  componentDidMount() {
    let houses = this.formatData(items);
    let featuredHouses = houses.filter(house => house.featured === true);
    let maxPrice = Math.max(...houses.map(item => item.price));
    let maxSize = Math.max(...houses.map(item => item.size));
    this.setState({
      houses,
      featuredHouses,
      sortedHouses: houses,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
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

  getHouse = slug => {
    let tempHouse = [...this.state.houses];
    const house = tempHouse.find(house => house.slug === slug);
    return house;
  };

  handleChange = event => {
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;
    console.log(type, name, value);
  };

  filterRooms = () => {
    console.log("filte me");
  };
  render() {
    return (
      <HouseContext.Provider
        value={{
          ...this.state,
          getHouse: this.getHouse,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </HouseContext.Provider>
    );
  }
}
const HouseConsumer = HouseContext.Consumer;

export function withHouseConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <HouseConsumer>
        {value => <Component {...props} context={value} />}
      </HouseConsumer>
    );
  };
}

export { HouseProvider, HouseConsumer, HouseContext };
