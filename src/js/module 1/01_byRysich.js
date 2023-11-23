// console.log(3 === '3'); // false
// console.log(3 == '3'); // true

// console.log('mango'.indexOf('m'));

// что возвращает false при приведении к булю
// 1. undefined => false
// 2. null => false
// 3. 0 => false
// 4. NaN => false
// 5. '' => false (пустая строка)
// 6. false => false

// ===========

// // приведение к булю (два способа)
// console.log(Boolean('false')); // true

// // двойная инверсия
// console.log(!!'false'); // true

// console.log(Number('25.7')); // 25.7
// console.log(Number('25.7px')); // NaN

// ===========

// const a = 10;
// a = 5; // Uncaught TypeError: Assignment to constant variable

// let b;
// console.log(b); // undefined

// ===========

// примитивные типы данных (иммутабельные - нельзя мутировать без переопределния):
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null

// let a = 10;
// a = 12;
// a = a + 2;
// a += 2;
// console.log(a); // 16

// ===========

// Математические операторы
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);

// const diff = grapes - apples;
// console.log(diff);

// let students = 100;
// students += 50; // students = students + 50
// console.log(students); // 150

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// ===========

// // Клас Math (сущность, внутри которой есть метод)
// const value1 = 27.3;
// console.log(Math.ceil(value1)); // 28 - округляет всегда вверх

// const value2 = 27.9;
// console.log(Math.floor(value2)); // 27 - округляет всегда вниз

// const value3 = 27.5;
// console.log(Math.round(value3)); // 28 - округляет по математическому приницпу

// ===========

// // Конкатенация - добавление (И ТОЛЬКО) строк к чему-либо
// // ДОБАВЛЕНИЕ - доминирующий тип данных СТРОКА
// const a = 10 + 22 + '11' + 44;
// console.log(a); // 321144 = 10 + 22 = 32 + строка 11 + 44 к строке (число добавляется к строке и результат становится СТРОКОЙ)
// console.log(typeof a); //

// // УМНОЖЕНИЕ - доминирующий тип данных - Number
// const b = 2 * '3';
// console.log(b); // 6
// console.log(typeof b); // number - НЕ пример конкатенации

// // ВЫЧИТАНИЕ - доминирующий тип данных - Number
// const c = 6 - '3';
// console.log(c); // 3
// console.log(typeof c); // number - НЕ пример конкатенации

// ===========

// // приведение к типу данных, с которым хотим работать (в данном случае - к числу)
// const value = 10;
// const value2 = '15';
// const result = value - Number(value2);
// console.log(result); // -5

// ===========

// // Шаблонная строка на смену конкатенации (ES6 since 2015)
// const name = 'Serhii';
// const age = 35;

// const result = `${name} is ${age} years`;
// console.log(result);

// ===========

// Методы строк и чейнинг

// при работе с параметром необходимо понимать:
// понимать сколько пааметров передать,
// какие параметры передать,
// как какой тип данных расчитывает каждый параметр,
// что возвращает

// let weight = '88,3';
// let height = '1.75';

// // замена запятой на точку внутри строки (метод replace()) и приведение строки к числу (Number())
// weight = Number(weight.replace(',', '.'));

// // два варианта приведения к числу
// // унарный плюс (один операнд - некчему прибавлять, бинарный - два операнда и больше)
// height = +height;
// // метод
// height = Number(height);

// // два варианта возведения в степень
// // метод toFixed() - обрезает (НЕ округляет)
// const bmi = Number((weight / height ** 2).toFixed(1));
// // const bmi = `Індекс маси тіла ${weight / Math.pow(height = +height, 2)}`;
// console.log(bmi);

// ===========

// // Операторы сравнений
// console.log(5 > 4); // true
// console.log(10 >= '7'); // true - строка приводится к числу (поведение в операторах <, >, <=, >=)
// console.log('2' > '12'); // true - сравнивает коды символов (unicode 32 > 31)
// console.log('2' < '12'); // false - 32 < 31
// console.log('4' == 4); // true - 4 = 4 - не строгое сравнение (приводим к типу данных)
// console.log('6' === 6); // false - строгое сравнение (строка не равно числа)
// console.log('false' === false); // false
// console.log(1 == true); // true - true приводится к единице, 1 = 1
// console.log(1 === true); // false - разные типы данных
// console.log('0' == false); // true - не строгое сравнение (false приводится к 0)
// console.log('0' === false); // false - строгое сравнение

// console.log('Papaya' < 'papaya'); // true - сравнение строк по символьно 'P' < 'p' (unicode 50 < 70)
// console.log('Papaya' === 'papaya'); // false - строгое сравнение (50 === 70)
// console.log('papaya' < 'papaua'); // false - unicode: p-70, a-61, p-70, a-61, y-79 > u-75
// console.log(undefined == null); // true - оба значения возвращают ноль
// console.log(undefined === null); // false - разные типы данных

// ===========

// Логические операторы

// что возвращает false при приведении к булю
// 1. undefined => false
// 2. null => false
// 3. 0 => false
// 4. NaN => false
// 5. '' => false (пустая строка)
// 6. false => false

// console.log(Number(null)); // 0
// console.log(Boolean(null)); // false

// console.log(Number(undefined)); // Nan
// console.log(Boolean(undefined)); // false

// console.log(Number('')); // 0
// console.log(Boolean('')); // false

// console.log(Number('string')); // NaN
// console.log(Boolean('string')); // true
// console.log(Number('222')); // 222
// console.log(Boolean('222')); // true

// console.log(Number(0)); // 0
// console.log(Boolean(0)); // false
// console.log(Number(222)); // 222
// console.log(Boolean(222)); // true

// ===========

// // && - логическое И

// 1. undefined => false
// 2. null => false
// 3. 0 => false
// 4. NaN => false
// 5. '' => false (пустая строка)
// 6. false => false

// // возвращает значения, которые приводятся к первому false или последнему true
// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(true && 4 && 'kiwi'); // kiwi
// console.log(true && 0 && 'kiwi'); // 0

// || - логическое ИЛИ

// 1. undefined => false
// 2. null => false
// 3. 0 => false
// 4. NaN => false
// 5. '' => false (пустая строка)
// 6. false => false

// // возвращает первое значение, которое приводится к первому true или к последнему false
// console.log(true || 3); // true
// console.log(3 || true || 4); // 3
// console.log('asdasd' || false || 7); // asdasd
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0); // false (null приводится к 0, 0 не больше 0)
// console.log(null || (2 && 3) || 4); // 3

// ===========

// // Значения по умолчанию
// const incomingValue = 5;
// const result = incomingValue + Number('qwerty'); // NaN
// console.log(result);

// const defaultValue = 10;
// // ищет первый true
// const value = result || defaultValue;
// console.log(value);

// Оператор нулевого слияния (??) - ищет только null или undefined
// возвращающий значение правого операнда, если значение левого операнда содержит null или undefined,
// в противном случае возвращается значение левого операнда.

const incomingValue = 5;
let test;
console.log(test); // undefined

const value = test ?? 'some value';
console.log(value); // some value
