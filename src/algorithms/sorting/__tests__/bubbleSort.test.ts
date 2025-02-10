import bubbleSort from "../bubbleSort";

describe("bubbleSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    const input = [64, 34, 25, 12, 22, 11, 90];
    const expected = [11, 12, 22, 25, 34, 64, 90];
    expect(bubbleSort(input)).toEqual(expected);
  });

  it("should handle an already sorted array", () => {
    const input = [1, 2, 3, 4, 5];
    expect(bubbleSort(input)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array in reverse order", () => {
    const input = [5, 4, 3, 2, 1];
    expect(bubbleSort(input)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an array with duplicate values", () => {
    const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const expected = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
    expect(bubbleSort(input)).toEqual(expected);
  });

  it("should handle an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should handle an array with one element", () => {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it("should handle an array with negative numbers", () => {
    const input = [-5, 3, -2, 0, -8, 4, -1];
    const expected = [-8, -5, -2, -1, 0, 3, 4];
    expect(bubbleSort(input)).toEqual(expected);
  });
});
