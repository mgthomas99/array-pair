
const expect = require("chai").expect;
const pair = require("./../dist/index").pair;

describe("pair", () => {
    it("Should pair `arr1` with `arr2`", () => {
        const arr1 = [1, 2, 3];
        const arr2 = ["A", "B", "C"];
        const paired = pair(arr1, arr2);

        const expected = [[1, "A"], [2, "B"], [3, "C"]];
        expect(paired).to.deep.equals(expected);
    });
});
