// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   inputLine = inputLine + symbol;
// };
// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   console.log(inputLine);
// };

// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

// let size = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
//   console.log(inputLine);
//   inputLine = inputLine + symbol;
// };


// Agora inverta o lado do triângulo

let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1){
    for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
        if (columnIndex < inputPosition){
            inputLine = inputLine + ' ';
        } else {
            inputLine = inputLine + '*';
        }
    } 
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
}; 





