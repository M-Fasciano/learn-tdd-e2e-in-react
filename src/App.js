// import { useState } from "react";
// import NewMessageForm from "./NewMessageForm";
// import MessageList from "./MessageList";
import React from "react";
// import NewResturantForm from "./Components/NewRestaurantForm";
import RestaurantListPage from "./Components/RestaurantListPage";

export default function App() {
  // const [messages, setMessages] = useState([]);
  // function handleSend(newMessage) {
  //   setMessages([newMessage, ...messages]);
  // }
  return (
    <>
      {/* <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} /> */}
      <RestaurantListPage />
      {/* <NewResturantForm /> */}
    </>
  );
}
