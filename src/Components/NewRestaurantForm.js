import React, { useEffect, useState } from "react";
import M from "materialize-css";
import { Button, Row, TextInput } from "react-materialize";

const NewResturantForm = ({ onSave }) => {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    M.AutoInit();
  });

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSave = () => {
    onSave(inputText);
  };

  return (
    <Row>
      <TextInput
        s={12}
        m={8}
        l={10}
        type="text"
        label="Restaurant Name"
        value={inputText}
        onChange={handleTextChange}
        data-testid="newRestaurantName"
      />
      <Button
        s={12}
        m={4}
        l={2}
        data-testid="saveNewRestaurantButton"
        onClick={handleSave}
      >
        Save
      </Button>
    </Row>
  );
};

export default NewResturantForm;
