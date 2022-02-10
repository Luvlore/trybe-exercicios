let taskList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(taskList.length);

let searchForFirstTask = taskList[0];
console.log(searchForFirstTask);

let searchForLastTask = taskList[taskList.length - 1];

taskList.push('Fazer exercícios da Trybe');
console.log(taskList);

taskList.pop();
console.log(taskList);

let indexOfTask = taskList.indexOf('Reunião')
console.log(indexOfTask)