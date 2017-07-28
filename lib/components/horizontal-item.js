// @flow

import React, { Component } from 'react';
import moment from 'moment';

import I18n from '../helpers/i18n';

import { Text, View, Image, TouchableOpacity, StyleSheet, Platform } from './core';


const HorizontalItem = (props: Object) => {
  
  return (
    <Image style={styles.wrapper} source={{uri: props.item.img}}>
      <TouchableOpacity onPress={props.onPress(props.item)} style={styles.clickable}>
        <View style={styles.bg} />
        
        <View style={styles.date}>
          <Text style={styles.month}>{I18n(moment(props.item.start_date).format('MMM'))}</Text>
          <Text style={styles.day}>{moment(props.item.start_date).format('DD')}</Text>
        </View>
        
        <View style={styles.content}>
          <Text style={styles.category}>{I18n(props.item.category)}</Text>
          <Text style={styles.title}>{props.item.name}</Text>
        </View>
      </TouchableOpacity>
    </Image>
  );
};

export default HorizontalItem;


const styles = StyleSheet.create({
  
  wrapper: {
    height: 260,
    width: 240,
    minWidth: 240,
    marginLeft: 20
  },
  
  clickable: {
    flex: 1,
    position: 'relative',
    justifyContent: 'space-between'
  },
  
  bg: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.35)',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  
    content: {
      position: 'relative',
      paddingLeft: 16,
      paddingBottom: 16
    },
  
      category: {
        fontWeight: Platform.OS == 'web' ? '300':'500',
        fontSize: 14
      },
      
      title: {
        fontWeight: Platform.OS == 'web' ? '200':'400',
        fontSize: 23,
        marginTop: 0
      },
  
      date: {
        position: 'relative',
        alignItems: 'flex-end',
        marginRight: 12,
        marginTop: 12
      },
  
        day: {
          width: 40,
          fontSize: 25,
          textAlign: 'center'
        },
        
        month: {
          width: 40,
          fontSize: 15,
          textAlign: 'center'
        }
  
});