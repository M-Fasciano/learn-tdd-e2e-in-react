import React from "react";
import { Col, Row } from "react-materialize";
import RestaurantListPage from "./Components/RestaurantListPage";
// import { useState } from "react";
// import NewMessageForm from "./NewMessageForm";
// import MessageList from "./MessageList";
// import NewResturantForm from "./Components/NewRestaurantForm";

export default function App() {
  // const [messages, setMessages] = useState([]);
  // function handleSend(newMessage) {
  //   setMessages([newMessage, ...messages]);
  // }
  return (
    <Row>
      {/* <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} /> */}
      <Col s={12} m={10} l={8} offset="m1 l2">
        <RestaurantListPage />
      </Col>
      {/* <NewResturantForm /> */}
    </Row>
  );
}
