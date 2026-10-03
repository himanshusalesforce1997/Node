// const roundTo = function (n, step) {
//   let remainder = n % step;
//   return n - remainder + (remainder < step / 2 ? 0 : step);
// };

// console.log(roundTo(26, 10));

//------------------

//Closure

function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

//-------------------------

function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10
