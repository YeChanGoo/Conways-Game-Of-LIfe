import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component", () => {
  it("renders Header, Grid, and Footer components", () => {
    // Render the App component
    render(<App />);

    const header = screen.getByTestId("header-component");
    const grid = screen.getByTestId("grid-component");
    const footer = screen.getByTestId("footer-component");

    expect(header).toBeInTheDocument();
    expect(grid).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
