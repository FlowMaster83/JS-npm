// ПРАКТИКА ПЕРЕБОРА МАССИВА

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);

// const lastIdx = friends.length - 1;

// for (let i = 0; i <= lastIdx; i += 1) {
//     friends[i]+= '-1';
// };

// // for...of - для перебора итерируемых объектов:
// for (const friend of friends) {
//   // в одиночном числе имя локальной переменной, то есть friend = friend[i] (в переменной не ссылка, а строка)
//   console.log(friend);
// }
// console.table(friends);

// for - если необходим доступ к индексам массива и/или необходимо изменить значение элемента массива
// for...of - если не нужен доступ к индексу или не нужно изменять элемент массива

// // TASK
// // ОБЩАЯ СУММА ПОКУПОК В МАГАЗИНЕ
// // 1. перебрать массив (на каждой итерации мы получим доступ к элементу)
// const cart = [54, 28, 105, 70, 92, 17, 120];
// console.log("Length:", cart.length);

// // 2. подсчитать общую сумму: создать переменную тотал до (!!!) цикла
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   // 3. каждый элемент приплюсовать к тотал
//   total += cart[i];
// }

// console.log("Total:", total);

// Упрощенный синтаксис решения
// не нужен доступ к счётчику и не нужно изменять cart[i]
const cart = [54, 28, 105, 70, 92, 17, 120];

let total = 0;

for (const value of cart) {
  total += value;
}

// console.log("Total:", total);

// в случае изменения элементов массива:
// допустим к каждому значению добавить 10%

const anotheCart = [54, 28, 105, 70, 92, 17, 120];

for (let i = 0; i < anotheCart.length; i += 1) {
  anotheCart[i] = Math.round(anotheCart[i] * 1.1);
}

console.log(anotheCart);

// просто доступ к элементу - фор оф
// перезаписать (эл массива изменяется) - фор
