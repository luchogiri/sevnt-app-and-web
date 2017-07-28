
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import ConfigActions from '../../lib/actions/config';

import Header from '../components/header-view';

class HomeView extends Component {
  //
  props: {
    children: Object,
    params: Object,
    routes: Array<Object>
  };

  componentDidMount() {
    this.props.dispatch( ConfigActions.Retrieve() );
    browserHistory.push('/events');
  }

  render() {
    return (
      <section className='application-home'>
        <div className='ctn'>
          <Header />
        </div>
      </section>
    );
  }
}

const HomeContainer = connect(store => store)(HomeView);
export default HomeContainer;
