// Метод Number.parseInt()
// возвращает численную часть строки (слева - направо до первого целого числа)
let elementWidth = "50.46"; //50
elementWidth = Number.parseInt(elementWidth);
// результат парса присвоен переменной, объявленой с помощью let
console.log("elementWidth:", elementWidth);

// Метод Number.parseFloat()
// возвращает численную часть строки с плавающей запятой (в JS - точка)
let elementHeight = "200.74px";
elementHeight = Number.parseFloat(elementHeight);
console.log("elementHeight:", elementHeight);

// Метод toFixed() - (используется в бухгалтерии)
// не деструктивный метод(не изменяет то, на чём вызывается)
// возвращает строку с количеством цифр после точки (кол-во указывается в скобках метода)
let salary = 1300.14125255;
console.log(salary.toFixed(6));
// приведение к числу методом Number
salary = Number(salary);
console.log(salary);

// Короткая запись
let salary2 = 1300.14125255;
// в методе Number() используется метод toFixed() через точку после имени переменной (обращение к переменной)
salary = Number(salary2.toFixed(2));
// это всё можно сразу в console.log
console.log(Number(salary2.toFixed(6)));

console.log("");
// приведение к числу
let quantity = "30";
let value = "This string cannot be reduced to a number";

console.log(Number(quantity));
console.log(String(value));

console.log("");
// Глобальный объект Math (находится в window)
// console.log(Math);
// Возведение в степень (функция pow())
const base = 2;
const power = 5;
console.log(base ** power);

// 1й аргумент - число для возведения, 2й - степень
const result = Math.pow(2, 3);
console.log(Math.pow(2, 3));
// аналог (оператор экспоненты)
console.log(2 ** 3); //2 в третьей степени

// извлечение корня
console.log(Math.sqrt(4));

// Задача
// шаг 1. попросить ввести число и записать его в переменную
let base2 = prompt("давай число"); //возвращает строку
base2 = Number(base2);

// шаг 2. ввести степень и сохранить в переменную
let power2 = prompt("давай степень");
power2 = Number(power);

// возвести введенные данные в степень и вывести
// const result = Math.pow(base ** power);
// либо
const result2 = base ** power;
console.log(result2);

// 1 - true, 0 - false

console.log('');

// // метод Math.random() - генерируется случайные числа от 0 до 1 при каждом обновлении страницы
// console.log(Math.random());

// в диапазоне
const max = 100;
const min = 1;

// Math.round - округление числа
const result3 = Math.round(Math.random() * (max - min) + min);
console.log(result2);
// СПРАВА - НАЛЕВО (сначала генерируется случайное число, которое потом округляется, которое присваиватся переменной result)
