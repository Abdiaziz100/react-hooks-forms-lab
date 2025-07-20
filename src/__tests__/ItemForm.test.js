import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";

test("ItemForm submits new item correctly", () => {
  const handleSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={handleSubmit} />);

  const nameInput = screen.getByLabelText(/Name/i);
  const categorySelect = screen.getByLabelText(/Category/i);
  const submitButton = screen.getByText(/Add Item/i);

  fireEvent.change(nameInput, { target: { value: "Yogurt" } });
  fireEvent.change(categorySelect, { target: { value: "Dairy" } });
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalled();
  const submittedItem = handleSubmit.mock.calls[0][0];
  expect(submittedItem.name).toBe("Yogurt");
  expect(submittedItem.category).toBe("Dairy");
});
