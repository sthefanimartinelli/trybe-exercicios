// 🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

const a = 90; 
const b = 15;
const c = 45;
let soma = a + b + c;

if (a < 0 || b < 0 || c < 0) {
    console.log('Erro, valor de ângulo inválido');
} else if (soma === 180) {
    console.log(true);
} else {
    console.log(false);
}