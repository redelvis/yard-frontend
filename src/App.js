import React, { Component } from 'react';
import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Complexes from './Complexes/List/';
import Complex from './Complexes/Show';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Complexes} />
          <Route path="/complex/:id" component={Complex} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
