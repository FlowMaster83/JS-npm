// // bind()
// function greet(clientName) {
//   return `${clientName}, welcome to ${this.service}`;
// }

// const gmail = {
//   service: 'Gmail',
// };

// const gmailGreeter = greet.bind(gmail);
// console.log(gmailGreeter('Poly'));

// ===============================================

// MATERIALS
// this присутствует ТОЛЬКО в функциях

// контекст делится на 2 типа:
// 1. declaration & expression
// 'use strict';

// // определяем тип функции, потом определяем, кто вызывает функцию.
// foo();
// function foo() {
//   console.log(this); // undefined при 'use strict'; не может определить свой this
// }

// const boo = function () {
//   console.log(this); // undefined при 'use strict'; не может определить свой this
// };
// boo();

// const objA = {
//   name: 'User name',
//   skills: {
//     mySkill: 'html',
// метод объекта (функция)
//     nickName() {
//       console.log(this);
//     },
//   },
//   //   метод объекта (функция)
// };

// // определяем тип функции (declaration)
// // кто вызывает (слева), тот становится контекстом вызова
// objA.skills.nickName();

// ===========

// // 2. Arrow - !!! определяет this фактическим местом написания !!!

// const arrow = () => {
//   console.log(this);
// };
// arrow(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// не опеределяет того, кто вызвал (забирает родительский контекст)
// контекст заберет только у функции

// const objB = {
//   name: 'User name',
//   skills: {
//     mySkill: 'html',
//     someValue: {
//       value: 10,
//       foo() {
//         const nickName = () => {
//           console.log(this);
//         };
//         nickName();
//       },
//     },
//   },
// };

// objB.skills.someValue.foo(); // someValue, так как он вызывает foo(), что в свою очередь является декл. функцией
// 22 минута (модуль 5, урок 1) - о стрелочных функциях в контексте this

// ДОПОНИТЕЛЬНО:
// в этом примере если foo: () => {}, тогда результатом будет window,
// поскольку foo - это стрелочная функция, которая выступает, как метод объекта (выше нет функций)

// // ДОПОЛНИТЕЛЬНО:
// function nickName() {
//   console.log(this);
// }
// nickName(); // никем не вызвано
// //  исходить из режима - 'use strict' ? undefined : Window     :))))

// ===========

// 1. Определяем тип функци (читаем из глубины)
// 1а - declaration - кто вызвал (находится первый слева)
// - если вызвал объект (получаем объект) this === object
// - 'use strict' ? undefined : Window

// 1б - Arrow - в рамках чего была создана (где была фактически прописана)
// - если создана в рамках функции, то принимает контекст этой функции (снова с пункта 1.)

// 2. Любой другой случай - всегда Window (при любом режиме)

// ===============================================

// // МЕТОДЫ ФУНКЦИЙ - чтобы переопределить контекст
// 'use strict'; // пишется, чтобы увидеть ошибку вместо undefined

// function foo() {
//   const a = this.test;
// }

// foo(); // вместо undefined будет ошибка, если включен use strict

// call()
// apply()
// bind()

// // call() - передает первый параметр this
// const objA = {
//   name: 'A',
//   myAge(a, b) {
//     console.log(this, a, b);
//     return 'some value';
//   },
// };

// objA.myAge(22, 44);

// const objB = {
//   name: 'B',
// };

// const objC = {
//   name: 'C',
// };

// const fromBackEnd = [10, 20, 30, 40];
// objA.myAge.call(objB, 1, 2); // первым параметром передается контекст, далее - свои аргументы

// ===========

// // apply() (два параметра) - будущий this и массив параметров
// // чтобы не использовать функцию, которая уже используется кем-то раньше
// // когда есть готовый метод объекта, его надо переопределить, но со сменой контекста
// const str = objA.myAge.apply(objB, [1, 2]); // массив распыляется (убирает кваратные скобки)
// objA.myAge.apply(objC, [10, 20, 30, 40]); // 30 и 40 теряются
// console.log(str);

// ===========

// bind() - this и нужные аргументы
// создает копию функции, но с измененным контекстом

// const objA = {
//   name: 'A',
//   myAge(a, b, c, d) {
//     // console.log(arguments);
//     console.log(this, a, b, c, d);
//     return 'some value';
//   },
// };

// const objB = {
//   name: 'B',
// };

// const objC = {
//   name: 'C',
// };

// const result = objA.myAge.bind(objB, 10, 20, 30, 40);
// const result2 = objA.myAge.bind(objC, 111, 222, 333);
// objA.myAge();

// result(999, 888, 777); // {name: 'B'} 10 20 30 40

// ===========

// bind() и методы объекта

// ===========

// // написать метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает и возвращает общую стоимость камней с таким именем, ценой и количеством со свойством stones
// const chopShop = {
//     stones: [
//       { name: 'Emerald', price: 1300, quantity: 4 },
//       { name: 'Diamond', price: 2700, quantity: 3 },
//       { name: 'Saphire', price: 1400, quantity: 7 },
//       { name: 'Ruby', price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
//       const { price, quantity } = this.stones.find(
//         ({ name }) => name === stoneName
//       );
//       return price * quantity;
//     },
//   };

//   const shop2 = {
//     stones: [
//       { name: 'Щебень', price: 1300, quantity: 4 },
//       { name: 'Песок', price: 2700, quantity: 3 },
//     ],
//   };
//   console.log(chopShop.calcTotalPrice.call(shop2, 'Щебень')); // 5200
//   // console.log(chopShop.calcTotalPrice('Diamond')); // 8100
//   // console.log(chopShop.calcTotalPrice('Saphire')); // 9800
//   // console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// ===============================================
// 18/09

// const user = {
//   name: 'test user a',
//   age: 18,

//   sayHello() {
//     console.log(this.name);
//   },

//   showAge() {
//     console.log(`My age ${this.age}`);
//   },
// };

// const user1 = Object.create(user);
// user1.name = 'test user 1';
// user1.sayHello();
// const user2 = Object.create(user);
// user2.showAge();

// console.log('user1', user1);
// console.log('user2', user2);

// ===========

// Прототиты (на сегодня не актуально)
// const user = {
//   name: 'test user a',
//   age: 33,
//   sayHello() {
//     console.log(this.name);
//   },
// };

// const admin = Object.create(user);
// admin.showAge = function () {
//   console.log(this.age);
// };
// // console.log(admin);

// const practiceOwner = Object.create(admin);
// practiceOwner.name = 'Owner';

// // practiceOwner.showAge();
// // practiceOwner.sayHello();

// console.log(practiceOwner);

// ===========

// // Классы (замена прототипного наследования)
// // Синтаксис
// class User {
//   // параметры
//   constructor({ name, email, age = 18, location = 'World' } = {}) {
//     // создание свойств
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.location = location;
//   }
//   //   создание методов
//   sayHello() {
//     console.log(this.name);
//   }
// }

// // создание инстанса (разные формулировки - инициализация экземпляра класса, создания нового класса и т.д.)
// const test = new User({
//   name: 'User A',
//   email: 'test@gmail.com',
//   location: 'Lviv',
// }); // аргументы
// test.sayHello();
// test.qwerty = function () {
//   console.log(this.age);
// };
// const test1 = new User({ name: 'User B', email: 'gmail@gmail.com', age: 99 }); // аргументы

// console.log(test);
// console.log(test1);
