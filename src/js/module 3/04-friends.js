// // массив объектов
// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// console.table(friends);

// // !!! ОСОБЕННОСТЬ: при переборе объекта в переменную записывается не копия, а ССЫЛКА на этот объект!!!
// for (const friend of friends) {
//   console.log(friend.online);

//   // добавилось новое свойство (сложный тип, передача по ссылке)
//   friend.newprop = 555;
// }

// console.table(friends);

// ==================================================================

// const byName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log();

//     if (friend.name === friendName) {
//       return "WAS FOUND";
//     }
//   }
// };

// console.log(byName(friends, "Poly"));

// ==================================================================

// const getNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getNames(friends));

// ==================================================================

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: false },
//   { name: "Ajax", online: false },
// ];

// console.table(friends);

// console.log("");
// console.log("online: ");

// const online = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }

//   return onlineFriends;
// };

// console.log(online(friends));

// console.log("");
// console.log("offline: ");

// const offline = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of friends) {
//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }

//   return offlineFriends;
// };

// console.log(offline(friends));

// // ==================================================================

// console.log("");
// console.log("by status: ");
// const getStatus = function (allFriends) {
//   const status = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     if (friend.online) {
//       status.online.push(friend);
//       continue;
//     }
//     status.offline.push(friend);
//   }

//   return status;
// };

// console.log(getStatus(friends));

// // ==================================================================

// console.log("");
// console.log("Count of properties:");
// const x = {
//   a: 1,
//   b: 2,
//   c: 50,
//   d: 100,
// };

// console.log(Object.keys(x).length);

// ==================================================================
