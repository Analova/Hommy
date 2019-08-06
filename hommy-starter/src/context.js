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
    const target = event.target;
    const value = event.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterHouse
    );
    // const type = event.target.type;
    // const name = event.target.name;
    // const value = event.target.value;
    // console.log(
    //   `the type is ${type}, the name is ${name}, the value is ${value}`
    // );
  };

  filterHouse = () => {
    let {
      houses,
      type,
      rooms,
      price,
      minSize,
      maxSize,
      elevator,
      pets
    } = this.state;

    // all the houses
    let tempHouses = [...houses];
    // transform to a numver
    rooms = parseInt(rooms);
    // filter by type
    if (type !== "all") {
      tempHouses = tempHouses.filter(house => house.type === type);
    }
    //filter by rooms
    if (rooms !== 1) {
      tempHouses = tempHouses.filter(houses => houses.rooms === rooms);
    }
    this.setState({
      sortedHouses: tempHouses
    });
    //console.log("filte me");
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
