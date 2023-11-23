// в одном файле не может быть одинковых имен переменных
const a = 0;
console.log(a);

const b = 1;
console.log(b);

console.log(" ");

console.log("some variables:");
// const:
// 1. обязательно инициализировать значением
// 2. нельзя записать другое значение после инициализации

// number
const age = 10;
const totalPrice = 200.74;
console.log("price:", totalPrice);

// string
const userName = "Chelsey";
const message = "Welcome";

// boolean
const isOpen = true;
const shouldConfirm = false;

console.log(shouldConfirm);
console.log("5"); //string;
console.log(5); //number;

// let:
// 1. не обязательно должна быть инициализирована
// 2. можно переопределять (записывать новые значения)
let x;
x = 50;
x = 40;

console.log(x); // 40

console.log(" ");
console.log("оператор typeof:");
// typeof: проверяет тип переменной
const type = typeof "string";
console.log(type);
const anotherType = typeof 5;
console.log(anotherType);
const otherType = typeof true;
console.log(otherType);

console.log(" ");

// alert('Hide alert');
// выводит сообщение с кнопкой ОК
