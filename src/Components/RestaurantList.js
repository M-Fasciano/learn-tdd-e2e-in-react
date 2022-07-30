import React from "react";
import { Collection, CollectionItem } from "react-materialize";

const RestaurantList = ({ restaurantNames }) => {
  return (
    <Collection header="Restaurants">
      <RestaurantsItems restaurantNames={restaurantNames} />
    </Collection>
  );
};

const RestaurantsItems = ({ restaurantNames }) =>
  restaurantNames.length === 0 ? (
    <NoRestaurantItmes />
  ) : (
    <SomeRestaurantItems restaurantNames={restaurantNames} />
  );

const NoRestaurantItmes = () => (
  <CollectionItem style={{ color: "grey" }}>(none added yet)</CollectionItem>
);

const SomeRestaurantItems = ({ restaurantNames }) =>
  restaurantNames.map((restaurantName) => (
    <CollectionItem key={restaurantName}>{restaurantName}</CollectionItem>
  ));

export default RestaurantList;
