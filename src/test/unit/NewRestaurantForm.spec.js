import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewRestaurantForm from "../../Components/NewRestaurantForm";

describe("NewRestaurantForm", () => {
  describe("clicking the save button", () => {
    let saveHandler;

    async function saveButton() {
      saveHandler = jest.fn().mockName("saveHandler");

      render(<NewRestaurantForm onSave={saveHandler} />);

      await userEvent.type(
        screen.getByTestId("newRestaurantName"),
        "Sushi Place"
      );
      userEvent.click(screen.getByTestId("saveNewRestaurantButton"));
    }

    it("calls the onSave handler", async () => {
      await saveButton();

      expect(saveHandler).toHaveBeenCalledWith("Sushi Place");
    });
  });
});
