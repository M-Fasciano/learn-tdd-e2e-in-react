import React, { Component } from "react";
import NewResturantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";

export default class RestaurantListPage extends Component {
  state = { restaurantNames: [], showRestaurantForm: false };

  handleShowNewRestaurantForm = () => {
    this.setState({ showRestaurantForm: true });
  };

  handleAddRestaurant = (newRestaurantName) => {
    this.setState((state) => ({
      showRestaurantForm: false,
      restaurantNames: [newRestaurantName, ...state.restaurantNames],
    }));
  };

  render() {
    const { restaurantNames, showRestaurantForm } = this.state;

    return (
      <div>
        <button
          data-testid="addRestaurantButton"
          onClick={this.handleShowNewRestaurantForm}
        >
          Add Restaurant
        </button>
        {showRestaurantForm ? (
          <NewResturantForm onSave={this.handleAddRestaurant} />
        ) : null}
        <RestaurantList restaurantNames={restaurantNames} />
      </div>
    );
  }
}
