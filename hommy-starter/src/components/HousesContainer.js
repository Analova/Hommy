import React from "react";
import HousesList from "./HousesList";
import HousesFilter from "./HousesFilter";
import Loading from "./Loading";
import { withHouseConsumer } from "../context";

function HousesContainer({ context }) {
  const { loading, sortedHouses, houses } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      Hello for HousesContainer
      <HousesFilter houses={houses} />
      <HousesList houses={sortedHouses} />
    </div>
  );
}

export default withHouseConsumer(HousesContainer);
