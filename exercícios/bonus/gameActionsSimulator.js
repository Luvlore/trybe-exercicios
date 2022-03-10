const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: () => {
    if (mage.mana < 15) {
      console.log('Não possui mana suficiente.');
      return 0;
    }
    mage.mana -= 15;
    return Math.floor(Math.random() * (mage.intelligence * 2) / 2 + mage.intelligence);;
  },
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: () => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg) / 2 + 30),
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: () => Math.floor(Math.random() * dragon.strength + 16),
};

const battleMembers = { mage, warrior, dragon };


const gameActions = {
  warriorAttack: (damage) => {
    const
    const healthDragon = dragon.healthPoints;
    healthDragon -= damage;

  }
};

console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());
console.log(mage.damage());