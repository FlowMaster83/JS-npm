// // функции - структурирование больших программ, уменьшения повторения и изолирования кода
// // пример: 20 массивов перебрать через for (1 функция вместо 20 for)

// // функциональное выражение (обьявление функции и присвоение ее в переменную)
// // название функции - это как правило глагол
// // первые скобки для параметров (локальные переменные внутри функции), при вызове - аргументы.
// const add = function (x, y) {
//   const result = x + y;

//   return result; // возврат значения (ОБЯЗАТЕЛЬНО!!!)
// };

// console.log(add(5, 3));
// console.log(add(15, 30));
// console.log(add(1, 4));

// const fn = function (value) {
//   if (value < 50) {
//     return "Less than 50";
//   }
//   // без слова return происходит неявный возврат undefined (приводится к false)
//   return "More than 50";
//   // всегда возвращает одно значение (массив, объект, строку, буль и тд)
// };

// console.log("Result:", fn(10));

const fnA = function () {
  console.log("run function A");
  //   fnB();
};

const fnB = function () {
  console.log("run function B");
  //   fnC();
};

const fnC = function () {
  console.log("run function C");
};

fnA();
fnB();
fnC();

// стек вызовов - разобрать
