// 1. Crie um algoritmo que imprima na tela o fatorial de 10.

// let numeroFatorial = 10;
// let fatorial = 1;

// for (let index = 1; index <= numeroFatorial; index += 1) {
//     fatorial = fatorial * index;
// }

// console.log(fatorial);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// let wordInverted = '';

// for (let index = word.length - 1; index >= 0; index -= 1) {
//     wordInverted = wordInverted + word[index];
// }

// console.log(wordInverted);

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let maiorPalavra = array[0];
// let menorPalavra = array[0];

// for (let index = 1; index < array.length; index += 1) {
//     if(array[index].length > maiorPalavra.length){
//         maiorPalavra = array[index];
//     } 

//     if(array[index].length < menorPalavra.length){
//         menorPalavra = array[index];
//     } 
// }

// console.log(maiorPalavra);
// console.log(menorPalavra);

// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorPrimo = 2;
let arrayPrimos = [];

for (let index = 2; index <= 50; index += 1) {
    let isPrimo = true;
    for (let indexDivisor = 2; indexDivisor < index; indexDivisor += 1) {
        if (index % indexDivisor === 0) {
            isPrimo = false;
        }
    }
    if (isPrimo === true) {
        arrayPrimos.push(index);
    }
}

for (let indexArrayPrimos = 0; indexArrayPrimos < arrayPrimos.length; indexArrayPrimos += 1) {
    if (arrayPrimos[indexArrayPrimos] > maiorPrimo) {
        maiorPrimo = arrayPrimos[indexArrayPrimos];
    }
}

console.log(maiorPrimo);