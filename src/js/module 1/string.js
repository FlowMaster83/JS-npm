const guestName = 'David';
const guestSecondName = 'Moyes';
const room = 215;
const type = 'VIP';

// шаблонная строка необходима, когда в нее нужно подставлять значения
const message = `Guest ${guestName} ${guestSecondName} meets ${type} room No${room}`;
console.log(message);

console.log('');
// // нормализация
// let normalize = prompt('what brand?');
// normalize = normalize.toLowerCase();
// console.log(normalize);

// первая - прописная
let brand = 'SamSUnG';
console.log(brand[4]);
// метод slice "отрезает символы"
console.log(brand.slice(1).toLowerCase());

brand = brand[0] + brand.slice(1).toLowerCase();
console.log(brand); // Samsung

console.log('');

// includes:
const blacklistedWord1 = 'spam';
const blacklistedWord2 = 'sale';
const blacklistedWord3 = 'sho tam';

const string1 = 'Hi, SALE!';
const string2 = 'Hello. This is SPAM!';
const string3 = 'SHO TAM?';

console.log(string1.includes(blacklistedWord1)); // false
console.log(string1.includes(blacklistedWord2)); // false, тк слово sale в lowerCase
console.log(string1.toLowerCase().includes(blacklistedWord2)); // true, тк слово sale нормализовано в toLowerCase()

console.log('');

console.log(string2.includes(blacklistedWord1)); // false, тк слово spam в lowerCase
const normalizedString = string2.toLowerCase(); // нормализация в lowerCase
console.log(normalizedString.includes(blacklistedWord1)); // true

console.log('');

const qwe = string3.toLowerCase(); // нормализация
console.log(qwe.includes(blacklistedWord3)); // true