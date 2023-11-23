// сумма элементов 2 массивов
// метод concat - не деструктивный (массивы не меняются) - join не подойдет, тк возвращает строку

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const numbers = array1.concat(array2, [1, 2, 3, 4, 5], [90, 5, 90, 9, 1, 90]);
console.log(numbers);

for (const number of numbers) {
  total += number;
}
console.log(total);
