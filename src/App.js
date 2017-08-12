import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart/Chart'

import ArticleList from './components/ArticleList/ArticleList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__header">
          <img src={logo} className="App__logo" alt="logo"/>
          <h2>Welcome to React News Table</h2>
        </div>
        <p className="App__intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.

        </p>
        <Chart/>
        <ArticleList/>

      </div>
    );
  }
}

export default App;
