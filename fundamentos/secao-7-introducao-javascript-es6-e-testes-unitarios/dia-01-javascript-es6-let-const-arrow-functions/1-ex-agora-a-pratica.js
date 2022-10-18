// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
//     console.log(ifScope);
//   } else {
//     const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// Crie uma função que retorne um array em ordem crescente.

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// // console.log(oddsAndEvens.sort(compareNumbers));

// const sortOddsAndEvens = (array) => {
//   for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (array[index] < array[secondIndex]) {
//         let positionIndex = array[index];
//         array[index] = array[secondIndex];
//         array[secondIndex] = positionIndex;
//       }
//     }
//   }
//   return array;
// }
// console.log(sortOddsAndEvens(oddsAndEvens));

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// const sortOddsAndEvens = () => {
//   oddsAndEvens[0] = 2;
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7; 
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;
//   return oddsAndEvens;
// };
// const sortedArray = sortOddsAndEvens();
// console.log(sortedArray);
// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // Utilizando template literals para exibir a mensagem desejada

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const arrayBonus = (array) => {
  return array.sort((a, b) => a - b);
}

const orderedArray = arrayBonus(oddsAndEvens);

console.log(`Os números ${orderedArray} se encontram ordenados de forma crescente!`);