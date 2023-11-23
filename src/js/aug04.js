// 04.08.2023
// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: false,
//         "React Native": false,
//     }
// }

// console.log(user.languages.React_Native);
// console.log(user['languages']["React Native"]);

// for in

// for (const key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: false,
//         "React Native": false,
//     },
// }

// console.log(user);

// // user.age = 29;

// // update & adding
// user.age += 1;
// console.log(user.age); //29

// user.city = 'VN';
// console.log(user.city); //VN

// // deleting (seldom)
// delete user.city;
// console.log(user);

// const user = {
//         name: 'Artem',
//         age: 28,
//         languages: {
//             html: false,
//             css: false,
//             js: false,
//             "React Native": false,
//         },
//     }

// // Object.freeze(user);
// user.age = 100;
// console.log(user);

// Prototype (intro)
// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: false,
//         "React Native": false,
//     },
// };
// // Object.freeze(user);

// // create another link to object
// const user2 = Object.create(user);
// user2.age = 33;
// console.log(user);
// console.log(user2);

// // to know own properties of object
// for (const key in user2) {
//     if(user2.hasOwnProperty(key)) {
//         console.log('Own', user2[key]);
//     } else {
//         console.log('All', user2[key]);
//     }
// }

// const user = {
//     score: false,
// }

// // to know own properties of object
// if(user.hasOwnProperty('score')) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// // to know any properties of object
// if ('score' in user) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// const user = {
//   name: 'Artem',
//   age: 28,
//   languages: {
//     html: false,
//     css: false,
//     js: false,
//     'React Native': false,
//   },

//   // method of object (function)
//   sayHello() {
//     console.log(`My name ${this.name}`);
//   },

//   // no limits with methods
//   iKnow() {

// methods for work with object
// often
// принимает объект и возвращает массив ключей его собственных свойств
// const keys = Object.keys(this.languages);

// возвращает массив значений его собственных свойств
// const values = Object.values(this.languages);
// rarely
// const entries = Object.entries(this.languages);
// console.log(keys);
// console.log(values);
// console.log(entries);
// for (const key of keys) {
//   console.log(key);
//   if (this.languages[keys]) {
//     console.log(key);
//   }
// }
//     for (const key in this.languages) {
//       if(this.languages[key])
// console.log(key);
//   },
// };

// user.iKnow();

// const user2 = Object.create(user);
// user2.name = 'Den';

// // console.log(user2);
// // all the path of object
// user2.sayHello();
// user.sayHello();

// ===============================================

