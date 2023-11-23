// когда не знаем, сколько будет аргументов заранее
// псевдомассив arguments (не настоящий, нет всех методов массива)
// arguments можно перебрать через фор

// const fn = function () {
//   // arguments - зарезервированный псевдомассив
//   console.log(arguments);

//   for (const arg of arguments) {
//     console.log(arg);
//   }

//   //   преобразование псевдомассива arguments в полноценный массив
//   const args = Array.from(arguments);
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// // второй метод (операция rest):
// // ... это новый синтаксис Array.from(arguments)
// // всё, что до args выводится в строку, остальное - в массив
// слово args - проивзольное
// const fn = function (a, b, c, ...args) {
//   console.log(`${a}, ${b}, ${c}`);
//   console.log(args);
// };

// fn("hello", 1, 2, 3);
// fn("aloha", 1, 2, 3, 4, 5);
// fn("hi", 1, 2, 3, 4, 5, 6, 7);

// // ЗАДАЧА
// // СЛОЖЕНИЕ ПРОИЗВОЛЬНОГО КОЛИЧЕСТВА АРГУМЕНТОВ (ЧИСЕЛ)
// // не знаем сколько придёт аргументов по количеству или все аргументы собрать в массив
// // операция ...rest берет несколько разрозненных элементов и собирает их в массив
// const add = function (...args) {
//   console.log(args);

//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

// ЗАДАЧА
const filterNumbers = function (array, ...args) {
  console.log(array);
  console.log(args);

  const unique = [];

  for (const element of array) {
    if (args.includes(element)) {
      unique.push(element);
      console.log(`${element} есть везде`);
    }
  }

  return unique;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// array - отдельный массив, ...args - остальные собраны в отдельный массив
// перебираем массив
// если args содержит элемент массива array, этот элемент собирается в массив unique
