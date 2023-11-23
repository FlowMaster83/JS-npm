// const playlist = {
//   caption: "My playlist",
//   raiting: 5,
//   tracks: ["track 01", "track 03", "track 03"],
//   trackCount: 3,
// };

// // деструктуризация (распаковка) (фигурные скобки слева от равно, в которых создается локальная переменная)
// // буквально: из объекта playlist свойства деструктурируются в локальные переменные с такими же именами

// const {
//   caption,
//   raiting,
//   tracks,
//   // изменение имени переменной и добавление значения в свойство, если его там нет:
//   trackCount: numberOfTracks = 0,
//   author = "user",
// } = playlist;

// // если свойства в объекте нет, а оно должно быть, то в деструктурированном свойстве необходимо поставить значение по умолчанию (объект не меняется)
// // если свойство есть, то значение переменной в деструктуризации - игнорируется
// // пример author = "user"

// console.log(caption, raiting, numberOfTracks, author);

// // в деструктуризации действует то же правило про примитивы и сложные типы:
// // если примитив - делается копия (независимое значение)
// // если сложный тип - кладётся ссылка на оригинал

// ==================================================================

// // глубокая деструктуризация
// const profile = {
//   userName: "David James",
//   tag: "davja",
//   city: "London",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   userName,
//   tag,
//   city,
//   //   деструктуризация объекта в объекте (глубокая):
//   stats: { followers, views, likes },
// } = profile;
// console.log(userName, tag, city, followers, views, likes);
// // David James davja London 5603 4827 1308

// ==================================================================

// // в объектах деструктуризация происходит в произвольном порядке
// // деструктуризация массивов происходит по порядку
// const rgb = [155, 100, 80];
// const [red, , blue] = rgb;

// console.log(red, blue);

// ==================================================================

// // получение наибольшего рейтинга
// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// // const ratings = Object.values(authors); // обращение к значениям свойств объекта
// // console.log(Math.max(...ratings)); // поиск самого большого значения
// // такое решение не дает ключей значений

// ==================================================================

// // другой способ:
// const entries = Object.entries(authors);
// console.log(entries);

// for (const [name, rating] of entries) {
//   console.log(name, rating);
// }

// из объекта вытянуть определённое количество свойств в локальные переменные
// все остальные свойства собрать в другой объекта
// const profile = {
//   userName: "David James",
//   tag: "davja",
//   city: "London",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { userName, tag, city, ...restProps } = profile;

// console.log(userName, tag, city);
// console.log(restProps);
// console.log(profile);

// ==================================================================

// патерн "объект настроек"
const fn = function (params) {};

fn({ age: 10, friends: 5, isOnline: true, hobbies: [], games: {}, rating: 6 });
fn(10, 5, true, [], {}, 6); // нечитабельный синтаксис

// делаеть объект настроек необходимо, когда у функции 3 и больше аргументов
const showProfileInfo = function ({
  userName,
  tag,
  city,
  stats: { followers, views, likes },
  ...restProps
} = userProfile) {
  console.log(userName, tag, city, followers, views, likes);
};

const profile = {
  userName: "David James",
  tag: "davja",
  city: "London",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

showProfileInfo(profile);
