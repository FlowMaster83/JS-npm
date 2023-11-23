// все элементы интерфейса html это объекты
const btnAdd = document.querySelector('button[data-add]');
const resetBtn = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');

let total = 0;

// вешаем слушателя события
// btnAdd.addEventListener('click', function () {
//     console.log('clicked on Add');

//     const value = Number(valueInput.value);
//     console.log(value);

//     total += value;
//     outputEl.textContent = total;
//     valueInput.value = '';
// });

// resetBtn.addEventListener('click', function () {
//     total = 0;
//     outputEl.textContent = total;
// });

// // 
// btnAdd.addEventListener("click", function () {
//   console.log("ckicked on Add");
// });

// // btnAdd.textContent = 'wrw'
// console.log(btnAdd.textContent);