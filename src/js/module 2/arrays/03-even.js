// ЗАДАЧА
// сумма всех четных чисел в массиве
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// 1. переменная тотал
// let total = 0;

// // 2. перебрать массив
// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   console.log(number);

//   // 3. на каждой итерации проверить элемент на чётность
//   if (number % 2 === 0) {
//     // все чётные числа делятся на 2 без остатся (запись означает: number - имя переменной, %2 - проверка на деление без остатка, 0 - без остатка, 1 - с остатком)
//     console.log("Even");

//     // 4. если четное, суммировать к тотал
//     total += number;
//   }
// }

// console.log("Total:", total);

// // Решение через for...of:
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (const number of numbers) {
//   console.log(number);

//   if (number % 2 === 0) {
//     console.log(`${number} - even`);
//     total += number;
//   }
// }

// console.log("Total:", total);

// Решение через for...of:
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log("Skip", number);
    continue;
  }

  console.log(`Even ${number}`);
  total += number;
}

console.log("Total of evens:", total);
// КАК ПОСЧИТАТЬ ОТДЕЛЬНО ЧЕТНЫЕ И НЕЧЕТНЫЕ?
