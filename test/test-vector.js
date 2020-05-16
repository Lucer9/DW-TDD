const assert = require("assert");
const VectorCalculator = require('../app/VectorCalculator.js');

describe("VectorCalc", () => {
  describe("#sum", () => {
    let v1 = { x: 4, y: 2 };
    let v2 = { x: 1, y: -1 };
    it("should sum the vectors", () => {
      assert.deepEqual({ x: 5, y: 1 }, VectorCalculator.sum(v1, v2));
    });
  });

  describe("#sub", () => {
    let v1 = { x: 4, y: 2 };
    let v2 = { x: 1, y: -1 };
    it("should substract the vectors", () => {
      assert.deepEqual({ x: 3, y: 3 }, VectorCalculator.sub(v1, v2));
    });
  });

  describe("#scalar", () => {
    let v1 = { x: 4, y: 2 };
    let s = 5;
    it("should multiply the vector by a scalar", () => {
      assert.deepEqual({ x: 20, y: 10 }, VectorCalculator.scalar(v1, s));
    });
  });

  describe("#dot", () => {
    let v1 = { x: 4, y: 2 };
    let v2 = { x: 1, y: -1 };
    it("should calculate the dot product of the given vectors", () => {
      assert.deepEqual(2, VectorCalculator.dot(v1, v2));
    });
  });
});
