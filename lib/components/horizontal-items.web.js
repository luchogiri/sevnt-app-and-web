// @flow

import React, { Component } from 'react';

import I18n from '../helpers/i18n';

import { View, StyleSheet } from './core';

import HorizontalItem from './horizontal-item';


const HorizontalItems = (props: Object) => {
  
  return (
    <View style={styles.wrapper}>
      <View style={styles.container} className='horizontal-scrollable-items'>
        <View style={styles.items}>
          {props.items.map(item => <HorizontalItem item={item} key={item._id} />)}
        </View>
      </View>
    </View>
  );
};

export default HorizontalItems;


const styles = StyleSheet.create({
  
  wrapper: {
    position: 'relative',
    minHeight: 260,
    height: 260,
    top: -20
  },
    
    container: {
      position: 'absolute',
      overflow: 'scroll',
      right: 0,
      left: 0,
      top: 0,
    },
    
      items: {
        flexDirection: 'row'
      }
  
});