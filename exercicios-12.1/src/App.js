import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Batata from "./components/Batata";
import Profile from "./components/Profile";
import Test from "./components/Test";
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' element={Home} />
        <Route path='/batata' element={Batata} />
        <Route path='/profile' element={Profile} />
        <Route path='/test' element={Test} />
      </Router>
    )
  }
}

export default App;