// ===========
// ===============================================
// SYNOPSYS

// Необходимо усвоить всего одно правило для определения this - значение контекста внутри функции (не стрелочной) определятся НЕ в момент ее создания, а в МОМЕНТ ВЫЗОВА.
// То есть значение this определяется тем, как вызывается функция, а не где она была объявлена.

// 'use strict';

// function foo() {
//   console.log(this);
// }

// const obj = {
//   logCtx: foo,
// };

// obj.logCtx();

// ===========

// const petya = {
//   username: 'Petya',
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showName();

// ===========

// const bookShelf = {
//   authors: ['Бернард Корнуэлл', 'Роберт Шекли'],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли"]
// bookShelf.addAuthor('Ли Танит');
// console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли", "Ли Танит"]

// ===========

// // Если функция была вызвана как метод объекта, то контекст будет ссылаться на объект, частью которого является метод.
// const rapArtists = {
//   name: 'Eminem',
//   genre: 'Hip Hop',
//   // функция - метод объекта
//   otherz() {
//     // контекст ссылается на объект (this ссылается на rapArtist)
//     console.log(this.genre);
//   },
//   showName() {
//     console.log(this.name);
//   },
// };

// rapArtists.otherz(); // Hip Hop
// rapArtists.showName(); // Eminem

// ===========

// function showThis() {
//   console.log('this in showThis: ', this);
// }

// showThis();

// const user = {
//   username: 'Mango',
// };

// console.log(user);

// user.showContext = showThis; // !!! не вызов функции, а присваивание (нет круглых скобок) !!!
// console.log(user); // объект с двумя свойствами: {username: 'Mango', showContext: ƒ}

// ===============================================
// this in callbacks

// При передаче методов объекта как колбэк-функций, контекст не сохраняется.
// Колбэк это ссылка на метод, которая присваивается как значение параметра, вызываемого без объекта.

// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };

//   function makeMessage(callback) {
//     // callback() это вызов метода getFullName без объекта
//     console.log(`Обрабатываем заявку от ${callback()}.`);
//   }

//   makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// ===============================================

// // this in arrows
// // Не имеют своего this.
// // Изменить значение this внутри стрелки после её объявления нельзя
// // Стрелочные функции также игнорируют наличие строгого режима

// const showThis = () => console.log('this in showThis: ', this);

// showThis(); // this in showThis: window

// const user = {
//   username: 'Mango',
// };
// user.showContext = showThis;

// user.showContext(); // this in showThis: window

// ===============================================


