
import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import * as Containers from '../containers';
import Home from './home';
import Main from './main';
import Detail from './detail';
import Category from './category';
import Result from './result';

class Navigator extends Component {

  props: Object;
  checkAuth: Function;

  constructor(props: Object) {
    super(props);
    this.checkAuth = this.checkAuth.bind(this);
  }

  checkAuth(router, replace) {
    let state = this.props.store.getState();
    let account = state.account || {};
    let isLoggedIn = Object.keys(account.user).length;
    if (!isLoggedIn)
      replace({
        pathname: '/login',
        state: { nextPathname: router.location.pathname }
      })
  }


  routes = (
    <Route path="/" component={Main}>
      <IndexRoute component={Home} /*onEnter={this.checkAuth}*/ />
      <Route path="category" component={Category} />
      <Route path="onboarding" component={Containers.OnBoarding}></Route>
      <Route path="events">
      <IndexRoute component={Containers.EventsList}  onEnter={this.checkAuth}></IndexRoute>
        <Route path=":id" component={Detail}></Route>
      </Route>
      <Route path="categories">
      <IndexRoute component={Containers.EventsList}  onEnter={this.checkAuth}></IndexRoute>
        <Route path=":id" component={Result}></Route>
      </Route>
      <Route path="login" component={Containers.Login}></Route>
    </Route>
  )

  render() {
    return(
      <Router history={browserHistory} routes={this.routes} />
    );
  }
}

export default Navigator;
