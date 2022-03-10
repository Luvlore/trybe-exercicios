const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (thing) => thing();

console.log(doingThings(wakeUp));
console.log(doingThings(breakfast));
console.log(doingThings(sleep));