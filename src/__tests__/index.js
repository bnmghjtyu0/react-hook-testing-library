import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FavoriteNumber from "../FavoriteNumber";

test('renders a number input with a label "Favorite Number"', () => {
  const { getByLabelText, getByRole, debug } = render(<FavoriteNumber />);
  debug();
  const input = getByLabelText(/favorite number/i);
  fireEvent.change(input, { target: { value: "10" } });
  expect(getByRole("alert")).toHaveTextContent(/the number is invalid/i);
});
