import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header Component", () => {
  // Test to see if it renders correctly
  it("renders the header with correct text", () => {
    // Render the Header component
    const { getByText } = render(<Header />);

    // Find the header by text
    const headerElement = getByText("Conway's Game Of Life");

    // Expect the element to be in the document
    expect(headerElement).toBeInTheDocument();
  });
});
