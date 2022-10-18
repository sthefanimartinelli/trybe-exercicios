// Crie uma função que receba um número e retorne seu fatorial.

const factorial = (number) => {
  let result = 1;
  for (let index = 1; index <= number; index += 1) {
    result *= index;
  }
  return result;
}

console.log(`Esse é o fatorial ${factorial(4)}`);

const factorial2 = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial2(5));