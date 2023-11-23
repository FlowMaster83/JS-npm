// 06.08.2023

// const smartphones = [
//   {
//     brand: "Samsung",
//     device: "A5",
//     battery: 3000,
//   },
//   {
//     brand: "iPhone",
//     device: "15",
//     battery: 4000,
//   },
//   {
//     brand: "Xiaomi",
//     device: "Redmi 10",
//     battery: 5000,
//   },
// ];

// let total = 0;

// for (const smartphone of smartphones) {
//   // console.log(smartphones);
// }

// const keys = Object.keys(smartphones);
// const values = Object.values(smartphones);

// for (const key of keys) {
//   // console.log(keys);
// }

// // add new object to array
// const newDevice = {};
// newDevice.brand = "Nokia";
// newDevice.device = "C5";
// newDevice.battery = 3000;

// smartphones.push(newDevice);

// // summary of batteries quantity
// let totalBattery = 0;

// const brandsNames = [];
// const deviceName = [];
// const batteryQty = [];

// for (const smartphone of smartphones) {
//   brandsNames.push(smartphone.brand);
//   deviceName.push(smartphone.device);
//   batteryQty.push(smartphone.battery);

//   totalBattery += smartphone.battery;
// }

// // console.log(brandsNames);
// // console.log(deviceName);
// // console.log(batteryQty);

// console.log(totalBattery);

// // const average = totalBattery / smartphones.length;
// // console.log(average);

// ===============================================

// const plugin = {
//   brand: "NI",
//   name: "KONTAKT",
//   bitrate: 3000,
// };

// plugin.database = "full";

// const keys = Object.keys(plugin); // array of keys
// const values = Object.values(plugin); // array of values
// const entries = Object.entries(plugin); // array of entries

// const plugin2 = Object.create(plugin);
// plugin2.sound = "true";

// // console.log(plugin.hasOwnProperty("brand")); // true
// // console.log(plugin.hasOwnProperty("database")); // true
// // console.log(plugin2.hasOwnProperty("sound")); // true
// // console.log(plugin.hasOwnProperty("sound")); // false

// const anotherPlugin = {
//   brand: "Bass Notation",
//   name: "Many Bass",
//   bitrate: 3000,
// };

// // console.log(anotherPlugin.hasOwnProperty("brand")); // true

// anotherPlugin.database = "full";

// const allPlugins = [];
// allPlugins.push(plugin, anotherPlugin);

// let totalBitrate = 0;

// for (const plugin of allPlugins) {
//   totalBitrate += plugin.bitrate;
// }

// console.log(totalBitrate);

// ===============================================

// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги - свойство books");
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");

// // ===============================================

// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }

// multiply(2, 3, 6);
// console.log(multiply);

// ===============================================

// multiply(2, 3, 2); // объявление функции не работает до функционального выражения

// const result = function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
//   return x * y * z;

//   console.log("not in console, because return");
// }

// multiply(2, 3, 2); // 12


// // объявление функции работает до самой функции, тк функция не является функциональным выражением
// adding(2, 3, 2);

// function adding(a, b, c) {
//   console.log(`result ${a + b + c}`);
// }

// ===============================================