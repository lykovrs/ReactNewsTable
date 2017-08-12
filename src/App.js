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
        <div className="App__intro-wrap">
          <div className="App__intro-col">
            <ArticleList/>
          </div>
          <div className="App__intro-col">
            <Chart/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
