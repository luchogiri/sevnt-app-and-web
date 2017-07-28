
// @flow

import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';


const EventsHeaderView = ( props: {

  total: number

}) => (

  <nav className='measurements-header'>
    <Link to='/events' className='measurements-header__link' activeClassName='active'>Eventos</Link>
    {/* <Link to='/categories' className='appointments-header__link' activeClassName='active'>Categorias</Link> */}
    {/* <Link to='/events/calendar' className='appointments-header__link' activeClassName='active'>Calendario</Link> */}
    {/* <Link to={'/events/add/'+(props.date == 'all'? moment().format('YYYY-MM-DD'): props.date)} className='appointments-header__add' activeClassName='active'>+</Link> */}
    <Link to='/events/add' className='measurements-header__add' activeClassName='active'>+</Link>
  </nav>
);

export default EventsHeaderView;
