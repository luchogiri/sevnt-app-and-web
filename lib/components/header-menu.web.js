// @flow

import React, { Component } from 'react';
import { Image } from './core';

const HeaderMenu = (props: Object) => (
  <Image style={styles.wrapper} source={{uri: '/img/icon-menu.png'}} />
);

export default HeaderMenu;

const styles = {
  wrapper: {
    height: 40,
    width: 40
  }
}