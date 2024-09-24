const { sum } = require("../sum")


test("Should return the sum of two numbers", () => {
    const result = sum(10, 10);

    expect(result).toBe(20)
})