// // индекс всегда на 1 меньше, чем длинна массива
// const array = [0, 'Hello', null, true, [1, 2, 3]];
// console.log(typeof array); // object - метод проверки (объект)
// console.log(Array.isArray(array)); // метод проверки массива (возвращает буль)

// // получение элемента массива
// const first = array[1];
// console.log(first); // string

// const last = array.length - 1;
// console.log(array.length); // 5 - длинна массива 5 элементов
// console.log(last); // 4 - длинна массива минус 1

// ===========

// пересмотреть весь массив (цикл)
// получение элемента массива (обращение к самому элементу - НЕ КОПИЯ)
// for (let i = 0; i < array.length; i += 1) {
//   console.log(i); // 0 1 2 3 4
//   console.log(array[i]); // 0 string null true [1, 2, 3]
// }

// // разгладить массив внутри массива
// for()
// for (let i = 0; i < array.length; i += 1) {
//   const item = array[i];
//   if (Array.isArray(item)) {
//     for (let j = 0; j < item.length; j += 1) {
//       console.log(item[j]);
//     }
//     continue;
//   }
//   console.log(array[i]);
// }

// ===========

// // for...of и for (разница)
// const array = [0, 'Hello', null, true, [1, 2, 3]];

// // просто перебрать массив
// // создаётся копия элемента, но доступ в массив не даётся (нужен for)
// for (let item of array) {
//   //   console.log(item);
//   if (typeof item === 'string') {
//     item = false;
//   }
// }

// console.log('for of', array);

// const array = [0, 'Hello', null, true, [1, 2, 3]];

// // for даёт доступ в массив (обращение по индексу) с целью замены элемента
// for (let i = 0; i < array.length; i += 1) {
//   if (typeof array[i] === 'string') {
//     array[i] = false;
//   }
// }

// console.log('for', array);

// ===========

// while - редко (замена for)
// const array = [0, 'Hello', null, true, [1, 2, 3]];

// // счетчик
// let i = 0;
// // цикл
// while (i < array.length) {
//   // как только элемент массива будет строка, заменить значение на буль
//   if (typeof array[i] === 'string') {
//     array[i] = false;
//   }
//   //   добавление к каждому элементу +1
//   i += 1;
// }

// console.log(array); // [0, false, null, true, Array(3)]

// ===========

// const cars = ['BMW', 'Toyota', 'Audi'];

// for (let i = 0; i < cars.length; i += 1) {
//   if (typeof cars[i] === 'string') {
//     cars[i] = 'hidden car';
//   }
// }

// console.log(cars); // ['hidden car', 'hidden car', 'hidden car']

// const cars2 = ['Ferrari', 'Fiat', 'Lexus'];

// for (let i = 0; i < cars2.length; i += 1) {
//   if (cars2[i] === 'Fiat') {
//     cars2[i] = 'Lanos';
//   }
// }

// console.log(cars2); // ['Ferrari', 'Lanos', 'Lexus']

// const result = [...cars, ...cars2];
// console.log(result); // ['hidden car', 'hidden car', 'hidden car', 'Ferrari', 'Lanos', 'Lexus']

// ===========

// примитивы (немутабельные типы данных)
// let value = 1;
// let test = value;
// value = 'hello';

// let number = 1;
// number += 15;
// console.log(number); // 16

// console.log('value', value);
// console.log('test', test);

// ===========

// // сложный тип данных (мутабельный тип данных)
// const array = [1, 2, 3, 4, 5];
// const copy = array;

// let array = [1, 2, 3];
// // array = 'string';
// array.push(4);
// // array.pop();
// // array.length = 10;
// console.log(array);

// console.log(copy === array); // true

// array.push(6, 7);

// console.log(array);
// console.log(copy);

// copy.push(8, 9);

// console.log(array);
// console.log(copy);

// ===========

// console.log(1 === 1); // true - сравнение по значению
// console.log('hello' === 'hello'); // true
// console.log([1, 2, 3] === [1, 2, 3]); // false - сравнение по ссылке

// ===========

// // something about break/continue
// // break - выходит из цикла, если дальше не имеет смысла итерировать массив
// const array = [3123, 32525, 6225, 252523];
// const find = 3123;
// let message = `your number ${find} not found`;

// for (const element of array) {
//   if (element === find) {
//     message = `found your number ${find}`;
//     break;
//   }
// }

// console.log(message);

// // continue - пропускает итерацию и идёт искать дальше
// const numbers = [12, 34, 15, 1, 45, 5, 432];
// const findNumber = 2;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < findNumber) {
//     continue;
//   }
//   console.log(`your number ${findNumber} is less than ${numbers[i]}`);
// }

// all methods
// https://learn.javascript.ru/array-methods
// some()
// reduce()
// every()
// map()
// flat()
// filter()
// forEach()
// findIndex()
// find()
// sort()
// concat()
// fill()
// includes()
// reverse()
// flatMap()
