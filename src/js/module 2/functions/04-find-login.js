// // самостоятельно:
// // x, y - параметры функции, в которых записываются аргументы
// const functionSum = function (x, y) {
//   // тело функции
//   const result = x + y;

//   //   оператор return (если отсутствует (когда нет необходимости возвращать результат вычислений), возвращается undefined - неявный возврат)
//   return result;
// };

// const result = functionSum(3, 5); // обьявление функции и аргументы, которые присваиваются параметрам
// console.log(result);

console.log("");

const logins = ["m4ngoDoge", "kiwidab3st", "poly1scute", "aj4xth3m4n"];

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `User ${loginToFind} is found`;
//     }
//   }

//   return `User ${loginToFind} not found`;
// };

// решение через тернарный оператор
const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `User ${loginToFind} is found`
    : `User ${loginToFind} not found`;
};

console.log(findLogin(logins, "avocod3r"));
console.log(findLogin(logins, "kiwidab3st"));
console.log(findLogin(logins, "jam4L"));
console.log(findLogin(logins, "poly1scute"));
