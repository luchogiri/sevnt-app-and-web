
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainView extends Component {

  props: {
    children: Object,
    location: {pathname: string}
  };

  _getPath() {
    return this.props.location.pathname.replace('/','');
  }

  _getStateClass():string {

    let base = 'application-main';
    let path = this._getPath();
    return base+(path?' application-state__'+path:'');
  }

  render() {

    return (
      <main className={this._getStateClass()}>
        <div className='application-background'></div>
        {this.props.children}
      </main>
    );
  }
}

const MainContainer: ReactClass<{}> = connect(
  (store => store)
)(MainView);

export default MainContainer;
