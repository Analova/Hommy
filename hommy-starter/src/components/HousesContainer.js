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
    <>
      <HousesFilter houses={houses} />
      <HousesList houses={sortedHouses} />
    </>
  );
}

export default withHouseConsumer(HousesContainer);
