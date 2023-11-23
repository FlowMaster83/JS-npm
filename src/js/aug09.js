// 09.08.2023

// // spread
// const temps = [14, -4, 25, 8, 11];
// console.log(temps);
// console.log(Math.max(...temps)); // spreads array to arguments & return max (25);

// const newTemps = [2, ...temps];
// console.log(newTemps); // [2, 14, -4, 25, 8, 11]

// ===============================================

// // creating a new array (repeat - slice/concat)
// const letters = ['a', 'b', 'c'];
// const letters2 = [...letters];
// console.log(letters2); // ['a', 'b', 'c']

// ===============================================

// // two arrays in one
// const numbers = [1, 2, 3];
// const numbers2 = [4, 5, 6];

// // order is important because it affects the order of elements in the new collection
// const spreadArrays = [...numbers, ...numbers2];
// console.log(spreadArrays);

// ===============================================

// // creating a new object (with overwrite)
// const obj1 = { first: 'A', second: 'B' };
// const obj2 = { first: 'D', third: 'C' };
// const obj3 = { ...obj1, ...obj2 };
// const obj4 = { ...obj2, ...obj1 };

// console.log(obj3); // {first: 'D', second: 'B', third: 'C'}
// console.log(obj4); // {first: 'A', second: 'C', third: 'B'}

// ===============================================
// rest

// spread is when ... is on the RIGHT-HAND side of the assignment operation, and rest is when ... is on its LEFT-HAND side.

// function multiply(...restArgs) {
//   console.log(restArgs);
// }

// !===================!

// // the ARGUMENTS on the right-hand side of the assignment operation and the PARAMETERS on its left-hand side
// // (аргументы находятся в правой части операции присваивания, а параметры в левой)

// // because the values of the arguments are assigned to the declared parameters
// // (значения АРГУМЕНТОВ присваиваются объявленным ПАРАМЕТРАМ)

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// // collecting part of arguments

// function numbers(first, second, ...others) {
//   console.log(first);
//   console.log(second);
//   console.log(others);
// }

// numbers(11, 22); // 11, 22, []
// numbers(33, 44, 55); // 33, 44, [55]
// numbers(66, 77, 88, 99); // 66, 77, [88, 99]

// ===============================================

// // Destructuring
// const musicArtist = {
//   author: 'Eminem',
//   genre: 'rap/hip-hop',
//   albums: 11,
//   isPublic: true,
// };

// // musicArtist.isPublic = false;

// const { author, genre, albums, isPublic, channel } = musicArtist; // destructuring
// console.log(author); // Eminem
// console.log(genre); // rap/hip-hop
// console.log(channel); // undefined

// const albumStatus = isPublic ? 'public' : 'private';

// console.log(
//   `Author: ${author} is one of the best of artists in ${genre} genre. He has ${albums} albums in ${albumStatus} status`
// ); // Eminem is one of the best of artists in rap/hip-hop genre. He has 11 albums in public status

// ===============================================

// // own example
// const carType = {
//   view: 'hatchback',
//   design: 'new design',
// };

// const { view: carBody, design: fullView, carName = 'Put the name' } = carType;
// console.log(carBody); // hatchback
// console.log(fullView); // new design
// console.log(carName); // Put the name

// const carType2 = {
//   design: 'old design',
// };

// const { view: anotherView = 'truck', design: oneMoreDesign } = carType2;

// console.log(anotherView);
// console.log(oneMoreDesign);

// console.log(' ');

// // book example
// const firstBook = {
//   title: 'The Last Kingdom',
//   coverImage:
//     'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = 'https://via.placeholder.com/640/480',
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: 'Сон смешного человека',
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = 'https://via.placeholder.com/640/480',
// } = secondBook;

// console.log(secondTitle); // Сон смешного человека
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

// ===============================================

// const channels = [
//   {
//     title: '1+1',
//     number: 2,
//     rating: 9.3,
//     products: {
//       shows: '95%',
//       commercialBreaks: '5%',
//     },
//   },
//   {
//     title: 'ictv',
//     number: 5,
//     rating: 9.0,
//     products: {
//       shows: '75%',
//       commercialBreaks: '25%',
//     },
//   },
//   {
//     title: 'stb',
//     number: 8,
//     rating: 8.8,
//     products: {
//       shows: '50%',
//       commercialBreaks: '50%',
//     },
//   },
// ];

// // without destructuring

// // for (const channel of channels) {
// //   console.log(channel.title);
// //   console.log(channel.number);
// //   console.log(channel.rating);
// // }

// // with destructuring + deep

// for (const channel of channels) {
//   const {
//     title,
//     products: { shows, commercialBreaks: integration },
//     number,
//     rating,
//   } = channel;
//   console.log(title);
//   console.log(number);
//   console.log(rating);
//   console.log(shows);
//   console.log(integration);
// }

// ===============================================

// array destructuring
const rgb = [200, 255, 100];
const [red, green, blue] = rgb;
console.log(`rgb: red - ${red}, green - ${green}, blue - ${blue}`);
