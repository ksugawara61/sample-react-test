import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(<Render />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getAllByRole("button")[0]).toBeInTheDocument();
    expect(screen.getAllByRole("button")[1]).toBeInTheDocument();
    expect(screen.getByText("Udemy")).toBeInTheDocument();
    expect(screen.queryByText("Udemyyyy")).toBeNull();
    expect(screen.getByTestId("copyright")).toBeInTheDocument();
  });
});
