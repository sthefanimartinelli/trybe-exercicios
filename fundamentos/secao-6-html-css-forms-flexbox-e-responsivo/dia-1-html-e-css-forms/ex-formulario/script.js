/* Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().

Crie um botão que limpe as informações contidas nos campos.

(Bônus) A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.

(Bônus) Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: ‘Dados Inválidos’. Caso contrário, a mensagem ‘Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.’ deverá aparecer na tela. */

window.onload = function () {
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFields);
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', handleSubmit);
    const agreement = document.querySelector('#agreement');
    agreement.addEventListener('change', enableSubmit);
  };


function handleSubmit(event) {
event.preventDefault();
const validation = textInputValidation();
if (validation === false) {
    alert('Dados inválidos');
} else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
}
}
  
function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
}

function enableSubmit() {
    const submitBtn = document.querySelector('#submit-btn');
    const agreement = document.querySelector('#agreement');
    submitBtn.disabled = !agreement.checked;
}

function textInputValidation() {
    const email = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || email > 50;
  
    const name = document.querySelector('#fullName').value.length;
    const invalidName = name < 10 || name > 40;
  
    const reason = document.querySelector('#why').value.length;
    const invalidReason = reason > 500;
  
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    }
    else {
      return true;
    }
  }