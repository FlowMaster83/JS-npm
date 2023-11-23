// slug in URL

const title = "Top 10 benefits of React framework";

// приводим книжнему регистру
const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// разбиваем в массив
const words = normalizedTitle.split(" ");
// console.log(words);

// сшиваем с тире
const slug = words.join("-"); // метод массива
// console.log(slug);

// chaining (цепочка)
const slug1 = title.toLowerCase().split(" ").join("-"); // вызовы: split и join вызываются на результате вызова предыдущего метода, а не на title
console.log(slug1);
