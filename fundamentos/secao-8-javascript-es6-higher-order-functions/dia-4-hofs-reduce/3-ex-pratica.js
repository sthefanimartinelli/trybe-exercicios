// 🚀 Exercício 3
// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA() {
  let totalOfLettersA = 0;
  names.forEach((name) => {
    const asInEachInWord = name.split('').reduce((totalOfAsInWord, currentLetter) => {
      if (currentLetter.toLowerCase() === 'a') {
        return totalOfAsInWord + 1;
      };
      return totalOfAsInWord;
    }, 0);
    totalOfLettersA += asInEachInWord;
  });
  return totalOfLettersA;
};

console.log(containsA());


// function containsA() {
//   let totalOfLettersA = 0;
//   names.forEach((name) => {
//     const lettersFromName = name.split('');
//     totalOfLettersA += lettersFromName.reduce((lettersAInName, currentLetter) => {
//       if (currentLetter.toLowerCase() === 'a') {
//         return lettersAInName + 1;
//       }
//       return lettersAInName;
//     }, 0);
//   });
//   return totalOfLettersA;
// }