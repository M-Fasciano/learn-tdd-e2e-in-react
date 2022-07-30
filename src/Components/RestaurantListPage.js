import React, { useState } from "react";
import { Button, Row } from "react-materialize";
import NewResturantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";

const RestaurantListPage = () => {
  const [restaurantNames, setRestaurantNames] = useState([]);
  const [showRestaurantForm, setShowRestaurantForm] = useState(false);

  const handleShowNewRestaurantForm = () => {
    setShowRestaurantForm(true);
  };

  const handleAddRestaurant = (newRestaurantName) => {
    setShowRestaurantForm(false);
    setRestaurantNames([newRestaurantName, ...restaurantNames]);
  };

  return (
    <>
      <Row>
        <Button
          data-testid="addRestaurantButton"
          onClick={handleShowNewRestaurantForm}
        >
          Add Restaurant
        </Button>
      </Row>
      <Row>
        {showRestaurantForm ? (
          <NewResturantForm onSave={handleAddRestaurant} />
        ) : null}
        <RestaurantList restaurantNames={restaurantNames} />
      </Row>
    </>
  );
};

export default RestaurantListPage;
