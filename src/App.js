import React from "react";
import { Col, Row } from "react-materialize";
import RestaurantListPage from "./Components/RestaurantListPage";

export default function App() {
  return (
    <Row>
      <Col s={12} m={10} l={8} offset="m1 l2">
        <RestaurantListPage />
      </Col>
    </Row>
  );
}
