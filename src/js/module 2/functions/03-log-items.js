const logItems = function (items) {
  for (const item of items) {
    console.log(item);
    // return не нужен, так как нет необходимости вернуть какой-то явный результат
  }
};

logItems(["Mango"]);
logItems([1, 2, 3, 4, 5]);
