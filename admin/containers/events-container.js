
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import * as Containers from './index'
import Header from '../components/header-view';
import EventsHeaderView from '../components/events-header-view';


class EventsView extends Component {

  props: {
    total: number,
    dispatch: Dispatch,
    children: Object
  }

  constructor(props: Object) {
    super(props);
  }

  render() {
    return (
      <section className='measurements-container'>
        <div className='ctn'>
          <Header />
          <EventsHeaderView total={this.props.total} />
          {this.props.children}
        </div>
      </section>
    );
  }
}

const EventsContainer: ReactClass<{}> = connect(
  (store => store.events)
)(EventsView);

export default EventsContainer;
