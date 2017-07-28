// @flow

import React, { Component } from 'react';
import { Image } from './core';

const HeaderTitle = (props: Object) => (
  <Image style={styles.wrapper} source={{uri: '/img/sevnt-iso.png'}} />
);

export default HeaderTitle;

const styles = {
  wrapper: {
    height: 26,
    width: 82
  }
}