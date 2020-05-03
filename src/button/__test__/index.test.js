import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../index";
// const { toMatchDiffSnapshot } = require("snapshot-diff");

describe("測試組件 Button", () => {
  it("登入登出", () => {
    const { container, debug, getByTestId, asFragment } = render(<Button />);
    debug(); // This method is a shortcut for console.log(prettyDOM(element))
    const btnLogin = getByTestId("btn-login");
    const btnLogout = getByTestId("btn-logout");
    const content = getByTestId("content");

    fireEvent.click(btnLogin);
    expect(content.textContent).toBe("登入中");
    fireEvent.click(btnLogout);
    expect(content.textContent).toBe("未登入");
  });
});
