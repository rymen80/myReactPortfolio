import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Main from './pages/Main';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
      <Router>
        <Navbar/>
        <Route path='/' component={Main}/>
        <Route path='/Main' component={Main}/>
        <Route path='/Portfolio' component={Portfolio}/>
        <Route path="/Contact" component={Contact}/>
      </Router>

  );

}

export default App;
