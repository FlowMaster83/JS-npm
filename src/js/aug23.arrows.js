// const arr = [2, 6, 1, 7, 3];

// function each(arr, callback) {
//   let total = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {
//     total = callback(total, arr[i]);
//   }
//   return total;
// }

// console.log(each(arr, add));
// console.log(each(arr, sum));
// console.log(each(arr, division));

// function add(first, second) {
//   return first + second;
// }

// function sum(first, second) {
//   return first * second;
// }

// function division(first, second) {
//   return first / second;
// }

// ===============================================

// стрелочные функции
// declaration
// foo();
// function foo() {
//   console.log(foo);
// }

// // expression
// const boo = function () {
//   console.log(boo);
// };

// boo();

// arrow
// псевдомассив arguments отсутствует (можно через ...rest)
// const foo = (...rest) => {
//   console.log(rest);
// };

// foo(1, 2, 3, 4, 5);
// foo(1, 2, 3, 4, 331, 35415, 5155);

// ===============================================

// const arr = [2, 6, 1, 7, 3];
// // (+) очень маленькая функция, простое действие, не надо фигурных скобок, return автоматический (неявный возврат)
// // (+) короткий синтаксис
// // (-) проблема с this (отсылается на глобальный объект window)
// const add = (first, second) => first + second;
// const multiply = (first, second) => first * second;
// const division = (first, second) => first / second;

// function each(arr, callback) {
//   let total = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {
//     total = callback(total, arr[i]);
//   }
//   return total;
// }

// console.log(each(arr, add));
// console.log(each(arr, multiply));
// console.log(each(arr, division));

// // function add(first, second) {
// //   return first + second;
// // }

// // function sum(first, second) {
// //   return first * second;
// // }

// // function division(first, second) {
// //   return first / second;
// // }

// ===============================================

// const user = {
//   userName: "Test user",
//   say() {
//     console.log(`Hello ${this.user}`); // undefined
//   },
//   sayHello: () => {
//     // (-) проблема с this (отсылается на глобальный объект window)
//     console.log(`Hello ${user.userName}`); // Hello Test user
//   },
// };

// user.say();
// user.sayHello();

// ===============================================

// function createProduct(obj, callback) {
//   const product = {
//     // создаем id
//     id: Date.now(),
//     // распыляем оставшийся объект через ...spread
//     ...obj,
//   };
//   // вызов колбека, принимающего product
//   callback(product);
//   console.log(product); // id + ...obj
// }

// function logProduct(obj) {
//   console.log(`Product ${obj.name}`); // имя продукта
// }

// // функция с деструктуризацией, чтобы не писать obj.price и obj.quantity
// function logTotalPrice({ price, quantity }) {
//   console.log(`Total Price ${price * quantity}`); // подсчёт стоимости
// }

// createProduct(
//   {
//     name: "apple",
//     price: 30,
//     quantity: 3,
//   },
//   logProduct
// );
// createProduct(
//   {
//     name: "lemon",
//     price: 20,
//     quantity: 5,
//   },
//   logTotalPrice
// );

// ===============================================

const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 400,

  // прописываем методы
  widthdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      // вызов колбека
      onError(`TRANSACTION_LIMIT ${TRANSACTION_LIMIT}`);
      return;
    } else if (this.balance < amount) {
      // вызов колбека
      onError('Not enough in the account');
      return;
    }

    this.balance -= amount;
    onSuccess(`Transaction complete ${amount}, balance ${this.balance}`);
  },

  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`TRANSACTION_LIMIT ${TRANSACTION_LIMIT}`);
      return;
    } else if (amount <= 0) {
      onError(`Nice try Bro 😂`);
      return;
    }

    this.balance += amount;
    onSuccess(`Added ${amount}, balance ${this.balance}`);
  },
};

function handleSuccess(message) {
  console.log(`Success! ${message}`);
}

function handleError(message) {
  console.log(`Error! ${message}`);
}

account.widthdraw(2000, handleSuccess, handleError);
account.widthdraw(600, handleSuccess, handleError);
account.widthdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);

// ===============================================
