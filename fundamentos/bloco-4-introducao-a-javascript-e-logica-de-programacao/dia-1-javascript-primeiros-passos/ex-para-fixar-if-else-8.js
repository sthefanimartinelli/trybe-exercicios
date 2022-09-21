// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const a = 2;
const b = 2;
const c = 2;

let isOdd = false;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    isOdd = true;
}

console.log(isOdd);