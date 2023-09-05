import { render } from "@testing-library/react";
import Grid from "./Grid";

describe("Grid Component", () => {
  // Mock function

  // Test if it renders with correct cell classes
  it("renders the grid with correct cell classes", () => {
    const { container } = render(<Grid />);
    const cellElements = container.querySelectorAll(".cell");
    expect(cellElements.length).toBe(2500); // Adjust based on grid size

    // Example checks for first two cells (update these based on your actual layout)
    expect(cellElements[0].classList).toContain("dead");
    expect(cellElements[1].classList).toContain("dead");
  });
});
