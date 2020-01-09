import React from "react";
import { useContext } from "react";
import { HouseContext } from "../context";
//get all unique value
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function HousesFilter({ houses }) {
  const context = useContext(HouseContext);
  //console.log(context);
  const { handleChange, type, rooms, price, minPrice, maxPrice } = context;
  // get unique types
  let types = getUnique(houses, "type");
  //add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, i) => {
    return (
      <option key={i} value={item}>
        {item}
      </option>
    );
  });
  let capacity = getUnique(houses, "rooms");
  capacity = capacity.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container ">
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">house type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* select rooms */}
        <div className="form-group">
          <label htmlFor="rooms">Rooms</label>
          <select
            name="rooms"
            id="rooms"
            value={rooms}
            className="form-control"
            onChange={handleChange}
          >
            {capacity}
          </select>
        </div>
        {/* end of select rooms */}
        {/* price */}
        <div className="form-group">
          <label htmlFor="price">Price:{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of price */}
      </form>
    </section>
  );
}
