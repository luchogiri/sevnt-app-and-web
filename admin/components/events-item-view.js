
// @flow

import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

const EventsItemView = (props: {

  item: Object,
  onCheck: Function

}) => (

  <Link to={'/events/'+props.item._id} className='measurements-item'>

    <div className='measurements-item__title'>
      <h2>{props.item.name}</h2>
      <h3>{props.item.category}</h3>
    </div>
    <div className='measurements-item__desc'>
      <h1>{moment(props.item.start_date).format('DD/MM')}</h1>
      <h4>{props.item.address}</h4>
    </div>
    <span className={props.item.published?'measurements-item__check checked':'measurements-item__check'}
          onClick={props.onCheck(props.item)}>
      <i className='fa fa-check'></i>
    </span>
  </Link>
);

export default EventsItemView;
