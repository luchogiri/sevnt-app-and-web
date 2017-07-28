
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import EventsItemView from '../components/events-item-view';
import EventsActions from '../../lib/actions/events';

const admin_token = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ODhhMzUxYzEwMjk3YTQzOGFkNzE4MTUiLCJlbWFpbCI6ImFkbWluQHNldm50LmNvbSJ9.aqsiYt6R7sk4u6h43saQiL8IL0y_eYdurg13qQ0gOUI';

class EventsListView extends Component {

  props: {
    items: Array<Object>,
    loading: boolean,
    dispatch: Dispatch,
    params: Object
  };

  constructor(props: Object) {
    super(props);

    this.handleCheck = this.handleCheck.bind(this);
  }

  componentDidMount() {
    this.props.dispatch( EventsActions.Retrieve({ include_drafts : true }) );
  }

  handleCheck(item) {
    return (event) => {
      event.preventDefault();
      item.published = !item.published;
      this.props.dispatch( EventsActions.Update(item._id, { published: item.published }, admin_token, { include_drafts : true } ));
    }
  }

  render() {

    let loading = !this.props.loading ? '':
                  <div className='measurements-list--loading'>
                    <i className='fa fa-circle-o-notch fa-spin fa-2x'></i>
                  </div>;

    let events = !this.props.items.length || this.props.loading ? '':
      this.props.items.map((item) => <EventsItemView key={item._id} item={item} onCheck={this.handleCheck} />);

    let empty = !this.props.loading && !this.props.items.length ?
                <div className='measurements-list--empty'>
                  <img src='/img/list-empty.png' height='240px' />
                  <h3>No se encontraron eventos, <Link to={'/events/add'}>Agregar</Link>.</h3>
                </div>: ''


    return (
      <section className='measurements-list'>
        <h3 className="measurements-list__title">
          {this.props.items.length} Eventos
        </h3>
        {loading}
        {events}
        {empty}
      </section>
    );
  }
};

const EventsListContainer: ReactClass<{}> = connect(
  (store) => store.events
)(EventsListView);

export default EventsListContainer;
