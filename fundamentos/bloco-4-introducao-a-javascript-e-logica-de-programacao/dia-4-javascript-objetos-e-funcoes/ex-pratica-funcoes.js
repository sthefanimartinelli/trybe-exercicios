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
}


console.log(isPalindromo('arara'));
