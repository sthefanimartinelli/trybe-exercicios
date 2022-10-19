const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurnoNoite = (objeto, chave, valor) => {
  objeto[chave] = valor;
}

addTurnoNoite(lesson2, 'turno', 'Noite');
// console.log(lesson2);

const listKeys = (objeto) => {
  return Object.keys(objeto);
}

// console.log(listKeys(lesson1));

const sizeObject = (objeto) => Object.keys(objeto).length;

// console.log(sizeObject(lesson1));

const valuesObject = (objeto) => Object.values(objeto);

// console.log(valuesObject(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(allLessons);

// const getNumberOfStudents 
