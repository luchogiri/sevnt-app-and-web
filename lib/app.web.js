// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Store from './reducers/store';
import Navigation from './containers/navigation';


export default class Application extends Component {
  
  state: Object;
  mounted: Boolean;
  received: Boolean;
  storeDidLoad: Function;
  
  constructor() {
    super();
    
    this.mounted = this.received = false;
    this.storeDidLoad = this.storeDidLoad.bind(this);
    
    this.state = {
      loading: true,
      store : Store(this.storeDidLoad)
    };
  }
  
  componentDidMount() {
    if (this.received) this.setState({ loading: false });
    this.mounted = true;
  }
  
  storeDidLoad() {
    if (this.mounted) this.setState({ loading: false });
    this.received = true;
  }

  render() {
    return (
      <Provider store={this.state.store}>
        {!this.state.loading ? <Navigation ref="nav" />:(<div/>)}
      </Provider>
    );
  }
}
