import { render, fireEvent } from "@testing-library/react";
import Grid from "./Grid";

describe("Grid Component", () => {
  // Mock function
  const mockToggleCell = jest.fn();

  // Mock grid data
  const mockGrid = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ];

  // Test to see if it renders with correct cell classes
  it("renders the grid with correct cell classes", () => {
    // Render Grid component with mock grid and mock toggleCell
    const { container } = render(
      <Grid grid={mockGrid} toggleCell={mockToggleCell} />
    );

    // Get cell elements
    const cellElements = container.querySelectorAll(".cell");
    expect(cellElements.length).toBe(9);

    // Check for correct cell classes based on mock data
    expect(cellElements[0].classList).toContain("dead");
    expect(cellElements[1].classList).toContain("alive");
  });

  // Test to see for clicks on a cell
  it("calls toggleCell when a cell is clicked", () => {
    // Render Grid component with mock grid and mock toggleCell
    const { container } = render(
      <Grid grid={mockGrid} toggleCell={mockToggleCell} />
    );

    // Get all cell elements
    const cellElements = container.querySelectorAll(".cell");

    // Click the first cell and check to see if called with correct location
    fireEvent.click(cellElements[0]);
    expect(mockToggleCell).toHaveBeenCalledWith(0, 0);

    // Click the second cell and check to see if called with correct location
    fireEvent.click(cellElements[1]);
    expect(mockToggleCell).toHaveBeenCalledWith(0, 1);
  });
});
