// 05.08.2023...

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.skills = {
//   run: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// // user['premium'] = false;
// // or...
// const key = "premium";
// user["key"] = false;

// console.log(user); // {name: 'Mango', age: 20, hobby: 'skydiving', premium: true, mood: 'happy', key: false}

// for (const key in user) {
//   console.log(user[key]);
// }

// // const keys = Object.keys(user);
// // for (const key of keys) {
// //   console.log(user[key]);
// // }

// // console.log(keys);

// ===============================================

// OWN PRACTICE

// const one = {
//   first_number: 1,
//   second_number: 2,
//   fourth_number: 4,
// };

// // const three = {
// //   third_number: 3,
// // };

// // console.log(three);

// const three = Object.create(one);
// three.third_number = 3;

// // console.log(one.first_number);
// // console.log(one.second_number);
// // console.log(three.third_number);
// // console.log(one.fourth_number);

// // console.log(one.hasOwnProperty('first_number')); // true
// // console.log(one.hasOwnProperty('third_number')); // false

// for (const key in one) {
//   console.log(key);
//   console.log(one[key]);
// }

// // массив из КЛЮЧЕЙ СОБСТВЕННЫХ свойств
// const keys = Object.keys(one);
// // console.log(keys);

// // массив из ЗНАЧЕНИЙ СОБСТВЕННЫХ свойств
// const values = Object.values(one);
// // console.log(values);

// // массив из ключей И значений свойств
// const entries = Object.entries(one);
// // console.log(entries);

// let total = 0;
// for (const value of values) {
//   total += value;
// }

// console.log(total);

// ===============================================

// const cars = {
//   first: 'lexus',
//   second: 'bmw',
//   third: 'chevrolet',
// };

// // console.log(cars.first);

// const cars2 = Object.create(cars);
// cars2.fourth = 'ferrari';

// // console.log(cars2.fourth);

// // console.log(cars.hasOwnProperty('first')); // true
// // console.log(cars.hasOwnProperty('fourth')); // false
// // console.log(cars2.hasOwnProperty('fourth')); // true
// // console.log(cars2.hasOwnProperty('second')); // false

// for (const key in cars) {
//   console.log(cars[key]);
// }

// const keys = Object.keys(cars);
// const values = Object.values(cars);

// console.log('keys:', keys); // array of keys
// console.log('values:', values); // array of values

// const entries = Object.entries(cars);
// console.log('entries:', entries); // array of keys & values

// ===============================================

// const girls = {
//   brunette: 'sexy',
//   blonde: 'beauty',
// };

// // console.log(girls.brunette);
// girls.redhead = 'crazy';

// // console.log(girls.redhead);

// const girls2 = Object.create(girls);
// girls2.skinhead = 'don`t like';
// // console.log(girls2.skinhead);

// // console.log(girls.hasOwnProperty('brunette')); // true
// // console.log(girls.hasOwnProperty('skinhead')); // false
// // console.log(girls2.hasOwnProperty('skinhead')); // true

// // console.log(girls.hasOwnProperty('sexy')); // false

// for (const key in girls) {
//   // console.log(key); // brunette blonde redhead
//   // console.log(girls[key]); // sexy beauty crazy
// }

// const keys = Object.keys(girls);
// const values = Object.values(girls);

// console.log(keys); // array of keys
// console.log(values); // array of values

// const entries = Object.entries(girls);
// console.log(entries); // array of keys & values

// ===============================================

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смешного человека',
//     author: 'Федор Достоевский',
//     rating: 7.75,
//   },
// ];

// // перебор массива
// // for (const book of books) {
// //   console.log(book); // array
// //   console.log(book.title); // array of titles
// //   console.log(book.author); // array of authors
// //   console.log(book.rating); // array of ratings
// // }

// // названия всех книг
// const bookNames = [];

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
//   bookNames.push(book.title);
// }

// console.log(bookNames); // array of names
// console.log(totalRating);

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

// ===============================================

// const girls = [
//   {
//     name: "Olena",
//     secondName: "Ricci",
//     rating: 10,
//   },

//   {
//     name: "Oksana",
//     secondName: "Nova",
//     rating: 9.99,
//   },

//   {
//     name: "Marina",
//     secondName: "Puma",
//     rating: 9.98,
//   },

//   {
//     name: "Eugenia",
//     secondName: "Astra",
//     rating: 9.97,
//   },
// ];

// const girlNames = [];
// const girlSecondNames = [];
// const girlRatings = [];

// let totalRating = 0;

// for (const girl of girls) {
//   girlNames.push(girl.name);
//   girlSecondNames.push(girl.secondName);
//   girlRatings.push(girl.rating);

//   totalRating += girl.rating;
// }

// console.log(girlNames); // array of names
// console.log(girlSecondNames); // array of secondnames
// console.log(girlRatings); // array of ratings

// console.log(totalRating);
// const averageRating = totalRating / girls.length;
// console.log(averageRating.toFixed(3));

// ===============================================
