function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
// console.log(sum(4,"5"));

function myRemove(arr, item) {
  const copy = []; 
  for (let index = 0; index < arr.length; index += 1) {
   if (item !== arr[index]) {
    copy.push(arr[index]);
   }
  }
  return copy;
}
// console.log(myRemove([1, 2, 3, 4], 3))

module.exports = {sum, myRemove};