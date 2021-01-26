import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import Personalia from "./Personalia";

describe("tester personalia", () => {
  test("komponenten rendres", () => {
    render(<Personalia />);
    expect(screen.getByText("person")).toBeInTheDocument();
  });
});
