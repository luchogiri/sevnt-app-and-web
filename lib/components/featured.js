// @flow

import React, { Component } from 'react';
import moment from 'moment';

import I18n from '../helpers/i18n';
import { Text, View, Image, TouchableOpacity, StyleSheet, Platform } from './core';

import FeaturedBg from './featured-bg';


const Featured = (props: Object) => {
  
  const item = props.items[0] || { img : '' };
  
  return (
    <Image style={styles.wrapper} source={{ uri: item.img }}>
      <TouchableOpacity onPress={props.showDetails(item)} style={styles.clickable}>
        <FeaturedBg />
        <View style={styles.bg} />
        
        <View style={styles.content}>
          <Text style={styles.category}>{I18n(item.category)}</Text>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.date}>
            {moment(item.start_date).format('DD')} de {I18n('months')[moment(item.start_date).format('MM')]}</Text>
        </View>
      </TouchableOpacity>
    </Image>
  );
};

export default Featured;


const styles = StyleSheet.create({
  
  wrapper: {
    height: Platform.OS == 'web' ? 380 : 330,
    minHeight: Platform.OS == 'web' ? 380 : 330
  },
  
  clickable: {
    flex :1,
    justifyContent: 'flex-end',
    position: 'relative'
  },
  
  bg: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.22)',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  
  content: {
    position: 'relative',
    marginLeft: Platform.OS == 'web' ? 80 : 20,
    marginBottom: Platform.OS == 'web' ? 50 : 40
  },
  
    category: {
      fontWeight: Platform.OS == 'web' ? '400':'600',
      fontSize: Platform.OS == 'web' ? 16 : 15
    },
  
    title: {
      fontWeight: Platform.OS == 'web' ? '300':'500',
      fontSize: Platform.OS == 'web' ? 40 : 28,
      marginTop: 0
    },
  
    date: {
      fontSize: 14,
      marginTop: 4
    }
  
});