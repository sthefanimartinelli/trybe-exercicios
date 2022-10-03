function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
// Parte 1: 
/*
Crie um calendário dinamicamente.

O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.

A tag <ul> deve conter o id 'days'
Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
*/

  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMonth() {

    const ulDays = document.getElementById('days');
    ulDays.classList.add('days');

    const listOfDays = document.getElementsByClassName('days')[0];
    //   console.log(listOfDays);
    
    for (let index = 0; index < decemberDaysList.length; index += 1) {
        const dayOfMonth = decemberDaysList[index];
        const day = document.createElement('li');
        day.innerText = dayOfMonth;
        day.classList.add('day');
        if (dayOfMonth === 24 || dayOfMonth === 25 || dayOfMonth === 31) {
            day.classList.add('holiday'); 
        }
        if (dayOfMonth === 4 || dayOfMonth === 11 || dayOfMonth === 18 || dayOfMonth === 25) {
            day.classList.add('friday'); 
        }
        listOfDays.appendChild(day);    
    }
  }
  createDaysOfTheMonth();

/*
Parte 2

Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
Sua função deve receber um parâmetro com a string 'Feriados'
Adicione a este botão a ID "btn-holiday"
Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
*/


function holidayButton(buttonName) {
    const buttonHoliday = document.createElement('button');
    buttonHoliday.id = 'btn-holiday';
    buttonHoliday.innerHTML = buttonName;
    const divButtonsContainer = document.querySelector('.buttons-container');
    divButtonsContainer.appendChild(buttonHoliday);
}
holidayButton('Feriados');

/*
Parte 3
Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday". É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.
*/
function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'red';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    });
  }
  displayHolidays();
/* Parte 4

Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".
Sua função deve receber como parâmetro a string “Sexta-feira”;
Adicione a esse botão o ID "btn-friday";
Adicione esse botão como filho/filha da tag <div> com classe "buttons-container". */

function createFridayButton(buttonName) {
    const fridayButton = document.createElement('button');
    fridayButton.innerHTML = buttonName;
    fridayButton.id = 'btn-friday';
    const divButtonsContainer = document.querySelector('.buttons-container');
    divButtonsContainer.appendChild(fridayButton);
}
createFridayButton('Sexta-feira');

/* Parte 5
Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras. É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias. */

function displayFridays(fridaysArray) {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/';
  
    getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
          //caso o texto não tenha sido substituído, ao clicar no botão ele será substituido pelo novo texto;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
          //caso o texto já tenha sido substituído, ao clicar no botão ele volta ao texto padrão.
        }
      }
    });
  }
  
  let decemberFridays = [ 4, 11, 18, 25 ];
  displayFridays(decemberFridays);

/* Parte 6
Implemente duas funções que criem um efeito de “zoom”.
Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

Dica - Propriedade: event.target. */

function dayMouseOver() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600'; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
    });
  }
  
  function dayMouseOut() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200'; // Ele pega o evento alvo e altera o estilo de fontWeight para 200
    });
  }

dayMouseOver();
dayMouseOut();