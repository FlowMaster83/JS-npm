// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// console.log(greet("Angelo"));

// // Вызываем функцию greet и выводим результат в консоль
// console.log(greet("Манго")); // Добро пожаловать Манго.

// // Выводим функцию greet в консоль не вызывая её
// console.log(greet); // ƒ greet() { return `Добро пожаловать ${name}.`; }

// ===============================================

// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// Мы передали ссылку на функцию greet как аргумент, поэтому она будет присвоена в параметр callback и вызвана внури функции registerGuest через круглые скобки. Имя параметра для колбэка может быть произвольным, главное помнить, что значением будет функция.

// ===============================================

// // функция (вызов функции можно производить до объявления самой функции)
// let result = feron(5, 6);

// function feron(x, y) {
//   return console.log(x + y);
//   console.log("Never, because return");
// }

// // функциональное выражение (вызов функции до объявления не работает)
// const feron2 = function (q, w) {
//   return q * w;
//   console.log("Never, because return");
// };

// let result2 = feron2(34, 65);
// console.log(result2);

// result2 = feron2(55, 66);
// console.log(result2);

// result2 = feron2(22, 52);
// console.log(result2);

// ===============================================

// // Доступ к списку всех аргументов можно получить при помощи специальной переменной arguments,
// // которая доступна только внутри функции и хранит все аргументы как псевдомассив.

// function foo() {
//   let newTotal = 0;

//   for (const argument of arguments) {
//     newTotal += argument;
//   }

//   return newTotal;
// }

// console.log(foo(25, 35, 45, 55));

// ===============================================

// // стрелочные функции
// // Обычное объявление функции
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// let result2 = classicAdd(2, 3, 4);
// console.log(result2);

// // Тоже самое как стрелочная функция
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// let result = arrowAdd(2, 3, 4);
// console.log(result);

// ==========
// const foo = (x, y, z) => {
//   console.log(x + y - z);
// };

// foo(2, 3, 4); // 1

// ===========
// const func = (r, t, y) => {
//   return console.log((r * t) / y);
// };

// const resultA = func(250, 5, 2); // 625
// console.log(resultA); // undefined

// function func2(c, v, b) {
//   return c + v + b;
// }

// const result = func2(250, 5, 2); // 257
// console.log(result);

// ===========

// const newFunc = (a, s, d) => {
//   return a + s * d;
// };

// console.log(newFunc(23, 53, 12)); // 659
// const res = newFunc(24, 54, 13);
// console.log(res);

// ===============================================

// // callback
// // обычная функция
// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// console.log(greet("Манго")); // Добро пожаловать Манго.
// console.log(greet); // ƒ greet() { return `Добро пожаловать ${name}.`; }

// ===========

// // Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// Мы передали ссылку на функцию greet как аргумент,
// поэтому она будет присвоена в параметр callback
// и вызвана внутри функции registerGuest через круглые скобки.

// ===========

// function firstPerson(name) {
//   return `Welcome, ${name}`;
// }

// function sayHello(name, person) {
//   console.log(`Welcome, ${name}`);
//   person(name);
// }

// sayHello('David', function firstPerson(name) {
//   return `Welcome, ${name}`;
// });

// при вызове функции передана ссылка на функцию firstPerson, как аргумент,
// по этому она будет присвоена параменту person

// Practice

// function showMsg(name, status, callback) {
//   if (callback && typeof callback === 'function') {
//     callback();
//   } else {
//     console.log(`Hello ${name}, your status is ${status}`);
//   }
// }

// showMsg('John', 'Admin', () => {
//   // console.log(`Hello message not supported`);
// });

// showMsg('John, "Admin');

// ===============================================

// // by Rysich
// const array = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];
// const array3 = [11, 22, 33, 44, 55];

// // hoisting
// // expression (функциональное выражение - присваивание функции к переменной)
// const some = function (something) {
//   for (let i = 0; i < something.length; i += 1) {
//     something[i] = something[i] * 2;
//   }

//   console.log(something);
// };

// some(array);
// some(array2);
// some(array3);

// ===========

// важен порядок - псевдомассив arguments (итерабельный объект)
// оболочка, в которой хранятся все элементы, которые мы передали
// function add() {
//   let sum = 0;

//   // приводим arguments в полноценный массив, чтобы применять методы
//   // const arr = Array.from(arguments);
//   const arr = [...arguments];
//   // console.log(arguments);
//   console.log(arr);

//   for (const value of arguments) {
//     sum += value;
//   }
// }

// add(1, 2, 3, 4, 5, 6);
// add(1, 2, 3, 4);
// add(1, 2, 3, 4, 5);

// ===========

// // about return - прерывает дальнейшее выполнение (возвращает 1 значение)
// function add() {
//   let sum = 0;
//   for (const value of arguments) {
//     sum += value;
//   }
//   return sum;
// }

// const response = add(1, 2, 3, 4, 5, 6);
// console.log(response);
// // add(1, 2, 3, 4);
// // add(1, 2, 3, 4, 5);

// ===========

// // паттерн раннего возврата
// // пройти по дебаггеру
// function largeNumber() {
//   let sum = 0;
//   for (const value of arguments) {
//     sum += value;
//     if (sum > 10) {
//       // если сумма больше 10, выйти из функции через return (вернуть true)
//       return true;
//     }
//   }
//   // если сумма меньше 10, вернуть false
//   return false;
// }

// const response = largeNumber(1, 2, 3);
// console.log(response); // false (1+2+3 = 6 < 10)
// console.log(largeNumber(1, 2, 3, 4, 5, 6, 7)); // true (1+2+3+4+5+6+7 = 28 > 10)

// ===========

// // параметры по умолчанию
// // если второго аргумента нет, приравниваем второй параметр к нулю (перезаписывается аргументом)
// function add(value, value1 = 0) {
//   console.log('value', value);
//   console.log('value1', value1);

//   return value + value1;
// }

// console.log(add(3, 4)); // 3 + 4 = 7
// console.log(add(5, 12)); // 5 + 12 = 17
// console.log(add(11)); // 11 + 0 = 11

// ===========

// области видимости:
// глобальная, локальная и функциональная (для var)

// let a = 10;

// function foo() {
//   // переопределние функции a
//   a = 15;
// }

// console.log(a); // 10 - нет вызова функции foo()

// let b = 10;

// function boo() {
//   let b = 15;
// }

// console.log(a); // 10

// let c = 10;

// function zoo() {
//   // переопределние функции a
//   let c = 15;
//   c = 45;
//   console.log(c);
// }

// zoo(); // 45

// console.log(c); // 10

// ===========

// const test = [1, 2, 3];

// function foo(arr) {
//   // удаляем один элемент массива, начиная с нулевого
//   arr.splice(0, 1);
// }

// foo(test);
// console.log(test); // [2, 3]

// // повторить присвоение по ссылке и по значению

// ===============================================

// // напоминание про метод splice
// const array = [1, 2, 3, 4, 5];
// console.log(array);

// const result = array.splice(0, 3);
// console.log(result); // [1, 2, 3]
// console.log(array); // [4, 5]

// ===============================================

// // call stack (LIFO)

// // если 100% знаем, сколько будет аргументов, столько объявляем параметров
// // если не знаем, использовать псевдомассив arguments

// // посчитать сумму чисел массива, записать в переменную и построить в строку
// function createString(name, year) {
//   // переменную создавать, если планируем использовать больше 1 раза
//   return `${name} years ${add(year)}`;
// }

// console.log(createString('Mango', [1, 2, 3, 4]));
// console.log(createString('Ivy', [2, 5, 2, 8]));

// function add(arr) {
//   let sum = 0;
//   for (const num of arr) {
//     sum += num;
//   }
//   return sum;
// }

// ===============================================

// // переполненный колстек
// function foo() {
//   boo();
// }

// foo();

// function boo() {
//   foo();
// }

// ===========

// // to array from string
// const string = 'Tottehnam, Arsenal Chelsea, Fulham, West Ham';
// const result = string.split(',');

// console.log(result);

// ===========

// // to number from string
// const stringNumber = '4';
// const res = Number(stringNumber);
// console.log(res);

// ===========

// function formatTime(minutes) {
//   // переводим часы в минуты
//   const hours = Math.floor(minutes / 60);
//   // делим количество минут на 60
//   minutes = minutes % 60;
//   // добавить в строчку нули через padStart()
//   return `${hours.toString().padStart(2, '0')} : ${minutes
//     .toString()
//     .padStart(2, '0')}`;
// }

// console.log(formatTime(70));
// console.log(formatTime(450));
// console.log(formatTime(1441));

// ===========

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(course) {
  if (courses.includes(course)) {
    return 'You are';
  }

  courses.push(course);
}

addCourse('Express');
console.log(courses);

// function removeCourse(course) {
//   if (courses.includes(course)) {
//     const idx = courses.indexOf(course);
//     courses.splice(idx, 1);

//     return;
//   }

//   return 'There is no course with that name';
// }

// Bitwise NOT
// console.log(!!~0);

// function removeCourse(course) {
//   const idx = courses.indexOf(course);
//   if (!!~idx) {
//     courses.splice(idx, 1);
//   }
//   return 'There is no course with that name';
// }

// removeCourse('React');
// console.log(removeCourse('Vue'));

function updateCourse(oldCourse, newCourse) {
  const idx = courses.indexOf(oldCourse);
  if (!!~idx) {
    courses.splice(idx, 1, newCourse);
    return;
  }

  return 'There is no course with that name';
}

updateCourse('Express', 'NestJS');
console.log(courses);

const test = ['a', 'b', 'c'];
const idx = test.indexOf('q');
if (idx) {
  console.log('YES');
} else {
  console.log('NO');
}

console.log(idx);
