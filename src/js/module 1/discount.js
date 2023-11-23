// // Моё решение
// const totalSpent = 100;
// let payment = 500;
// let discount = 0;

// // 100 - 1000 - bronze - 2%
// // 1000 - 5000 - silver - 5%
// // >5000 - gold - 10%
// // <100 - not a partner - 0%

// if (totalSpent >= 100 && totalSpent < 1000) {
//   discount = payment * 0.02;
//   console.log("Brozne partner! Your discount is 2%");
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   discount = payment * 0.05;
//   console.log("Silver partner! Your discount is 5%");
// } else if (totalSpent >= 5000) {
//   discount = payment * 0.1;
//   console.log("Gold partner! Your dicount is 10%");
// } else {
//   console.log("You are not a partner");
// }

// console.log(
//   `Making an order of ${payment} credits with a ${discount * 100}% discount`
// );

// Решение Репеты
let totalSpent = 2000;
let payment = 500;
let discount = 0;

if (totalSpent < 100) {
  console.log("You are not a partner");
} else if (totalSpent >= 100 && totalSpent < 1000) {
  discount = 0.02;
  console.log("Brozne partner! Your discount is 2%");
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log("Silver partner! Your discount is 5%");
  discount = 0.05;
} else {
  console.log("Gold partner! Your dicount is 10%");
  discount = 0.1;
}

payment -= payment * discount;

console.log(
  `Making an order of ${payment} credits with a ${discount * 100}% discount`
);

totalSpent += payment;
console.log(`Total amount spent in the store ${totalSpent}`);

// РАСШИРИТЬ ЗАДАЧУ (ВЕБИНАР)
