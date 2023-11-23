// метод splice - деструктивный (возвращет новый массив)
// удалить, добавить, обновить
const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];

// // удаление (по индексу), метод indexOf()
// const cardToRemove = "Card 3";
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1); // (позиция, с которого надо начать удаление, количество удаляемых элементов)
// console.table(cards);

// // добавление по индексу
// const cardToInsert = "Card 6";
// const index = 3;

// cards.splice(index, 0, cardToInsert); // (позиция, количество удаляемых - 0, через запятую вставляем элементы)
// console.table(cards);

// обновление
const cardToUpdate = "Card 4";
cards.splice(1, 1, 555); // позиция, удаление, замена
console.table(cards);

// push, pop, splice - деструктивные методы
