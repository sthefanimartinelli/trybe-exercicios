// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara
// verificaPalindrome('arara')
// Retorno esperado: true
// verificaPalindrome('desenvolvimento')
// Retorno esperado: false

// function isPalindromo(palavra){
//     for (let index in palavra){
//         if (palavra[index] === palavra[palavra.length - 1 - index]){
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

function isPalindromo(palavra){
    let palavraInvertida = palavra.split('').reverse().join('')
    if (palavraInvertida === palavra){
        return true;
    } return false;
}

// console.log(isPalindromo('arara'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function biggestValueIndex(array){

    let biggestValue = array[0];
    let biggestIndex = 0;

    for (let index = 1; index < array.length; index += 1){
        if (array[index] > biggestValue){
            biggestValue = array[index];
            biggestIndex = index;
        }
    } return biggestIndex;
}

// console.log(biggestValueIndex([2, 3, 6, 7, 10, 1]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function lowestValueIndex(array){
    let lowestValue = array[0];
    let lowestIndex = 0;
    for (let index = 1; index < array.length; index += 1) {
        if (array[index] < lowestValue){
            lowestValue = array[index];
            lowestIndex = index;
        }
    } return lowestIndex;
}

// console.log(lowestValueIndex([2, 4, 6, 7, 10, 0, -3]));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function longestNameInArray(array) {

    let nameSize = 0;
    let longestName = '';
    for (let indexArray = 0; indexArray < array.length; indexArray += 1) {
        if (array[indexArray].length > nameSize){
            nameSize = array[indexArray].length;
            longestName = array[indexArray];
        }   
    } return longestName;
}

// console.log(longestNameInArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function mostRepetedNumber(array) {
    let timesRepeted = 0;
    let numberIndex = 0;
    let countNumberRepetition = 0;

    for (let index = 0; index < array.length; index += 1) {
        let storeNumber = array[index];
        for (let index2 = 0; index2 < array.length; index2 += 1) {
            if (storeNumber === array[index2]) {
                countNumberRepetition += 1;
            }
        } 
        
        if (countNumberRepetition > timesRepeted) {
            timesRepeted = countNumberRepetition;
            numberIndex = index;
        } countNumberRepetition = 0;
    } return array[numberIndex];
}

// console.log(mostRepetedNumber([2, 3, 2, 5, 8, 2, 3, 3, 3, 8, 8, 8, 8, 8]));

function maisRepetido(numeros) {
    let num = {};
  
    for (let index = 0; index < numeros.length; index += 1) {
      let valor = numeros[index];
      if (num[valor] === undefined) {
        num[valor] = 1;
      } else {
        num[valor] = num[valor] + 1;
      }
    }
  
    let contRepetido = 0;
    let contNumero = 0;
  
    for (let prop in num) {
      if (contRepetido < num[prop]) {
        contRepetido = num[prop];
        contNumero = prop;
      }
    }
  
    return contNumero;
  }
  
//   console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2