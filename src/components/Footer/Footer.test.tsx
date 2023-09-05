import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer Component", () => {
  // Mock functions for props
  const mockOnRandom = jest.fn();
  const mockComputeNextGeneration = jest.fn();
  const mockIncreaseSpeed = jest.fn();
  const mockDecreaseSpeed = jest.fn();
  const mockOnStartWithRandomGrid = jest.fn();
  const mockOnClear = jest.fn();

  // Default props
  const defaultProps = {
    onRandom: mockOnRandom,
    computeNextGeneration: mockComputeNextGeneration,
    start: false,
    increaseSpeed: mockIncreaseSpeed,
    decreaseSpeed: mockDecreaseSpeed,
    speed: 1000,
    onStartWithRandomGrid: mockOnStartWithRandomGrid,
    onClear: mockOnClear,
  };

  // Test to see if onRandom function is called with button click
  it("calls the onRandom function when Random button is clicked", () => {
    const { getByText } = render(<Footer {...defaultProps} />);
    const randomButton = getByText("Random");

    fireEvent.click(randomButton);

    expect(mockOnRandom).toHaveBeenCalled();
  });

  // Test to see if onClear function is called with button click
  it("calls the onClear function when Clear Board button is clicked", () => {
    const { getByText } = render(<Footer {...defaultProps} />);
    const clearButton = getByText("Clear Board");

    fireEvent.click(clearButton);

    expect(mockOnClear).toHaveBeenCalled();
  });

  // Test to see if onStartWithRandomGrid function is called with button click
  it("calls the onStartWithRandomGrid function when Start/Stop button is clicked", () => {
    const { getByText } = render(<Footer {...defaultProps} />);
    const startStopButton = getByText("Start");

    fireEvent.click(startStopButton);

    expect(mockOnStartWithRandomGrid).toHaveBeenCalled();
  });

  // Test to see if increaseSpeed function is called with button click
  it("calls the increaseSpeed function when Increase Speed button is clicked", () => {
    const { getByText } = render(<Footer {...defaultProps} />);
    const increaseSpeedButton = getByText("Increase Speed");

    fireEvent.click(increaseSpeedButton);

    expect(mockIncreaseSpeed).toHaveBeenCalled();
  });

  // Test to see if decreaseSpeed function is called with button click
  it("calls the decreaseSpeed function when Decrease Speed button is clicked", () => {
    const { getByText } = render(<Footer {...defaultProps} />);
    const decreaseSpeedButton = getByText("Decrease Speed");

    fireEvent.click(decreaseSpeedButton);

    expect(mockDecreaseSpeed).toHaveBeenCalled();
  });

  // Test to see if correct speed is in the paragraph
  it("displays the correct speed value in the paragraph", () => {
    const { getByText } = render(<Footer {...defaultProps} />);
    const speedParagraph = getByText(
      `Speed: ${(1000 / defaultProps.speed).toFixed(2)} updates per second`
    );

    expect(speedParagraph).toBeInTheDocument();
  });
});
