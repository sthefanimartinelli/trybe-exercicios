// Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const a = 10;
const b = 21;
const c = 14;

if (a > b && a > c) {
    console.log(a + ' é o maior número');
} else if (b > a && b > c) {
    console.log(b + ' é o maior número');
} else {
    console.log(c + ' é o maior número');
}