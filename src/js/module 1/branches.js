// ветвления
if (5 > 3) {
  console.log("qweqwe");
}
console.log("next");

// если в первой части - true, то выполняется 1 часть, если false, то выполняется то, что после else
if (5 > 30) {
  console.log("x > y");
} else {
  console.log("x < y");
}

const salary = 1000;

if (salary < 500) {
  console.log("Level 1");
} else if (salary > 500 && salary < 1500) {
  console.log("Level 2");
} else if (salary > 1500 && salary < 3000) {
  console.log("Level 3");
} else {
  console.log("Level 4");
}

console.log("");

// тернарный оператор
const balance = 1000;
const message = balance >= 0 ? "positive balance" : "negative balance";
console.log(message);

console.log("");

// Блочная область видимости переменных
if (true) {
  const a = 5;
  console.log(a); // 5 (переменнная в области видимости if)
}

// console.log(a); // ошибка, переменная не объявлена
