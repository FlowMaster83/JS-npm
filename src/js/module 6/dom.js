// тегов h1 может быть много, может быть путаница, по id также не удобно
// при работе с тегами, используем console.dir

const title = document.querySelector('.js-title');
// // если неправильно написать класс, будет null

// // два типа тегов:
// // 1. комуникация (взаимодействие, ввод): input
// // 2. текст: h1, p, button, списки и тд.

// // нужные свойства:
// // textContent - работа с содержанием тега
// // classList (add, remove, toggle - добавить если нет, удалить, если нету)
// // dataset - работа с атрибутами

// // Переписать содержание тега
// title.textContent = 'Hello';

// ===============================================

// // переписать имя класса
// // в CSS есть такой класс, который меняет цвет на красный, по этому h1 будет красным цветом
// title.classList.add('title-color'); // красный
// title.classList.remove('title-color'); // черный
// title.classList.toggle('title-color'); // красный
// title.classList.toggle('title-color'); // черный
// title.classList.toggle('title-color'); // красный

// console.dir(title);

// // добавлять style инлайново - плохая практика
// // меняется не элемент, а рендерится вся разметка полностью (проблема лишнего ресурса)

// title.style.fontSize = '50px';
// title.style.color = 'green';

// ===============================================

// // атрибуты:
// // 1. системные: hidden, disable, id (уже имеют своё поведение, зарезервированные свойства)
// // 2. дата-атрибуты - хранить инфо для себя в будущем

// console.dir(title.dataset.id); // title

// // для системных атрибутов уже зарезервировано свойство
// console.log(title.hidden); // true
// console.log(title.id); // test

// title.hidden = false;

// возможность работы с аттрибутами - сейчас не используется
// console.dir(title.getAttribute('data-id'));
// title.removeAttribute('hidden');
// title.setAttribute('hidden', 'false');

// ===============================================

// // нужные свойства:
// // 1. children (только элементы без переносов)
// // 2. childNotes (указаны li и text - перенос строк) - не используется

// const list = document.querySelector('.js-list');
// console.dir(list.children);
// console.log([...list.children]); // получаем массив li (максимально спускаемся на 2 уровня)

// ===============================================

// // "живая" и "неживая" коллекция

// const list = document.querySelector('.js-list');

// // 1 вариант
// const li = document.createElement('li');
// li.textContent = list.children.length + 1;
// list.append(li);
// console.log(li);

// const div = document.createElement('div');
// const h2 = document.createElement('h2');

// h2.textContent = 'Hello';
// li.append(div);
// li.append(h2);
// list.append(li);

// ===========

// // 2 вариант (шаблонная строка)
// const li = `<li class="title-color" data-id="123">${
//   list.children.length + 1
// }<div>
// <h2>Hello</h2>
// <div>
// </li>`;

// list.insertAdjacentHTML('beforeend', li);
// console.dir(list);

// если есть готовый элеметнт через createElement, используем append
// если создаем HTML-подобную разметку, используем insertAdjacentHTML

// ===========

// const list = document.querySelector('.js-list');
// const listStatic = document.querySelectorAll('li'); // статическая коллекция - возврат тех элементов, которые были с самого начала
// const listDynamic = document.getElementsByTagName('li'); // динамическая коллекция - всегда возвращает актуальные данные (бесконечный скролл)
// console.log(listStatic); // NodeList(3) [li, li, li]
// console.log(listDynamic); // HTMLCollection(3) [li, li, li]

// const li = document.createElement('li');
// li.textContent = list.children.length + 1;
// list.append(li);

// const li2 = document.createElement('li');
// li.textContent = list.children.length + 1;
// list.append(li2);

// console.log(listStatic); // NodeList(3) [li, li, li]
// console.log(listDynamic); // HTMLCollection(3) [li, li, li, li, li]

// ===============================================
