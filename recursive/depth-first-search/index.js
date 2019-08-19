import { testCases } from "./tests";

const FOOD = "F";
const HOME = "H";
const CHARLIE = "C";
const OPEN = "O";

class DFS {
  constructor(inputArray) {
    this.input = inputArray;
    this.validPaths = [];
    this.findShortestPath();
  }

  findShortestPath() {
    this.search(this.findHome(), [], this.countFood());
    this.printResults();
  }

  /**
   * Find paths that collect all food and terminate at Charlie.
   * @param {Array} point current coordinates
   * @param {Array} path visited points
   * @param {Number} foodCount food left to find
   */
  search(point, path, foodCount) {
    const currentSpot = this.getValue(point);
    const nextPath = [point.toString(), ...path];

    // Found Charlie & No food left
    if (currentSpot === CHARLIE && foodCount === 0) {
      this.validPaths.push(nextPath);
      return;
    } else {
      // Search Neighbors
      const nextFood = currentSpot === FOOD ? foodCount - 1 : foodCount;
      this.getNeighbors(point, nextPath).forEach(p =>
        this.search(p, nextPath, nextFood)
      );
    }
  }

  /** Helpers */

  // Occurrences of FOOD
  countFood() {
    return this.input.reduce(
      (sum, row) => sum + row.filter(x => x === FOOD).length,
      0
    );
  }

  // Coordinates of HOME
  findHome() {
    let found = -1;

    for (let row = 0; row < this.input.length - 1; row++) {
      found = this.input[row].indexOf(HOME);
      if (found > -1) return [row, found];
    }

    return [-1, -1];
  }

  // Returns value at point of input array
  getValue(point) {
    try {
      return this.input[point[0]][point[1]];
    } catch (e) {
      return null;
    }
  }

  isSpotValid(val) {
    return [FOOD, HOME, CHARLIE, OPEN].includes(val);
  }

  // Returns a list of VALID, UNVISITED neighbors
  getNeighbors(point, nextPath = []) {
    const [row, column] = point;

    const left = [row, column - 1];
    const up = [row - 1, column];
    const right = [row, column + 1];
    const down = [row + 1, column];

    const validNeighbors = [left, up, right, down]
      .filter(point => this.isSpotValid(this.getValue(point))) // keep valid spots
      .filter(point => !nextPath.includes(point.toString())); // skip visited spots

    return validNeighbors;
  }

  printResults() {
    console.log("Input\n", this.input);
    this.validPaths.sort((x, y) => x.length - y.length);
    if (this.validPaths[0]) {
      console.log("Steps:", this.validPaths[0].length - 1);
      console.log("Path:\n", this.validPaths[0]);
    } else {
      console.log("Steps: ∞");
      console.log("Path: none");
    }
  }
}

// Run tests
for (let test of testCases) {
  new DFS(test);
  console.log("\n\n");
}
