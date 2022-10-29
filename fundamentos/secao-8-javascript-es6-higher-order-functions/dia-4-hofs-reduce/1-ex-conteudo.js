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

const evenNumbers = numbers2.filter((number) => number % 2 === 0)
  .reduce((number1, number2) => number1 + number2);

// console.log(evenNumbers);

// Solução usando apenas reduce:

const sumPair = (accumulator, number) => (number % 2 === 0) ? accumulator + number : accumulator;

const sumNumbers = (array) => array.reduce(sumPair, 0);

// console.log(sumNumbers(numbers)); // 152

/* Agora crie uma função usando os dados dos estudantes, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce! */

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const bestSubject = estudantes.map((estudante) => {
  // const materia = estudante.materias.name;
  const materias = estudante.materias;
  const bestGrade = materias.reduce((bestSubject, cur) => {
    return bestSubject.nota > cur.nota ? bestSubject : cur;
  }, 0)
  return ({name: estudante.nome, materia: bestGrade.name});
});

// console.log(bestSubject);