// @flow

import React, { Component } from 'react';
import { Image } from './core';

const HeaderSearch = (props: Object) => (
  <Image style={styles.wrapper} source={{uri: '/img/icon-search.png'}} />
);

export default HeaderSearch;

const styles = {
  wrapper: {
    height: 40,
    width: 40
  }
}