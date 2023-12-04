// const a = 2.55181;
// console.log(a.toFixed(1)); // 2.2
// console.log(Math.ceil(a)); // 3
// console.log(Math.floor(a)); // 2
// console.log(Math.round(a)); // 3

// console.log(Math.max(21, 141, 51, 51, 51, 515, 15452)); // 15451
// console.log(Math.min(21, 141, 51, 51, 51, 515, 15452)); // 21

// // console.log(Math.pow(2, 4)); // 16
// const math = Math.random() * (100 - 1) + 1;
// const fixed = math.toFixed(0);
// console.log(fixed);

// const managerName = 'Andrey';

// if (managerName === 'Serhii') {
//   console.log('Yes');
// } else if (managerName === 'Anton') {
//   console.log('Manager Anton');
// } else {
//   console.log('Somebody else');
// }

// switch (managerName) {
//   case 'Serhii':
//     console.log('Yes');
//     break;
//   case 'Anton':
//     console.log('Manager Anton');
//     break;
//   default:
//     console.log('Somebody else');
// }

// ===========

// const object = {
//   name: 'Serhii',
//   age: 30,
//   height: 179,

//   someData() {
//     if (this.haveChildren) {
//       console.log('yes, he have a children');
//       return;
//     } else {
//       console.log('no, he haven`t any children');
//       return;
//     }
//   },

//   anotherData(companyName) {
//     if (companyName) {
//       console.log('ecosphere');
//     } else {
//       console.log('unemployed');
//     }

//     if (this.age > 30) {
//       console.log('Yes, he is employee');
//     } else if (this.age < 30) {
//       console.log('early to work on this company');
//     } else {
//       console.log(`he is ${this.age}`);
//     }
//   },
// };

// object.haveChildren = true;

// object.someData();
// object.anotherData('ecosphere');

// ===============================================

// array methods

// три основы, которые НЕОБХОДИМО знать:
// A. что делает?
// B. что принимает?
// C. что возвращает?

/* 
1. forEach() + callbacks - ничего не возвращает, только перебирает
2. map()
3. flatMap()
4. filter()
5. find() - ищет условие, которое соответствует true
6. findIndex()
7. every()
8. some()
9. sort()
*/

// ===========

// 1
// поэлементно перебирает массив, замена фор, ничего не возвраает, невозможно прервать итерацию

// console.log('forEach:');

// const numbers = [5, 10, 15, 20, 25];

// console.log(numbers); // array

// numbers.forEach((number) => {
//   console.log(number); // elements of array
// });

// ===============================================

// console.log('map:');

// const numbers = [5, 10, 15, 20, 25];

// // поэлементно перебирает каждый элемент, не изменяет оригинальный массив, возвращает новый массив такой же длинны
// // неявный возврат возвращает undefined
// const result = numbers.map((number) => {
//   return number * 2;
// });

// console.log(result);

// ===========

// // получение массива имен игроков
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const playersNames = players.map((player) => player.name);
// console.log(playersNames); // array of players names

// const playersIds = players.map((player) => player.id);
// console.log(playersIds); // array of players ids

// ===========

// // для каждого игрока обновить свойства
// const updatedPlayers = players.map((player) => {
//   return {
//     ...player,
//     points: player.points * 1.1,
//   };
// });

// console.log(updatedPlayers);

// ===========

// // достучаться до отдельного свойства отдельного объекта
// const playerIdToUpdate = 'player-4';

// const timePlayed = players.map((player) =>
//   playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 100 }
//     : player
// );

// const timePlayed = players.map((player) => {
//   if (playerIdToUpdate === player.id) {
//     return { ...player, timePlayed: player.timePlayed + 100 };
//   }
//   return player;
// });

// console.table(timePlayed);

// ===============================================

// console.log('filter:');

/* 
- перебирает каждый элемент массива
- фильтрует элементы по условию
- возвращает новый массив (с элементами или пустой)
- добавляет в массив элементы, которые удовлетворяет условию коллбек функции
true - добавляется в новый массив
false - не добавляется в новый массив
*/

// const numbers = [5, 10, 15, 20, 25];

// const filtered = numbers.filter((number) => {
//   console.log(number); // elements of array
//   return number < 15 || number > 20;
// });

// console.log(filtered); // all elements who less than condition [5, 10,]

// ===========

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const filteredOnline = players.filter((player) => player.online);
// console.table(filteredOnline);

// const filteredOffline = players.filter((player) => !player.online);
// console.table(filteredOffline);

// ===============================================
// little shallow

// const myVar = 'string';

// function someFunc() {
//   const myVar = 'another string';
//   console.log(myVar);
//   return myVar;
// }

// console.log(myVar === someFunc()); // false

// ===============================================

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment); // undefined (нету контекста)
// updateCounter(5, counter.decrement); // undefined (нету контекста)

// // ПРИ ПЕРЕДАЧЕ МЕТОДА ОБЪЕКТА, КАК КОЛЛБЕКА - КОНТЕКСТ НЕ СОХРАНЯЕТСЯ

// ===============================================

// const func = function () {
//   return 5;
// };

// console.log(func); // передана ссылка на функцию, а не вызов

// ===============================================

// // call/apply - принудительный вызов функции в контексте (ТОЛЬКО НА ОДИН ВЫЗОВ)
// // функция - это объект

// // fn.call(ссылка на объект (контекст), остальные необязательные аргументы)

// const func = function () {
//   console.log('this', this);
// };

// const objA = {
//   a: 5,
//   b: 10,
// };

// func.call(objA, 1, 2, 3, 4, 5); // контекст, передача необязательных аргументов
// func.apply(objA, [1, 2, 3, 4, 5]); // контекст, передача необязательных аргументов в массиве

// // не хранить одинаковые методы на объектах, а вынести одну независимую и потом вызвать в каком-то контекте

// ===============================================

// // bind() - привязка контекста НАВСЕГДА
// // делает копию метода и привязывает контекст НАВСЕГДА
// // оригинальная функция не изменяется

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// ===============================================

// const objectC = {
//   first: 1,
// };
// console.log(objectC);

// const objectB = Object.create(objectC);
// objectB.second = 2;
// console.log(objectB);

// const objectA = Object.create(objectB);
// objectA.third = 3;
// console.log(objectA);

// ===============================================

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// // console.log(User.prototype); // автоматически создаётся объект

// User.prototype.changeEmail = function (newMail) {
//   this.email = newMail;
// };

// const mango = new User({ email: 'mango@mail.com', password: 11111 });

// mango.changeEmail('my-new-mail@mail.com');

// User.logInfo = function (obj) {
//   console.log(obj);
// };

// User.logInfo(mango);

// ===============================================

// const object = {
//   name: 'Serhii',
//   age: 35,
// };

// console.log(object);

// object.profession = 'Developer';

// console.log(object.hasOwnProperty('profession'));

// const newInfo = Object.create(object); // прототип объекта object
// newInfo.profession = 'Manager'

// console.log(newInfo.hasOwnProperty('profession'));

// ===============================================

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.every((number) => number < 0);
// console.log(result);

// const result2 = numbers.some((number) => number > 5);
// console.log(result2);

// const arrayOfObjects = [
//   { name: 'first', first: 1 },
//   { name: 'second', second: 2 },
//   { name: 'third', third: 3 },
// ];

// const footballers = ['Harry Kane', 'Hugo Lloris', 'Christian Eriksen'];

// const changeToUpper = footballers.map((footballer) => footballer.toUpperCase());
// console.log(changeToUpper);

// const changeToLower = footballers.map((footballer) => footballer.toLowerCase());
// console.log(changeToLower);

// const footballers = [
//   { name: 'Harry Kane', clubs: 'Bayern Munich' },
//   { name: 'Hugo Lloris', clubs: 'Tottenham Hotspur' },
//   {
//     name: 'Christian Eriksen',
//     clubs: 'Manchester United',
//   },
// ];

// const findClub = footballers.find(
//   (footballer) => footballer.clubs === 'Tottenham Hotspur'
// );
// console.log(findClub);

// const findClubByIndex = footballers.findIndex(
//   (footballer) => footballer.clubs === 'Tottenham Hotspur'
// );
// console.log(findClubByIndex);

// const footballers = [
//   { name: 'Harry Kane', clubs: ['Tottenham Hotspur', 'Bayern Munich'] },
//   { name: 'Hugo Lloris', clubs: ['Nice', 'Tottenham Hotspur'] },
//   {
//     name: 'Christian Eriksen',
//     clubs: ['Tottenham Hotspur', 'Manchester United'],
//   },
// ];

// const clubs = footballers.flatMap((footballer) => footballer.clubs);
// console.log(clubs);

// const oneClub = clubs.filter((club, idx, arr) => arr.indexOf(club) === idx);
// console.log(oneClub);

// ===============================================

// //  ЗАДАЧА С КАРТАМИ
// let count = 0;

// function cc(card) {
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count += 1;
//       break;

//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count -= 1;
//       break;
//   }

//   if (count > 0) {
//     return console.log(count + " Bet");
//   } else {
//     return console.log(count + " Hold");
//   }
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');

// ===============================================

// РЕКУРСИЯ
// Два основных правила:
// // 1. базовое условие
// // 2. движение по рекурсии (сценарий)

// let count = 0

// function recurse() {
//   if(count === 5) {
//     return 'Done'
//   }

//   count++;
//   return recurse();
// }

// console.log(recurse())
// console.log(count);

// ===========

// function pow(x, y) {
//   if (y === 0) {
//     return 1;
//   }
//   return x * pow(x, y - 1)
// }

// const result = pow(5, 3)
// console.log(result);

// ===========

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
// for (let x = 0; x < contacts.length; x++) {
//   if (contacts[x].firstName === name) {
//     if (contacts[x].hasOwnProperty(prop)) {
//       return contacts[x][prop]
//     } else {
//       return 'No such property'
//     }
//   }
// }
// return 'No such contact'
// }

// lookUpProfile("Akira", "likes");

// ===========

// function randomWholeNum() {
//   return (Math.floor(Math.random() * 9));
// }

// console.log(randomWholeNum());

// ===========

// function convertToInteger(str) {
//   return parseInt(str)
//   }

// console.log(convertToInteger("56"));

// ===========

// function checkSign(num) {
//   return num > 0 ? 'positive'
//   : num < 0 ? 'negative'
//   : 'zero'
// }

// (checkSign(10));

// ===============================================

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((word) => word.length > 6);
// console.log(result); // ["exuberant", "destruction", "present"]

// ===========

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// const result2 = arr.filter((element) => element < 5)
// console.log(result2);

// ===========

// // Изменение всех элементов
// let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

// const modifiedWords = words.filter((word, index, arr) => {
//   arr[index + 1] += " extra";
//   return word.length < 6;
// });

// console.log(modifiedWords);
// // Обратите внимание, что есть три слова длиной менее 6, но так как они были изменены,
// // возвращается одно слово ['spray']

// ===========

// // Добавление новых элементов
// words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
// const appendedWords = words.filter((word, index, arr) => {
//   arr.push("new")
//   return word.length < 6;
// });

// console.log(appendedWords);
// // Только три слова удовлетворяют условию, хотя `words` теперь имеет куда больше слов,
// // длинной меньше 6 символов: ['spray', 'limit', 'elite']

// ===========

// // Удаление элементов
// words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
// const deleteWords = words.filter((word, index, arr) => {
//   arr.pop();
//   return word.length < 6;
// });

// console.log(deleteWords);
// // Заметьте, что 'elite' не получено, так как удалено из `words` до того,
// // как filter смог получить его: ['spray', 'limit']

// ===============================================

// const items = ["item1", "item2", "item3"];
// const copy = [];

// // до
// for (let i = 0; i < items.length; i++) {
//   copy.push(items[i]);
//   console.log(items[i] + ' is result')
// }

// // после
// const result3 = items.forEach(function (item) {
//   copy.push(item);
//   console.log(item + ' is result')
// });

// ===============================================

// const numbers = [1,2,3,4,5]

// let result = []
// for (let i = 1; i < numbers.length + 1; i++) {
//   result.push(i * 4)
// }

// console.log(result);

// const result2 = numbers.map(function mul(element) {
//   return element * 4;
// })
// console.log(result2);

// const result = add(2, 3)

// function add(a, b) {
//   return a + b
// }

// console.log(result);

// const added = function (x, y) {
//   return x * y;
// }

// console.log(added(2, 1))

// ===================

// // setitem - добавить
// // getItem - получить
// // removeItem - удалить
// // clear - очистить

// // НЕ функция (и не метод объекта)

// // объязательно привести в строку JSON.stringify!!!
// localStorage.setItem('TEST_KEY', JSON.stringify([1,2,3,4]))
// console.log(JSON.parse(localStorage.getItem('TEST_KEY')))

// // объект
// localStorage.setItem('TEST_KEY_1', JSON.stringify({name: 'hello'}))
// console.log(JSON.parse(localStorage.getItem('TEST_KEY_1')));

// localStorage.removeItem('TEST_KEY_1') // используется часто

// // очистка (в случае логаута) - clear (редко)
// // localStorage.clear()

// ===================

// const local = document.querySelector('.js-local')
// const session = document.querySelector('.js-session')

// local.addEventListener('click', () => {
// localStorage.setItem('local', 'test local')
// })

// session.addEventListener('click', () => {
// sessionStorage.setItem('session', 'test session')
// })

// const third = document.querySelector('.js-third')
// third.addEventListener('click', () => {
// localStorage.setItem('first', 'second')
// })

// const fourth = document.querySelector('.js-fourth')
// fourth.addEventListener('click', () => {
// sessionStorage.setItem('fourth', 'fifth')
// })

// ===================

// АСИНХРОННОСТЬ

// колстек проверяет тип функции
// если синхронная - выполняется
// если асинх - отправляется в WEB API
// потом попадает в очередь и ждёт выполнения всех синх функций
// весь асинх код будет всегда выполнен после синх

// for (let i = 3; i > 0; i--) {
//     const delay = i * 1000
//     setTimeout(() => console.log(i), delay)
// }

// ===================

// setTimeout(() => {
//     console.log('Прошло >= 3 секунд после автосейва')
// }, 3000)

// ===================

// console.log('start');

// setTimeout(() => {
//     console.log('SetTimeout');
// }, 2000);

// console.log('finish'); // 1. старт, 2. финиш, 3. SetTimeout

// ===================

// console.time('test async')

// console.log('start')

// setTimeout(() => {
//     console.log('setTimeout')
// }, 0)

// for (let i = 0; i < 10000; i += 1) {
//     console.log('value', i)
// }

// console.timeEnd(
//     'test async'
// ) /* выполняется синх, доходит до асинх, отправляет асинх в апи, после задержки отпрпавляет в очередь, выполняется после выполнения всего синх */

// ===================

// const date = new Date()
// console.log('new Date()', date) // возвращает объект с датой на англ (удобно, чтобы получить какие-то значения)
// const currentDate = Date.now()
// console.log('Date.now()', currentDate) // возвращает кол-во милисекунду с 1 янв 1970 года (UTC)

// ===================

// Months
// const date = new Date()

// console.log(date.getMonth()) // 11 (декабрь) - возвращает месяц с нуля до 11 (вид массива), то есть декабрь - 11, апрель - 3
// const months = [
//     'Jan',
//     'Feb',
//     'Mar',
//     'Apr',
//     'May',
//     'Jun',
//     'Jul',
//     'Aug',
//     'Sep',
//     'Oct',
//     'Nov',
//     'Dec',
// ]

// console.log(months[date.getMonth()]) // Dec

// ===================

// // Days

// const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// console.log(days[date.getDay()]) // Fri - счет ведётся с воскресенья (0 индекс)

// ===================

// // promises
// const promise = new Promise((resolve, reject) => {
//     reject('Oops')
// })

// promise.then(value => console.log(value)) // Uncaught (in promise) Oops

// ===================

// 1. Мікропроцеси мають більший пріоритет ніж макро
// 2. Мікро: promise, observer
// 3. Макро: setTimeout, setInterval, setImmediate, requestAnimationFrame

// console.log('1')

// setTimeout(() => console.log('2'), 0)

// Promise.resolve('3').then(value => console.log(value))

// console.log('4')

// // 1 4 3 2
// // синх, асинх: промис (микро), асинх:сеуттаймаут (макро)

// ===================

// console.log('1')

// setTimeout(() => console.log('2'), 10)

// Promise.resolve('3').then(value => console.log(value))
// Promise.reject('4')
//     .then(value => console.log(value))
//     .catch(err => console.log(err))
// Promise.resolve('5').then(value => console.log(value))

// setTimeout(() => console.log('6'), 0)

// console.log('7')

// reject менеее приоритетный чем resolve
// then требует внутри коллбек
// нативный промисы используется в игровой разработке
// приоритетность определяет очередь в event loop
// 1 7 3 5 4 6 2

// ===================

// console.log('1')

// setTimeout(() => {
//     console.log('2')
//     Promise.resolve('3').then(value => console.log(value))
// }, 10)

// console.log('4')

// // промис попадает в очередь после выполнения resolve или reject
// // синх, сеттаймаут идёт в апи, выполняется коллбек-функция сеттаймаута, возвращается 2, выполняется промис

// ===================

// // промис - обещание
// // представитель класса
// // 99% используется при запросе на бекенд
// // 3 состояния промиса (2 типа событий)
// // 1. Пендинг
// // 2. Выполнение (3. resolve или fulfilled, reject)

// // функция-экзекьютор (переданная функция для экземпляра промиса)
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const value = Math.random()

//         if (value > 0.5) {
//             resolve('Yeeeeees')
//         } else {
//             reject('Nooooo')
//         }
//     }, 1000)
// })

// // при отправке запроса на бекенд, промис в статусе пендинг, при получении - промис сам определяет статус

// console.log(promise) // pending

// // обрабатывается с помощью:
// // then (принимает 2 коллбек-функции: resolve, reject (при этом в кетч он не попадёт)),
// // catch,
// // finally

// // then всегда идёт первым, далее catch или finally
// // каждый then возвращает промис

// // структура: 1. список then(параметр удачного выполнения промиса), далее catch(параметр неудачного выполнения промиса) или finally(нет параметров)
// promise
//     .then(value => {
//         return value + ' 😊'
//     })
//     .then(value => {
//         console.log(value, qwerty)
//     })
//     .then(() => {
//         console.log('last then')
//     })
//     .catch(err => {
//         console.error(err)
//     })
//     .finally(() => {
//         console.log('after')
//     }) // не принимает параметры (выполняет общее действие при then и catch)

// ===================

// // создаем запрос на бекенд
// // метод fetch
// const promise = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// console.log(promise) // {<pending>}

// // возврат объекта, в котором есть асинх json (который обрабатывается в следующем then)
// promise
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// ===================

const start = document.querySelector('.js-start')
const container = document.querySelector('.js-container')

start.addEventListener('click', onStart)

// function onStart() {
//     const result = []
//     ;[...container.children].forEach(box => (box.textContent = ''))
//     ;[...container.children].forEach((box, i) => {
//         createPromise(i)
//             .then(smile => {
//                 box.textContent = smile
//                 result.push('1')
//             })
//             .catch(smile => {
//                 box.textContent = smile
//             })
//             .finally(() => {
//                 setTimeout(() => {
//                     if (i === container.children.length - 1) {
//                         if (!result.length || result.length === 3) {
//                             alert('Winner')
//                         } else {
//                             alert('Lost money')
//                         }
//                     }
//                 }, 500)
//             })
//     })
// }

// function createPromise(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const random = Math.random()

//             if (random > 0.1) {
//                 resolve('🍎')
//             } else {
//                 reject('🍉')
//             }
//         }, 1000 * delay)
//     })
// }

// ===================
//  методы промисов (11 модуль):

// Promise.all() - если все промисы були успешны (если reject, падает в ошибку)
// Promise.race() - возвращает первый самый быстрый промис
// Promise.allSettled() - как Promise.all(), но обрабатывает все промисы и добавляет пометку статуса.

function onStart() {
    let counter = 0

    ;[...container.children].forEach(box => (box.textContent = ''))

    const promises = [...container.children].map((_, i) => createPromise(i))

    Promise.allSettled(promises).then(items => {
        items.forEach((item, i) => {
            setTimeout(() => {
                if (item.status === 'fulfilled') {
                    counter += 1
                }
                container.children[i].textContent = item.value || item.reason

                if (container.children.length - 1 === i) {
                    setTimeout(() => {
                        if (counter === container.children.length || !counter) {
                            alert('Winner')
                        } else {
                            alert('Lost money')
                        }
                    }, 500)
                }
            }, i * 1000)
        })
    })
}

function createPromise() {
    return new Promise((resolve, reject) => {
        const random = Math.random()

        if (random > 0.99) {
            resolve('🍎')
        } else {
            reject('🍉')
        }
    })
}
