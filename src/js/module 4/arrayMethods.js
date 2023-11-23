// перебирающие методы массива

// три основы, которые НЕОБХОДИМО знать:
// 1. что делает?
// 2. что принимает?
// 3. что возвращает?

// forEach
// 1. выполняет функцию ОДИН РАЗ для каждого элемента в массиве
// 2. Принимает колбек-функцию, а колбек - принимает три параметра (локальная переменная):
// currentValue - итерируемый элемент (ОБЯЗАТЕЛЬНЫЙ)
// index - индекс текущего элемента,
// array - сам итерируемый массив
// 3. возвращает undefined (не присваивается переменной, нет смысла в return, так как всегда undefined)

// перебирает КАЖДЫЙ элемент массива

// метод forEach стоит воспринимать, как большой объект, в середине которого находится определённый метод и этот метод приравнен объекту Array.
// const Array = {
//   forEach() {
//   },
// };

// ВАЖНО ПОМНИТЬ: НАЧИНАЕТСЯ ПЕРЕБОР С 0 ИНДЕКСА И ДО КОНЦА
// НЕВОЗМОЖНО ПРЕРВАТЬ (break не работает).
// МУТИРУЕТ ОРИГИНАЛЬНЫЙ МАССИВ

// const arr = [2, 6, 1, 7, 3];

// arr.forEach(function (item) {
//   // переопределние каждого элемента массива
//   item * 2;
// });

// console.log(arr);

// обращение к индексу
// на реальных проектах может быть ESlint. Будет ошибка при не объявленом параметре currentValue. Можно поставить _
// arr.forEach(function (_, idx) {
//   console.log(idx);
// });

// ===========

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// ===============================================

// map - после обработки возвращает массив такой же длинны
// const arr = [1, 2, 3, 4, 5, 6, 7];

// три основы, которые НЕОБХОДИМО знать:
// A. что делает?
// B. что принимает?
// C. что возвращает?

// A.
// B. принимает коллбек
// C. возвращает массив такой же длинны

// // без return будет undefined или без return, но без фигурных скобок (curly bracket) - если одна простое действие, как здесь (умножение).
// const result = arr.map((item, idx, arr) => {
//   return item * 2;
// });

// console.log(result);
// console.log(arr);

// ОБЯЗАТЕЛЬНЫЙ return, если действией больше, чем одно

// // каждое умножить на 2
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const result = arr.map((item, idx, arr) => item * 2);

// console.log(result);

// // пример с большим действием, чем одно (return)
// // каждое ПАРНОЕ умножить на 2
// const result2 = arr.map((item) => {
//   if (!(item % 2)) {
//     return item * 2;
//   }
//   return item;
// });

// console.log(result2);

// map - под капотом:
// принимает массив и итерует его через for()
// берет элемент, индекс и сам массив
// для каждого элемента вызывает коллбек
// создает пустой массив
// пушит в пустой массив результат вызова коллбека

// const arr = [1, 2, 3, 4, 5, 6, 7];

// function customMap(arr, callback) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     const item = arr[i];
//     result.push(callback(item, i, arr));
//     console.log(result);
//   }
// }

// const foo = (item) => (!(item % 2) ? item * 2 : item);
// customMap(arr, foo);

// const arr = [1, 2, 3, 4, 5, 6, 7];

// // возврат чисел, которые умножаются на два без остачи.
// const result = arr.map((item) => {
//   if (!(item % 2)) {
//     return item * 2;
//   }
//   return item * 2;
// });

// console.log(result);

// map() под капотом.
// получает массив и начинает его итерировать (цикл for)

// const arr = [1, 2, 3, 4, 5, 6, 7];

// function customMap(arr, callback) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     const item = arr[i];
//     result.push(callback(item, i, arr));
//   }
//   return result;
// }

// const result = arr.map((item) => (!(item % 2) ? item * 2 : item));
// console.log(result);

// // console.log(customMap(arr, foo));

// // function foo(item, idx, arr) {
// //   if (!(item % 2)) {
// //     return item * 2;
// //   }
// //   return item;
// // }

// ===============================================

// // flatMap - редкий (работает с вложенными массивами)

// // item - each element (mandatory element)
// // idx - index of each element,
// // arr - array

// const arr = [
//   { name: 'User1', skills: ['html', 'css'] },
//   { name: 'User2', skills: ['js', 'react'] },
//   { name: 'User3', skills: ['node.js', 'express'] },
// ];

// // получаем разглаженный массив
// const result = arr.flatMap((item) => item.skills);
// console.log(result);

// ===============================================

// find - находит один элемент в массиве

// item - each element (mandatory element)
// idx - index of each element,
// arr - array

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const result = arr.find((item) => item > 5); // до первого 'true'

// console.log(result); // 6
// // если не было true, возвращает undefined

// // find с вложенностями
// const arr = [
//   { name: 'User1', skills: ['html', 'css'] },
//   { name: 'User2', skills: ['js', 'react'] },
//   { name: 'User3', skills: ['node.js', 'express'] },
// ];

// const result = arr.find((item) => item.skills.includes('js'));
// console.log(result);

// ===============================================

// findIndex (indexOf - не с вложенными элементами)
// если находит элемент возвращает индекс, если нет, возвращает -1

// item - each element (mandatory element)
// idx - index of each element,
// arr - array

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const result = arr.indexOf(5);
// console.log(result);

// const arr = [
//   { name: 'User1', skills: ['html', 'css'] },
//   { name: 'User2', skills: ['js', 'react'] },
//   { name: 'User3', skills: ['node.js', 'express'] },
// ];

// const result = arr.findIndex((item) => item.skills.includes('node.js'));
// console.log(result);

// ===============================================

// // filter() нахоит ВСЕ элементы, которые удовлетворяют условие (аналог find - находит ПЕРВОЕ совпадение)
// // если не находит true, возвращает пустой массив

// // item - each element (mandatory element)
// // idx - index of each element,
// // arr - array

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// // всегда возвращает новый массив
// // получаем парные числа и умножаем на 2 при помощи map()
// const result = numbers
//   .filter((item) => !(item % 2))
//   .map((item, _, arr) => {
//     console.log(arr);
//     return item * 2;
//   });

// console.log(result);

// ===============================================

// every() - true, если КАЖДЫЙ элемент парный
// const numbers = [22, 1, 2, 3, 4, 5, 6, 7];
// const number2 = [2, 4, 6, 8];
// const result = numbers.every((item) => !(item % 2));
// const result2 = numbers.every((item) => !(item % 2));

// console.log(result); // false
// console.log(result2); // true

// const arr = [
//   { name: "User1", age: 18 },
//   { name: "User1", age: 22 },
//   { name: "User1", age: 19 },
// ];

// const result = arr.every((user) => user.age >= 18);
// console.log(result); // true (все старше 18), если хотя бы один user моложе 18, тогда false

// ===============================================

// // some() - true если хотя бы ОДИН элемент удовлетворяет условие
// const numbersSome = [22, 1, 2, 3, 4, 5, 6, 7];
// const numbersSome2 = [1, 23, 43, 7, 9];

// const result = numbersSome.some((item) => {
//   console.log(item);
//   return !(item % 2);
// });
// console.log(result); // true (первый элемент парный (22))

// ===============================================

// sort() - сортирует

// const numbers = [321, 534, 634, 452, 231, 111];

// // принимает 2 параметра a (текущий элемент), b (следующий элемент)

// const result = numbers.sort((a, b) => b - a);
// console.log("result", result);
// // мутирует исходный массив
// console.log("numbers", numbers);

// // делаем копию через ...rest
// const result = [...numbers].sort((a, b) => b - a);
// console.log("result", result);
// console.log("numbers", numbers);

// // сортировка по юникоду
// numbers.sort();
// console.log(numbers);

// // сортировка строк (без передачи аргументов)
// const string = ["s", "a", "f", "B", "A", "S"];
// // 1 вариант:
// // const result = string.sort();

// // 2 вариант:
// const result = string.sort((a, b) => a.localeCompare(b));
// console.log(result);

// // в обратном порядке:
// // const result = string.sort((a, b) => b.localeCompare(a));
// // console.log(result);

// вложенности

// const arr = [
//   { name: "Den", age: 18 },
//   { name: "Slava", age: 22 },
//   { name: "Max", age: 19 },
// ];

// arr.sort((a, b) => a.name.localeCompare(b.name));
// console.log(arr);

// ===============================================

// reduce()
// принимает: колбек-функция и начальное значение
// 4 параметра: acc (аккумулятор), item, idx, arr
// const numbers = [11, 4, 9, 3, 54, 23, 12];

// const result = numbers.reduce((acc, item, idx, arr) => {
//   console.log("acc", acc);
//   console.log("item", item);
//   console.log("--------------------");
//   return acc + item;
// }, 0);

// const numbers = [11, 4, 9, 3, 54, 23, 12];
// const result = numbers.reduce((acc, item) => {
//   console.log('acc', acc);
//   console.log('item', item);
//   acc.push(item * 2);
//   // при работе с reduce() ВСЕГДА возвращаем аккумулятор
//   return acc;
// }, []);

// push is not a function (метод push возвращает длинну нового массива)
// const numbers = [11, 4, 9, 3, 54, 23, 12];
// const result = numbers.reduce((acc, item) => {
//   console.log("acc", acc);
//   console.log("item", item);
//   return acc.push(item * 2);
// }, []);

// ===============================================

// PRACTICE
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
];

// map()
// функция getModel возвращает массив моделей всех автомобилей
// const getModels = (cars) => {
//   return cars.map((car) => car.model);
// };
// // getModels(cars);

// console.table(getModels(cars));

// ===========

// const makeCarsDiscount = (cars, discount) => {
//   // возвращаем объект с измененным ключем price
//   return cars.map((item) => ({
//     ...item,
//     price: item.price * (1 - discount),
//   }));
// };

// console.log(makeCarsDiscount(cars, 0.2));
// console.log(makeCarsDiscount(cars, 0.4));

// ===========

// filter() - возвращает каждый элемент итерации, если условие = true
// const filterByPrice = (cars, threshold) => {
//   return cars.filter(({ price }) => price < threshold);
// };

// все машины, цена которых ниже...
// console.log(filterByPrice(cars, 30000));
// console.log(filterByPrice(cars, 25000));

// ===========

// // возврат массива, которые onSale = true
// // onSale === true не обязательно писать, тк onSale приводится к булю
// const getCarsOnSale = (cars) => cars.filter(({ onSale }) => onSale);
// // которткий синтаксис без фигурных скобок и return, потому что одно короткое простое действие
// console.log(getCarsOnSale(cars));

// ===========

// возрват массива, у которых тип совпадает со значением параметра type.
// const getCarsType = (cars, type) =>
//   cars.filter(({ type: carType }) => carType === type);

// console.log(getCarsType(cars, 'suv'));
// console.log(getCarsType(cars, 'sedan'));

// ===========

// // find() - по моделям
// const getCarByModel = (cars, model) =>
//   // деструктуризация с изменением названия свойства
//   cars.find(({ model: carModel }) => model === carModel);

// console.log(getCarByModel(cars, 'CX-9'));

// ===========

// // сортировка по возрастанию
// // sort() - мутирует оригинальный массив, по этому применяем ...spread (делаем копию)
// const sortByAscAmount = (cars) =>
//   [...cars].sort(({ price: a }, { price: b }) => a - b);
// console.log(cars);
// console.table(sortByAscAmount(cars));

// // сортировка по уменьшению
// const sortByDescAmount = (cars) => [...cars].sort((a, b) => b.price - a.price);
// console.log(cars);
// console.table(sortByDescAmount(cars));

// ===========

// сортировка по алфавиту через if(){}
// const sortByModel = (cars, order) => {
//   if (order === 'asc') {
//     return [...cars].sort((a, b) => a.model.localeCompare(b.model));
//   } else {
//     return [...cars].sort((a, b) => b.model.localeCompare(a.model));
//   }
// };

// // через тернарный оператор
// const sortByModel = (cars, order) =>
//   cars.sort(({ model: a }, { model: b }) =>
//     order === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
//   );

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// ===========

// // reduce()
// // сколько всего автомобилей
// const getTotalAmount = (cars) =>
//   cars.reduce((acc, { amount }) => acc + amount, 0);

// console.table(getTotalAmount(cars));

// ===========

// массив тех, которые на розпродаже
// const getModelsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);
// console.table(getModelsOnSale(cars));

// ===========

// // распродажа с сортировкой по возрастанию цены

// JS Doc
/**
 * Get cars on sale and sort them
 * @param {Array} cars - Array with object
 * @returns {Array} - sorted array on sale
 *
 */

// const getSortedCarsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);
// console.log(cars);
// console.table(getSortedCarsOnSale(cars));

// ===============================================

// const str = 'sdadsafeqwfwefwgvqgscvavasbsbsagfsgsagseag';
// const result = str.split('').reduce((acc, item) => {
//   acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1);
//   return acc;
// }, {});
// console.log(result);

// ===============================================

// const arr = ['Honda', 'BMW', 'Ferrari'];

// function logCars(arr) {
//   const result = arr.reduce(
//     (acc, car, idx) => {
//       return acc + `${idx + 1} - ${car} \n`;
//     },
//     arr.length
//       ? `All cars quantity ${arr.length}: \n`
//       : `Sorry, there is no auto`
//   );
//   return result;
// }
// // console.log(logCars(['Honda', 'BMW', 'Ferrari']));
// console.log(logCars([]));
