// функции

// // declaration (МОЖНО вызывать до объявления самой функции)
// console.log(abc('David', 26));

// function abc(name, number) {
//   return `${name} is ${number}`;
// }

// // expression (НЕЛЬЗЯ вызывать ДО объявления самой функции)
// const boo = function (a, b) {
//   return a + b;
// };

// console.log(boo(2, 7));

// // arrow (НЕЛЬЗЯ вызывать ДО объявления самой функции)
// простой синтаксис (используется в колбеках)
// колбек не нуждается в названии
// неявный возврат, если действие максимально простое (одна строчка)
() => {};

// const abc = (name, number) => `${name} is ${number}`;
// console.log(abc('David', 26));

// const foo = () => 'Mango';
// console.log(foo());

// ===============================================

// // переписать на стрелки
// // function foo(callback) {
// //   callback(10);
// // }
// const foo = (callback) => callback(10);

// // function logger(value) {
// //   console.log(value);
// // }
// const logger = (value) => console.log(value);
// foo(logger); // 10

// ===============================================
// CALLBACKS

// function add(a, b) {
//   return a + b;
// }

// function divide(a, b) {
//   return a / b;
// }

// function calculate(x, y, operation) {
//   return operation(x, y);
// }

// console.log(calculate(2, 2, add));
// console.log(calculate(2, 2, divide));

// const add = (a, b) => a + b;
// const divide = (a, b) => a / b;
// const calculate = (x, y, operation) => operation(x, y);

// const resultAdd = calculate(2, 2, add);
// const resulrDivide = calculate(2, 2, divide);

// console.log(resultAdd); // 4
// console.log(resulrDivide); // 1

// ===========

// function foo(a, b) {
//   console.log(a, b);
// }

// console.log(foo); // функция
// foo(5, 10); // 5 10

// function foo(callback) {
//   console.log('callback', callback);
//   callback(24);
// } // функция высшего порядка, которая принимает другую функцию, как параметр.

// function logger(value) {
//   console.log(value);
// }

// console.log('logger', logger);

// // logger становится параметром callback в функции foo
// foo(logger); // 24

// ===========

// function foo(sayHello) {
//   sayHello(25);
// }

// function logger() {
//   console.log('Hello');
// }

// foo(logger); // Hello

// ===========

const arr = [2, 6, 1, 7, 3];

// 3 однотипных действия со сменой оператора:

// function add() {
//   let total = arr[0]; // 2 (нулевой элемент массива - 2)

//   //доступ к каждому элементу массива через цикл for:
//   for (let i = 1; i < arr.length; i += 1) {
//     total += arr[i];
//   }
//   return total;
// }

// console.log(add(arr)); // 0+2+6+1+7+3=19

// function mul() {
//   let total = arr[0]; // 2 (нулевой элемент массива - 2)

//   //доступ к каждому элементу массива через цикл for:
//   for (let i = 1; i < arr.length; i += 1) {
//     total *= arr[i];
//   }
//   return total;
// }

// console.log(mul(arr)); // 2*6*1*7*3=252

// function div() {
//     let total = arr[0]; // 2 (нулевой элемент массива - 2)

//     //доступ к каждому элементу массива через цикл for:
//     for (let i = 1; i < arr.length; i += 1) {
//       total /= arr[i];
//     }
//     return total;
//   }

//   console.log(div(arr)); // 0.015873015873015872

// чтобы не писать 3 однотипных действия со сменой оператора пишем 1 колбек-функцию
// function each(arr, callback) {
//   let total = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {
//     // в середине цикла на каждой итерации делаем вызов отложенной функции (callback) и в итоге избегаем привязки к одной функции
//     total = callback(total, arr[i]);
//   }
//   return total;
// }

// const add = (first, second) => first + second;
// const mul = (first, second) => first * second;
// const div = (first, second) => first / second;

// // второй аргумент при каждом консоле (add, mul, div) принимает callback
// console.log(each(arr, add)); // 19
// console.log(each(arr, mul)); // 252
// console.log(each(arr, div)); // 0.015873015873015872

// ===============================================

// OWN PRACTICE
// function returnCallback(well) {
//   well();
// }

// function newClass() {
//   console.log("I hope I will learn this f*cking callbacks");
// }

// returnCallback(newClass);

// function add(callback) {
//   callback();
// }

// function anotherAdd() {
//   console.log("Yes, we did it");
// }

// add(anotherAdd);

// ===========

// function add(x, y) {
//   return x + y;
// }

// function divide(x, y) {
//   return x / y;
// }

// function result(x, y, calculate) {
//   return calculate(x, y);
// }

// console.log(result(2, 1, add));
// console.log(result(2, 1, divide));

// ===========

// function res(x, y, calculation) {
//   return calculation(x, y);
// }

// console.log(
//   res(2, 1, function anotherAdd(x, y) {
//     return x + y;
//   })
// );
// console.log(
//   res(2, 1, function anotherDivide(x, y) {
//     return x / y;
//   })
// );

// ===========

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     if (test(el)) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// const callback = function (value) {
//   return value >= 3;
// };

// const result = filter([1, 2, 3, 4, 5], callback);
// console.log(result);

// ===========

// // createProduct(obj, callback) - принимает объект товара без id, а также коллбек.
// // Функция создаёт объект товара, добавляя ему уникальный индентификатор в свойство id и вызывает коллбек, передавая ему созданный объект
// // logProduct(product) - коллбек, принимающий объект продукта и логирующий его в консоль
// // logTotalPrice(product) - коллбек, который принимает объект продукта и логирует общую стоимость товара в консоль

// // пишем функцию, которая принимает параметры - obj, callback
// const createProduct = (obj, callback) => {
//   //   // создаём переменную product, и присваиваем ей индентификатор
//   //   const product = {
//   //     id: Date.now(),
//   //     // распыляем объект через spread
//   //     ...obj,
//   //   };

//   // ===========

//   // создаём переменную product, и присваиваем ей индентификатор
//   // вызываем параметр callback, принимающий функцию
//   callback({
//     id: Date.now(),
//     // распыляем объект через spread
//     ...obj,
//   });
// };

// // функция, принимающая объект и выводящая в консоль name
// const logProduct = (obj) => console.log(`Product ${obj.name}`);

// // функция, которая логирует общую стоимость товара в консоль
// const logTotalPrice = ({ price, quantity }) =>
//   console.log(`Total price ${price * quantity}`);

// // вызов функции (объект, коллбек logProduct)
// createProduct(
//   {
//     name: '🍎',
//     price: 30,
//     quantity: 3,
//   },
//   logProduct
// );

// // вызов функции (объект, коллбек logTotalPrice)
// createProduct(
//   {
//     name: '🍎',
//     price: 33,
//     quantity: 3,
//   },
//   logTotalPrice
// );

// ===========

// const tooMuch = (first) => first();
// const notTooMuch = (second) => {
//   const a = second === 'second';
//   console.log(a); // false (why?)
// };

// tooMuch(notTooMuch);

// const test = (operation, newArg, qwe) => {
//   qwe();
//   return console.log('result of 2 + 3 =', operation + newArg);
// };

// test(2, 3, () => console.log(3));