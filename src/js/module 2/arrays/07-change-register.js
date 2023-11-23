// split
// берет строку и разбивает ее в массив

const string = "JavaScript";
const letters = string.split("");
let invertedString = "";

console.log(letters);

// сделать инверсию регистра

for (const letter of letters) {
  console.log(letter);

  //   через if

  //   if (letter === letter.toLowerCase()) {
  //     console.log("Lower Case - ", letter);
  //     invertedString += letter.toUpperCase();
  //   } else {
  //     console.log("Upper Case - ", letter);
  //     invertedString += letter.toLowerCase();
  //   }

  //   через тернарный оператор

  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}

console.log("invertedString: ", invertedString);
