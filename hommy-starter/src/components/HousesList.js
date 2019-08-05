import React from "react";
import House from "./House";

export default function HousesList({ houses }) {
  if (houses.length === 0) {
    return (
      <div className="empty-search">
        <h3>Sorry no rooms matched your search </h3>
      </div>
    );
  }
  return (
    <section className="houseslist">
      <div className="houseslist-center">
        {houses.map(item => {
          return <House key={item.id} house={item} />;
        })}
      </div>
    </section>
  );
}
