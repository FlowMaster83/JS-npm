// switch (ТОЛЬКО ДЛЯ РАВЕНСТВА, НЕ РАБОТАЕТ С БОЛЬШЕ ИЛИ МЕНЬШЕ)
// преимущества: удобное выделение кейсов и более структурированный аналог if...else

// // price for rooms depending of stars of hotels: 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
// const stars = 1;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Нет такого количества звезд");
// }

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   // case по умолчанию, выводит сообщение, если не один case не выполняется
//   default:
//     console.log("Нет такого количества звезд");
// }

// console.log(price);
// // // break прерывает выполнение кода дальше, если нашел 1е совпадение

// // если кейсы одинаковые:
// // price for rooms depending of stars of hotels: 1, 2 - 20$, 3, 4 - 30$, 5 - 120$

// const stars = 1;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Нет такого количества звезд");
// }

// console.log(price);

// const stars = 1;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log("Нет такого количества звезд");
// }

// console.log(price);

// ЗАДАЧА:
// Выбор опций доставки товаров:
// 1 - самовывоз
// 2 - курьер
// 3 - почта

// Вы сможете забрать товар завтра с 12:00 в нашем офисе
// Курьер доставит заказ завтра с 9:00 до 18:00
// Посылка будет Вам отправлена сегодня
// Вам перезвонит менеджер

const option = 1;
let message;

switch (option) {
  case 1:
    message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
    break;

  case 2:
    message = "Курьер доставит заказ завтра с 9:00 до 18:00";
    break;

  case 3:
    message = "Посылка будет Вам отправлена сегодня";
    break;

  default:
    message = "Вам перезвонит менеджер";
}

console.log(message);
