// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function sum(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function module(a, b) {
    return a % b;
}
// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function biggestNumber(num1, num2) {
    if (num1 > num2) {
        return num1 + ' é o maior que ' + num2;
    } else if (num2 > num1) {
        return num2 + ' é o maior que ' + num1;
    } else {
        return num1 + ' é igual a ' + num2;
    }
}

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function maiorDeTres(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return 'O maior número é: ' + num1;
    } else if (num2 > num1 && num2 > num3) {
        return 'O maior número é: ' + num2;
    } else {
        return 'O maior número é: ' + num3;
    }
}
// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function numberSignal(num1) {
    if (num1 > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

function isTriangle(ang1, ang2, ang3) {
    if (ang1 > 0 && ang1 < 180 && ang2 > 0 && ang2 < 180 && ang3 > 0 && ang3 < 180) {
        if (ang1 + ang2 + ang3 === 180) {
            return true;
        } else {
            return false;
        }
    }   else {
        return 'Erro: ângulo inválido';
    } 
}

