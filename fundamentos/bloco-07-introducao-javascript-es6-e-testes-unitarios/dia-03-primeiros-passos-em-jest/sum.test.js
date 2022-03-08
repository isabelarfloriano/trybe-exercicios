const {sum, myRemove} = require('./sum');

describe('The function sum', () => {
  it ('adds 4 + 5 to equal 9', () => {
    expect (sum (4,5)).toBe (9);
  })
  it ('adds 0 + 0 to equal 0', () => {
    expect (sum (0,0)).toBe (0);
  })
})

describe('The function myRemove', () => {
  it ('must return a copy of array without the repeated element', () => {
    expect (myRemove ([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect (myRemove ([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect (myRemove ([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})