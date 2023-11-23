// // поиск самого маленького числа в массиве (при условии, что числа уникальные (не повторяются))
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// // аналогия: пример с монетами

// // монета, которую кладём перед собой
// let smallestNumber = numbers[0];

// // не изменяем монеты, нужно просто перебрать, по этому исп for...of
// // вытаскиваем 2 монетку:
// for (const number of numbers) {
//   // если монетка меньше, чем та, что перед нами лежит...
//   if (number < smallestNumber) {
//     smallestNumber = number; // то её записываем вместо той, которая перед нами лежит
//   }
// }
// // если больше, то код не пишем (выкинули монетку)
// console.log("smallest number is:", smallestNumber);

const findSmallestNumber = function (numbers) {
  let smallestNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }

  return smallestNumber;
};

console.log(findSmallestNumber([3, 8, 12, -2, 15]));
console.log(findSmallestNumber([100, 54, 8, 12, 47]));
console.log(findSmallestNumber([7, 21, 84, 15, 4]));
