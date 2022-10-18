const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
  } 
  return fraseArray.join(' ');
};

// console.log(substituaX('Fani'));

const minhasSkills = (result) => {
  const skills = ['html', 'css', 'javascript'];
  let concat = `${result}

  Minhas três principais habilidades são:
  `;
  for (let index = 0; index < skills.length; index += 1) {
    concat = `${concat}
    - ${skills[index]}`;
  }
  return concat;
}

console.log(minhasSkills(substituaX('Fani')));