import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-day-picker/lib/style.css';
import Chart from './components/Chart/index';
import FormChanger from './components/FormChanger';
import store from './store';
import Counter from './components/Counter';
import ArticleList from './components/ArticleList';
import {connect} from 'react-redux';
import Moment from 'react-moment';
// import 'moment-timezone';


class App extends Component {
  render() {
    const {articles} = this.props;
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
            <FormChanger/>
            <Chart articles={articles}/>
            <Counter/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({articles: state.articles}))(App);
