// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const { mage } = require('./ex-bonus-parte-1-data.js');
const battleMembers = require('./ex-bonus-parte-1-data.js');

const dragonAttack = (battleMembers) => {
  const minDmg = 15;
  const maxDmg = Math.floor(Math.random() * battleMembers.dragon.strength);
  const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;
  return dragonDmg;
};

// console.log(dragonAttack(battleMembers));

// Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorAttack = (battleMembers) => {
  const minDmg = battleMembers.warrior.strength;
  const weaponDmg = battleMembers.warrior.weaponDmg;
  const maxDmg = minDmg * weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
  return warriorDamage;
}

// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).

// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”) e a mana gasta é 0.

const wastedByMage = (battleMembers) => {
  const danoMin = battleMembers.mage.intelligence;
  const manaInicial = battleMembers.mage.mana;
  const danoMax = danoMin * 2;
  const dano = Math.floor((Math.random() * (danoMax - danoMin + 1)) + danoMin);
  const mana = 15;
  const newMana = manaInicial - mana;
  if (newMana < mana) {
    mana = 0;
    dano = 'Não possui mana suficiente'
  }
  return { dano, mana };
}

console.log(wastedByMage(battleMembers));
