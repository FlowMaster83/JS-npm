// скрипт, который проверяет вхождение числа в отрезок обозначеный х1 и х2.

// // логическое И (&&) - для проверки множественных условий
// console.log(5 && false && 7 && 'hello');
// // (слева - направо) возвращается первое, что проеобразовуется к false или последний операнд, если в выражении нету false (запинается на лжи)
const x1 = 10;
const x2 = 30;
const number = 15;

const comparison1 = number < x1;
const comparison2 = number > x2;

console.log(`${number} is before ${x1}`, comparison1);
console.log(`${number} is after ${x2}`, comparison2);

const res1 = number > x1 && number < x2;
console.log(`${number} is after ${x1}`, res1);

// // логическое ИЛИ (||)
// console.log(false || 3 ||7 || 9) // 3
// // запинается на первой правде слева-направо или возвращает последний операнд, если правды нет
const res2 = number < x1 || number > x2;
console.log(`${number} before ${x1} or after ${x2}`, res2);
// 15 меньше 10 или 15 больше 30