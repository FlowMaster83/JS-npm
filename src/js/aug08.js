// 08.08.2023

// ===============================================

// const days = {
//   monday: 1,
//   tuesday: 2,
//   wednesday: 3,
// };

// const times = {
//   first: "9:30",
// };

// const array = [];
// array.push(days);
// array.push(times);

// times.second = "22:10";

// console.log(array);

// days.friday = 5;
// // console.log(days);

// const thursday = Object.create(days);
// // console.log(thursday);

// // console.log(days.hasOwnProperty("monday")); // true
// // console.log(days.hasOwnProperty("saturday")); // false

// const keys = Object.keys(days);
// const values = Object.values(days);

// // for (const day in days) {
// //   console.log(day);
// // }

// for (const day in days) {
//   if (days.hasOwnProperty(day)) {
//     // (day) without '', because this is the name of variable

//     console.log(day); // 1, 2, 3, 5
//     console.log(days[day]); // monday, tuesday, wednesday, friday
//   }
// }

// for (const day in days) {
//   if (days.hasOwnProperty("monday")) {
//     // ('monday') with '', because this is the name of key

//     console.log(day); // 1, 2, 3, 5
//     console.log(days[day]); // monday, tuesday, wednesday, friday
//   }
// }

// for (const day in days) {
//   if (days.hasOwnProperty("saturday")) {
//     console.log(day); // nothing, because 'saturday' is not own property
//     console.log(days[day]); // nothing, because 'saturday' is not own property
//   }
// }

// ===============================================

// function doSmth(a, b, c) {
//   console.log(`Result of function: ${a + b - c}`);
// }

// doSmth(10, 20, 10); // Result of function: 20

// ===============================================

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// // вызовы функций
// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook());
// console.log(bookShelf.removeBook());

// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf);

// bookShelf.removeBook("The Mist");

// ===============================================

// const clothes = {
//   adidas: ["L", "XS"],
//   nike: "XL",
//   puma: "M",
// };

// console.log(clothes);

// clothes.puma = "XL";
// console.log(clothes);

// clothes.adidas.push("S");
// console.log(clothes);

// ===============================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book);

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// ===============================================

// const brand = "adidas";

// const clothes = {
//   // "brand" just once because is the same as "brand: brand"
//   brand,
// };

// console.log(clothes.brand); // adidas

// ===============================================

// const brandName = "brand";
// const customer = {
//   sex: "male",
//   [brandName]: "adidas",
// };

// console.log(customer.brand); // adidas

// ===============================================

const numbers = {
  first: 1,
  second: 2,
  third: 3,
};

for (const key in numbers) {
  // for...in - only for objects
  console.log(key); // first, second, third
}

const numbers2 = [
  {
    first: 1,
    second: 2,
  },

  {
    first: 11,
    second: 22,
  },
];

let totalFirst = 0;
let totalSecond = 0;

const arrayNumbers = [];

for (const number of numbers2) {
  // for...of - only for arrays
  console.log(number); // all elements of array (each object)

  arrayNumbers.push(number.first);

  totalFirst += number.first;
  totalSecond += number.second;
}

console.log(arrayNumbers); // [1, 11]

console.log(totalFirst); // 12
console.log(totalSecond); // 24

// ===============================================
