const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log("Total:", total);

const calculate = function (items) {
  console.log(items);

  let total = 0;
  for (const item of items) {
    total += item;
  }
  return total;
};

const res1 = calculate([1, 2, 3]);
const res2 = calculate([100, 200, 300]);
const res3 = calculate([312, 414, 636]);

console.log(res1);
console.log(res2);
console.log(res3);

console.log(); // функция log объекта console
