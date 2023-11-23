// Цикл for
// конструкция, которая позволяет повторять один и тот же кусок кода
// for (инициализация (счётчик); условие прекращение цикла (как только условие приводится к false, цикл прекращается и выполнение передаётся за цикл ); пост - выражение) {
// тело цикла (когда оно на каждой итерации 1 раз выполнено, то выполняется пост-выражение)
// }

// !!!УСЛОВИЕ ДОЛЖНО ВОЗВРАЩАТЬ true, иначе зависнет вкладка браузера!!!

// 0-100 с шагом 1
// 5-100 с шагом 5
// и обратно

// TASK
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// for (let i = 1; i < employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );
//   console.log(`Salary of employee ${i} - ${salary} `);

//   totalSalary += salary;
// }

// console.log("totalSalary: ", totalSalary);

// console.log("");

// // TASK 2
// // console.log(27 % 3);
// // деление без остатка

// const min = 0;
// const max = 12;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   console.log(i);

//   if (i % 2 === 0) {
//     console.log("Четное", i);
//     total += i;
//   }
// }

// console.log('total:', total);

// тоже самое с директивой continue:
const min = 0;
const max = 5;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    console.log("Не четное:", i);
    continue;
  }

  console.log("Четное:", i);
  total += i;
}

console.log("сумма всех четных:", total);

console.log("");

// НАПОМИНАНИЕ ПРО ОТЛИЧИЯ МЕЖДУ СТРОГИМ РАВЕНСТВОМ И неСТРОГИМ РАВЕНСТВОМ
// const sum = 5 !== 5;
// console.log(sum);
