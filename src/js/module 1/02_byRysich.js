// const value = 7;

// if (value > 5) {
//   console.log('4 > 5');
// } else if (value > 6) {
//   console.log('4 > 6');
// } else if (value < 3) {
//   console.log('4 < 3');
// } else {
//   console.log('else');
// }

// const value = 7;

// // условие в скобках проверяется true или false
// if (value > 5) {
//   // если false, падаем в блок else
//   console.log('value > 5');
// } else if (value > 6) {
//   console.log('value > 5');
// } else if (value > 3) {
//   console.log('value > 3');
// } else {
//   console.log('else');
// }

// ===========

// const value2 = false;

// // правильная обработка шести false-значений
// if (value2) {
//   console.log(true);
// } else {
//   console.log('false');
// }

// ===========

// тернарный оператор

// let more = 'more';
// let less = 'less';

// const result = 7 > 6 ? more : less;
// console.log(result); // more

// const result2 = 5 > 6 ? more : less;
// console.log(result2); // less

// let result3;
// if (7 > 6) {
//   result3 = 'more';
// } else {
//   result3 = 'less';
// }

// console.log(result3); // more

// ===========

// особенности switch

// const value = 5;

// if (value === 1) {
//   console.log('one');
// } else if (value === 2) {
//   console.log('two');
// } else if (value === 5) {
//   console.log('Good result');
// } else {
//   console.log('default');
// }

// интерпретатор попадает сразу на срочку выполнения кода (дебаггер)
// используется ТОЛЬКО для строк или чисел
// не делать математических расчётов
// switch (value) {
//   case 1:
//     console.log('one');
//     break;
//   case 2:
//     console.log('two');
//     break;
//   case 5:
//     console.log('Good result');
//     break;
//   default:
//     console.log('default');
// }

// // без break все уловия будут выполнены - исключение блок default (надо прервать после выполнения условий)
// const a = 'name';
// switch (a) {
//   case 'age':
//     console.log('one');
//     break;
//   case 'name':
//     console.log('two');
//     break;
//   case 'city':
//     console.log('Good');
//     break;
//   default:
//     console.log('default');
// }

// ===========

// // Области видимости
// // глобальная, блочная {}, функциональная (var)

// const a = 15;
// if (true) {
//   console.log(a); // 15
// }

// if (true) {
//   const b = 22;
// }
// console.log(b); // undefined

// if (true) {
//   var b = 22;
// }
// console.log(b); // 22

// function foo() {
//   console.log(a);
//   var c = 22;
// }
// console.log(c); // c is not defined

// ===========

// PRACTICE
// перед началом интерпретации, браузер проходит сверху вниз по кодуи фиксирует все объявленные переменные
// ПЕРЕОПРЕДЕЛЕНИЕ переменной изнутри блочной области видимости
// let a = 15;

// if (true) {
//   a = 25;
// }

// console.log(a);

// ===========

// // глобальная область
// let a = 15;

// if (true) {
//   // блочная область
//   a = 25;
//   let a = 1;
//   console.log(a); // Cannot access 'a' before initialization
//   // блочная область
// }

// console.log(a); // 15
// // глоабальная область

// ===========

// // глобальная область
// let a = 15;

// if (true) {
//   // блочная область
//   let a = 1;
//   a = 25;
//   console.log(a); // 25
//   // блочная область
// }

// console.log(a); // 15
// // глоабальная область

// ===========

// // глобальная область
// let a = 10;

// if (true) {
//   // блочная область
//   let a = 15;
//   if (true) {
//     // блочная область
//     a = 25;
//     // блочная область
//   }
//   // блочная область
// }

// console.log(a); // 10
// // глобальная область

// ===========

// let b = 25;
// if (true) {
//   let a = 15;
//   b = 44;

//   if (true) {
//     a = 25;
//     b = 31;
//   }

//   a = 44;

//   console.log(b); // 31
// }

// console.log(a); // a is not defined

// ===========
// ЦИКЛЫ

// const str = 'hello world';

// for (let i = 0; i <= str.length - 1; i += 1) {
//   console.log(str[i]);
// }

// while() {}
// проверил и сделал
// const string = 'hello world';
// let i = 0;
// while (i < string.length) {
//   if (string[i] === 'w') {
//     console.log('yes');
//     break;
//   }
//   i += 1;
//   console.log('no', string[i]);
// }

// let i = 0;

// // do{} while()
// // проверил и сделал
// do {
//   if (string[i] === 'w') {
//     console.log('yes');
//     break;
//   }
//   i += 1;
//   console.log('no');
// } while (i < string.length);

// ===========

// const value = prompt('What`s the official title of JavaScript?');
// console.log(value);

// if (value === 'ECMAScript') {
//   alert('Yes, you`re Right');
// } else {
//   alert('Don`t you know? ECMAScript');
// }

// ===========

// const hours = 14;
// const minutes = 55;
// let timestring;

// if (minutes) {
//   console.log(`${hours}h ${minutes}m`);
// } else {
//   console.log(`${hours}h`);
// }

// ===========

// const userInput = Number(prompt('Insert a number'));

// // парное/непарное
// // console.log(userInput % 2 ? console.log('not paired') : console.log('paired'));

// if (!userInput) {
//   console.log('This is zero');
// } else if (userInput > 0) {
//   console.log('This is a positive number');
// } else {
//   console.log('This is a negative number');
// }

// ===========

// let a = 20;
// let b = 180;

// if (a > 100 && b > 100) {
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }

// ===========

// добавляем слэш
// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//   console.log((link += '/'));
// }

// ===========

// добавляем слэш и выводим в консоль, если содержит "my-site"
// let link = 'https://my-site.com.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }

// console.log(link);

// ===========

// // перепись на тернарный оператор
// let link = 'https://my-site.com.com/about';

// console.log(
//   !link.endsWith('/') && link.includes('my-site') ? (link += '/') : link
// );

// ===========

// меньше 17 - pending
// 17 - 24 - expires
// больше 24 - overdue

// const hours = 19;

// if (hours < 17) {
//   console.log('pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('expires');
// } else {
//   console.log('overdue');
// }

// ===========

// 0 - today
// 1 - tomorrow
// 2 - after tomorrow
// 3+ - date in future

// const dailyUntilDeadline = -1;

// if (!dailyUntilDeadline) {
//   console.log('today');
// } else if (dailyUntilDeadline === 1) {
//   console.log('tomorrow');
// } else if (dailyUntilDeadline === 2) {
//   console.log('after tomorrow');
// } else {
//   console.log('date in the future');
// }

// ===========

// // переписать на switch + минуосове значение
// const dailyUntilDeadline = -1;

// if (dailyUntilDeadline >= 0) {
//   switch (dailyUntilDeadline) {
//     case 0:
//       console.log('today');
//       break;

//     case 1:
//       console.log('tomorrow');
//       break;

//     case 2:
//       console.log('after tomorrow');
//       break;

//     default:
//       console.log('date in the future');
//   }
// } else {
//   console.log('You`re not in deadline');
// }

// ===========

// // вывести в консоль числа от минимального до максимального кратные 5
// const max = 100;
// const min = 20;

// for (let i = min; i >= min && i <= max; i += 1) {
//   if (!(i % 5)) {
//     console.log(i);
//   }
// }

// ===========

// спрашивать логин и пароль через prompt та логировать результат в консоль
// if admin - insert password
// if nothing or  escape - cancelled
// else - I don`t know you

// проверка пароля:
// if 'I am admin'  - 'Hello'
// else - 'Incorrect password'

// const login = prompt('Insert LOGIN');
// // console.log(login); // null - значение false

// if (!login) {
//   console.log('cancelled');
// } else if (login === 'admin') {
//   const password = prompt('Insert PASSWORD');

//   console.log(password === 'I am admin' ? 'Hello' : 'Incorrect password');
// } else {
//   console.log('Don`t know you');
// }
