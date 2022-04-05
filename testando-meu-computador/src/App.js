import './App.css';
import React from 'react';
import HelloWorld from './HelloWorld';
import Element from './Component';

const Task = (value) => <li>{value}</li>;

const tasks = ['Dormir', 'Estudar', 'Trabalhar', 'Lavar a Louça', 'Brincar com as Doguinhas'];

function App() {
  return tasks.map((task) => Task(task));
}

export default App;
