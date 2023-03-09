
const getSum = require('./1.js')
const arithmetic = require('./2.js');
const checkNumber = require('./3.js');


describe('getSum', () => {
  test('should return the sum of an array of numbers', () => {
    expect(getSum([1, 2, 3])).toBe(6)
    expect(getSum([-1, 0, 1])).toBe(0)
    expect(getSum([2.5, 3.7, 1.1])).toBeCloseTo(7.3)
  })

  test('works with arrays of length 1', () => {
    expect(getSum([5])).toBe(5)
    expect(getSum([-3])).toBe(-3)
    expect(getSum([0])).toBe(0)
  })
})


test( 'arithmetic should performs arithmetic operations based on the operator parameter and returns the result', () => {
    expect(arithmetic(5, 3, "add")).toBe(8)
    expect(arithmetic(5, 3, "subtract")).toBe(2)
    expect(arithmetic(5, 3, "multiply")).toBe(15)
    expect(arithmetic(5, 3, "divide")).toBe(1.6666666666666667)
    expect(arithmetic(5, 3, "modulus")).toBe("No such result")
  })

test( 'checkNumber should a boolean value indicating whether the number is even or no', () => {
    expect(checkNumber(5)).toBe(false)
    expect(checkNumber(9)).toBe(false)
    expect(checkNumber(10)).toBe(true)
    expect(checkNumber(40)).toBe(true)
    expect(checkNumber(1)).toBe(false)
  })