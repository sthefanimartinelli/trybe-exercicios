// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

const sorteio = (sortedNumber, callback) => {
  const randomNumber = Math.ceil(Math.random() * 5);
  console.log(randomNumber);
  return callback(sortedNumber, randomNumber) ? 'Parabéns!' : 'Tente de novo';
};

const isNumberValid = (number1, number2) => (number1 === number2);

console.log(sorteio(5,isNumberValid));