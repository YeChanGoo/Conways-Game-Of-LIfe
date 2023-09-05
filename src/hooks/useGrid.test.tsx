import { renderHook, act } from "@testing-library/react";
import useGrid from "./useGrid";

describe("useGrid Hook", () => {
  // Test to see if it initializes with default values
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useGrid(3, 3));

    expect(result.current.grid).toHaveLength(3);
    expect(result.current.grid[0]).toHaveLength(3);
    expect(result.current.start).toBe(false);
  });

  // Test to see if the hook generates a random grid with both 0s or 1s
  it("should generate a random grid", () => {
    const { result } = renderHook(() => useGrid(3, 3));

    act(() => {
      result.current.randomGrid();
    });

    const hasZero = result.current.grid.flat().some((cell) => cell === 0);
    const hasOne = result.current.grid.flat().some((cell) => cell === 1);

    expect(hasZero || hasOne).toBe(true);
  });

  // Test to see if the hook clears the grid and resets the start value
  it("should clear the grid", () => {
    const { result } = renderHook(() => useGrid(3, 3));

    act(() => {
      result.current.toggleCell(0, 0);
      result.current.toggleCell(1, 1);
      result.current.clearGrid();
    });

    expect(result.current.grid.flat()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(result.current.start).toBe(false);
  });

  // Test to see if the hook can start and stop the simulation
  it("should start and stop the simulation", () => {
    const { result } = renderHook(() => useGrid(3, 3));

    act(() => {
      result.current.startWithRandomGrid();
    });

    expect(result.current.start).toBe(true);

    act(() => {
      result.current.startWithRandomGrid();
    });

    expect(result.current.start).toBe(false);
  });

  // Test to see if toggling a cell's value between 0 and 1
  it("should toggle a cell value", () => {
    const { result } = renderHook(() => useGrid(3, 3));

    act(() => {
      result.current.toggleCell(0, 0);
    });

    expect(result.current.grid[0][0]).toBe(1);

    act(() => {
      result.current.toggleCell(0, 0);
    });

    expect(result.current.grid[0][0]).toBe(0);
  });

  // Test to see if start and stop works
  it("should start and stop simulation", () => {
    const { result } = renderHook(() => useGrid(3, 3));

    act(() => {
      result.current.startWithRandomGrid();
    });

    expect(result.current.start).toBe(true);

    act(() => {
      result.current.startWithRandomGrid();
    });

    expect(result.current.start).toBe(false);
  });

  // Test to see if it correctly computes the next generation of the grid
  it("should compute next generation", () => {
    const { result } = renderHook(() => useGrid(3, 3));

    act(() => {
      result.current.toggleCell(0, 1);
      result.current.toggleCell(1, 1);
      result.current.toggleCell(2, 1);
      result.current.computeNextGeneration();
    });

    expect(result.current.grid[1][0]).toBe(1);
    expect(result.current.grid[1][1]).toBe(1);
    expect(result.current.grid[1][2]).toBe(1);
  });

  // Test to see if the hook can increase and decrease speed
  it("should increase and decrease speed", () => {
    const { result } = renderHook(() => useGrid(3, 3));

    act(() => {
      result.current.increaseSpeed();
    });

    expect(result.current.speed).toBe(900);

    act(() => {
      result.current.decreaseSpeed();
    });

    expect(result.current.speed).toBe(1000);
  });
});
