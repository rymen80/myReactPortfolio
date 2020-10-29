import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar"
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
      <Router>
        <Navbar/>
        <Route path='/Main' component={Main}/>
        <Route path='/Portfolio' component={Portfolio}/>
        <Route path="/Contact" component={Contact}/>
      </Router>

  );

}

export default App;
