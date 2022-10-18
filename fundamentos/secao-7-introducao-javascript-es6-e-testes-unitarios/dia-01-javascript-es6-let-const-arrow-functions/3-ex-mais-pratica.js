/* const longestWord = (string) => {
  const wordsArray = string.split(' ');
  let sizeWord = 0;
  let largestWord = ''; 

  for (const word of wordsArray) {
    if (word.length > sizeWord) {
      sizeWord = word.length;
      largestWord = word;
    }
  }
  // for (let index = 0; index < wordsArray.length; index += 1) {
  //   let wordLength = wordsArray[index].length;
  //   if (wordLength > sizeWord) {
  //     sizeWord = wordLength;
  //     largestWord = wordsArray[index];
  //   }
  // }
  return largestWord;
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu' */

// Longestword com sort em uma linha

const longestWord2 = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord2("Antonio foi ao banheiro e não sabemos o que aconteceu"));
