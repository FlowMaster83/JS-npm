// spread

// // concat
// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// console.log(numbers);

// // spread (аналог concat) расплыение (не деструктивная операция - массив, который надо добавить в другок массив - не изменяется)
// const numbers2 = [5, 0, 10, ...[1, 2, 3, 1000, 5000], 4, 5, ...[4, 5, 6]];
// console.log(numbers2);
// // rest - повторить

// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.max(1, 4, 17, 5, 6));

// // поиск самой большой и маленькой температуры
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

// // если элементы массива это примитивы - создается копия
// const a = [1, 2, 3];
// const b = [...a]; // "a" скопировано в "b"
// // независимые массивы (элементы скопированы (расплылены))
// console.log(a === b); // false

// // отступление:
// const x = [1, 2, 3];
// const y = [x];
// console.log(y);
// // это массив, нулевой индекс которого содержит массив x

// // отступление:
// const x = [1, 2, 3];
// const y = [x];
// console.log(y);
// // это массив, нулевой индекс которого содержит массив x

// // если элементы массива это объекты, создается ссылка на один и тот же объект:
// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a]; // "a" скопировано в "b"

// // независимые массивы (элементы скопированы (расплылены))
// console.log(a[0] === b[0]); // true, в обоих массивах лежит ссылка на один и тот же объект

// console.log(a === b); // false, массивы разные
// console.log("a", a); // [{ a: 1 }, { b: 2 }, { c: 3 }]
// console.log("b", b); // [{ a: 1 }, { b: 2 }, { c: 3 }]

// a[0].x = 1000;

// console.log("a", a); // [{ x: 1000 }, { b: 2 }, { c: 3 }]
// console.log("b", b); // [{ x: 1000 }, { b: 2 }, { c: 3 }]

// // ПОМНИТЬ !!! что передаем: сложный тип или примитив? результат разный

// const last = [1, 2, 3];
// const current = [4, 5, 6];
// const next = [7, 8, 9];

// const allByConcat = last.concat(current, next);
// console.log(allByConcat); // не использовать

// const allBySpread = [...last, ...current, ...next];
// console.log(allBySpread); // проще

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b); // старый способ
// console.log(c);

// современный способ
const d = {
  ...a,
  x: 10,
  ...b,
  y: 20,
};

// перезапись последнего свойства
console.log(d); // x: 0, y: 20, z: 3

// в массиве важен порядок распыления
// в объекте порядок распыления влияет на количество одинаковых свойств

const defaultSettings = {
  theme: "light",
  showNotification: true,
  hideSidebar: false,
};

const userSettigns = {
  showNotification: false,
  hideSidebar: true,
};

const result = {
  ...defaultSettings,
  ...userSettigns,
};

console.log(result); // {theme: 'light', showNotification: false, hideSidebar: true}
