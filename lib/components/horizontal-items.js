// @flow

import React, { Component } from 'react';

import I18n from '../helpers/i18n';

import { View, ListView, StyleSheet } from './core';

import HorizontalItem from './horizontal-item';


const HorizontalItems = (props: Object) => {
  
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  
  return (
    <View style={styles.wrapper}>
      <ListView
        horizontal={true}
        style={styles.items}
        dataSource={ds.cloneWithRows(props.items)}
        contentContainerStyle={{paddingRight: 20}}
        showsHorizontalScrollIndicator={false}
        renderRow={item => <HorizontalItem item={item} key={item._id} onPress={props.showDetails} />} />
    </View>
  );
};

export default HorizontalItems;


const styles = StyleSheet.create({
  
  wrapper: {
    height: 260,
    top: -20
  },
  
    items: {
      flex: 1,
      flexDirection: 'row'
    }
  
});
        