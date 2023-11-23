// одна строка, через запятую, for, join()
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// let string = "";

// for (const friend of friends) {
//   string += friend + ",";
// }

// // Метод slice() отрезает символы в строке - (slice(indexStart, indexEnd))
// // возвращет новую копию (не деструктивный метод)
// string = string.slice(0, string.length - 1);
// console.log(string);

// метод join
// сшивает массив (не изменяя его) и записывает в строку
const string = friends.join(", ");
console.log(string);
