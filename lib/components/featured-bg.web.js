// @flow

import React, { Component } from 'react';
import { Image, StyleSheet } from './core';

const FeaturedBg = (props: Object) => (
  <Image style={styles.wrapper} source={{uri: '/img/featured-bg.png'}} />
);

export default FeaturedBg;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0
  }
});