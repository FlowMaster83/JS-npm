// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   this.changePrice = function (newPrice) {
//     this.price = newPrice;
//   };
// };

// class Car1 {
//   constructor({ brand, model, price } = {}) {
//     console.log('Constructor');
//     console.log(this);
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// console.dir(Car1);

// const carInstance = new Car1({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });

// // getPrototypeOf
// console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);
// console.log(carInstance);
