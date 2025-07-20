import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test("Filter input updates correctly", () => {
  const handleSearchChange = jest.fn();
  render(<Filter search="" onSearchChange={handleSearchChange} />);

  const input = screen.getByPlaceholderText("Search items...");
  fireEvent.change(input, { target: { value: "milk" } });

  expect(handleSearchChange).toHaveBeenCalledWith("milk");
});
