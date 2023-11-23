// const button = document.querySelector('.js-click');
// const container = document.querySelector('.js-container');

// // addEventListener принимает два параметра - 'событие' и коллбек
// container.addEventListener('click', onClick);

// // currentTarget - свойство объекта event
// // коллбек
// let step = 0;
// // event можно не оглашать
// function onClick(event) {
//   step += 5;
//   console.log(event.currentTarget);
//   container.style.marginLeft = `${step}px`;
//   container.style.marginTop = `${step}px`;
// }

// ===========

// const title = document.querySelector('.js-title');
// const maxLength = 13;
// const totalLength = maxLength + 3;
// title.addEventListener('click', onClick);

// function onClick(event) {
//   const title = event.currentTarget;
//   const string = title.textContent.slice(0, maxLength);

//   if (title.textContent.length > totalLength) {
//     const remainder = title.textContent.slice(maxLength);
//     title.setAttribute('data-title', remainder);
//     title.textContent = string + '...';
//   } else {
//     const remainder = title.dataset.title;
//     title.textContent = string + remainder; // ...или getAttribue
//     console.log(remainder);
//   }
// }

// ===========

// // почему не использовать внешнюю переменную внутри коллбека
// const title = document.querySelector('.js-title');
// const title1 = document.querySelector('.js-title1');
// const title2 = document.querySelector('.js-title2');
// const title3 = document.querySelector('.js-title3');

// title.addEventListener('click', onClick);
// title1.addEventListener('click', onClick);
// title2.addEventListener('click', onClick);
// title3.addEventListener('click', onClick);

// const maxLength = 13;
// const totalLength = maxLength + 3;

// function onClick(event) {
//   const title = event.currentTarget; // здесь новая внутреняя переменная (масштабирование)
//   const string = title.textContent.slice(0, maxLength);

//   if (title.textContent.length > totalLength) {
//     const remainder = title.textContent.slice(maxLength);
//     title.setAttribute('data-title', remainder);
//     title.textContent = string + '...';
//   } else {
//     const remainder = title.dataset.title;
//     title.textContent = string + remainder; // ...или getAttribue
//     console.log(remainder);
//   }
// }

// ===============================================
// // работа с input (change, blur, input)

// const userName = document.querySelector('.js-input');
// // userName.addEventListener('input', onInput);
// userName.addEventListener('change', onInput);

// // снова currentTarget
// // две категории - текст и коммуникация
// // исп значение value

// function onInput(event) {
//   console.dir(event.currentTarget.value);
// }

// ===========

// preventDefault() - убирает любое нативное поведение, типа как в <submit>, <a> и тд
// const form = document.querySelector('.js-form');
// form.addEventListener('submit', onSubmit);

// форма несёт импуты автоматически, искать каждый через querySelector не надо, использовать elements
// console.dir(form);

// function onSubmit(event) {
//   event.preventDefault();

//   const { userName, userEmail, userAge } = event.currentTarget.elements;

//   // возвращаем объект для бекенда
//   const data = {
//     name: userName.value,
//     email: userEmail.value,
//     age: userAge.value,
//   };

//   console.log(data);
// }

// ===========

// события клавиатуры вешаются на документи
// code - не изменяется от раскладки, key - изменяется от раскладки, keyCode - не используется (устаревший)

const container = document.querySelector('.js-container')

window.addEventListener('keydown', onKey)

function onKey(event) {
  console.log(event);
//   if(event.code === `Escape` || event.code ==='Enter') {
// container.classList.toggle('tog')
//   }

  if(event.ctrlKey && event.code === 'KeyC') {
    alert('Copy?')
    return
  }
}

