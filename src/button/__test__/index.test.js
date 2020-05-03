import React from "react";
import { render, fireEvent } from "@testing-library/react";
const { toMatchDiffSnapshot } = require("snapshot-diff");
import Button from "../index";

describe("Button", () => {
  it("adf", () => {
    const { container, debug, getByTestId, asFragment } = render(<Button />);
    // console.log(debug())
    const btnToggle = getByTestId("btn-toggle");
    const content = getByTestId("content");

    fireEvent.click(btnToggle);
    expect(content.textContent).toBe("clicked");
  });
});
