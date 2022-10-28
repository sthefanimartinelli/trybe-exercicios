const numbers = [50, 85, -30, 3, 15];

// const bigger = numbers.reduce((bigger, number) => {
//   console.log(`valor do bigger é ${bigger} e o de number é ${number}`);
//   return (bigger > number) ? bigger : number;
// }, 0); 

// console.log(bigger); // 85

// const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => {
  console.log(`valor do bigger é ${bigger} e o de number é ${number}`);
  return (bigger > number) ? bigger : number
};

// const bigger = numbers.reduce(getBigger, 100);
// console.log(bigger); // 85

// Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array:

const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenNumbers = numbers2.filter((number) => number % 2 === 0).reduce((number1, number2) => number1 + number2);

console.log(evenNumbers);

