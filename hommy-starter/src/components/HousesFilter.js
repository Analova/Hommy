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
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    elevator,
    pets
  } = context;
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
  return (
    <section className="filter-container ">
      <form className="form-group">
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
      </form>
    </section>
  );
}
