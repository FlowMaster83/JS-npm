// свойства объекта - ключ (всегда строка): значение
// одинаковые ключи перезаписываются последним значением

// // 3 случая, когда такой синтаксис это объект, а не область видимости
// const x = {}; // 1

// const fn = function (myObject) { // 2
//   console.log(myObject);
// };

// fn({ a: 1 })

// const rtfm = function () { // 3
//     return {a: 5}
// }

// const playlist = {
//   name: "My playlist",
//   raiting: 5,
//   tracks: ["track 01", "track 03", "track 03"],
//   trackCount: 3,
// };

// console.log(playlist);

// // добавление новых свойств
// playlist.qwe = 5;
// playlist.raiting = 10;
// console.log(playlist);

// // Доступ к свойству
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

// // если ключ находится в переменной
// const propertyName = "tracks";

// console.log(playlist.propertyName); // undefined, потому что ищет ключ с таким имененем, а такого в данном случае нет (не определено)

// // если значение ключа находится в переменной
// console.log(playlist[propertyName]); // ['track 01', 'track 03', 'track 03']

// // короткая запись свойств
// // получение данных и создание объекта
// const username = "Mango";
// const email = "mango@gmail.com";

// const signupData = {
//   //   username: username, // переменная с 'Mango'
//   username, // сокращенная запись от username: username
//   email,
// };

// console.log(signupData);

// // вычисляемые свойства - редкий синтаксис
// // <input name="color" value="tomato">
// const inputName = "color";
// const inputValue = "tomato";

// const colorPickerData = {
//   [inputName]: inputValue, // {color: tomato}
// };

// console.log(colorPickerData);

// // Ссылочный тип
// // также, как и с массивами
// const a = { x: 1, y: 2 };
// const b = a;

// a.c = 100;

// console.log(a); // {x: 1, y: 2, c: 100}
// console.log(b); // {x: 1, y: 2, c: 100}

// console.log(b === a); // true

// Массивы и функции это объекты:
// Объекты - это базовый тип данных JS
const a = [1, 2, 3];
a.hello = ":)";
console.log(a);

const fn = function () {
  console.log("hello");
};

fn.hello = ":)";

console.dir(fn.hello);
