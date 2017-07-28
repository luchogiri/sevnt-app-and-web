
import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { connect } from 'react-redux';

import * as Containers from './containers';

class Navigator extends Component {

  props: {
    store: Object;
  };

  checkAuth: Function;

  constructor(props: Object) {
    super(props);
    this.checkAuth = this.checkAuth.bind(this);
  }

  checkAuth(router, replace) {
    let state = this.props.store.getState();
    let auth = state.auth || {};
    let isLoggedIn = Object.keys(auth.user).length;
    if (!isLoggedIn)
      replace({
        pathname: '/login',
        state: { nextPathname: router.location.pathname }
      })
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/index.admin.html" component={Containers.Main}>
          <IndexRoute component={Containers.Home} onEnter={this.checkAuth}></IndexRoute>
        </Route>
        <Route path="/" component={Containers.Main}>
          <IndexRoute component={Containers.Home} onEnter={this.checkAuth}></IndexRoute>
          <Route path="events" component={Containers.Events}>
            <IndexRoute component={Containers.EventsList}  onEnter={this.checkAuth}></IndexRoute>
            <Route path="add" component={Containers.EventsAdd} onEnter={this.checkAuth}></Route>
            <Route path=":id" component={Containers.EventsEdit} onEnter={this.checkAuth}></Route>
          </Route>
          <Route path="login" component={Containers.Login}></Route>
        </Route>
      </Router>
    );
  }
};

export default Navigator;
