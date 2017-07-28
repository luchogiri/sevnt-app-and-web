// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Store from './store';
import Navigation from './navigator';


(console: Object).disableYellowBox = true;

export default class Application extends Component {
  
  state = {
    loading: Boolean,
    store: Object
  };
  
  constructor() {
    super();
    this.state = {
      loading: false,
      store : Store(() => this.setState({ loading: false }))
    };
  }
  
  render() {
    return (
      <Provider store={this.state.store}>
        <Navigation store={this.state.store} />
      </Provider>
    );
  }
}
