
// @flow

import React, { Component } from 'react';

import { Link } from 'react-router';
import { connect } from 'react-redux';


class HeaderView extends Component {

  constructor(props: Object) {
    super(props);
  }

  render() {
    return(
      <header className='application-header'>
        <h1>
          Sevnt
        </h1>

        <Link to='/login'>
          Salir &nbsp;
          <span className='fa fa-sign-out'></span>
        </Link>
      </header>
    );
  }
};

const HeaderContainer = connect(store => store)(HeaderView);
export default HeaderContainer;
