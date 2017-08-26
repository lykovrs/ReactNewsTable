import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from './store';
import App from './App';
import {Provider} from 'react-redux'

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}> 
          <App />
      </Provider>
    );
  }
}
