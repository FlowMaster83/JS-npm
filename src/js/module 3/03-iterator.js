const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

// перебор объекта
// доступ к ключам
const keys = Object.keys(feedback);
console.log(keys);

for (const key of keys) {
  console.log(key);

  totalFeedback += feedback[key];
}

console.log("Total feedback:", totalFeedback);

// доступ к значениям
const values = Object.values(feedback);
console.log(values);

for (const value of values) {
  console.log(value);

  totalFeedback += value;
}

console.log("Total feedback:", totalFeedback);
