// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const a = 5;
const b = 3;
const c = 7;

let isEven = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    isEven = true;
}

console.log(isEven);