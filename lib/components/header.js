// @flow

import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, Platform } from './core';


const Header = (props: Object) => {
  
  const { left, right, title, titleStyle, type, style, navigator, drawer, ...attrs } = props;
  
  const navigate = (screen) => {
    return () => {
      navigator.push({ screen });
    };
  };
  
  const LeftContent = () => {
    
    switch(left) {
  
      case 'menu': return (
        <TouchableOpacity style={styles.button} onPress={drawer}>
          <Image source={require('../img/icon-menu.png')} style={{width: 36, height: 36}} />
        </TouchableOpacity>);
  
      case 'none': return (<View style={styles.button} />);
        
      default: return (
        <TouchableOpacity style={styles.button} onPress={navigator.pop}>
          <Image
            style={{width: 12, height: 20}}
            source={type != 'dark' ?
              require('../img/icon-back.png'):
              require('../img/icon-back-blue.png')} />
        </TouchableOpacity>);
    }
  };
  
  
  const RightContent = () => {
    
    switch(right) {
      
      case 'search': return (
        <TouchableOpacity style={[styles.button, styles.button_back]} onPress={navigate('Search')}>
          <Image source={require('../img/icon-search.png')} style={{width: 36, height: 36}} />
        </TouchableOpacity>);
      
      
      default: return (<View style={styles.button} />);
    }
  };
  
  
  return (
    <View style={[styles.wrapper, style]}>
      {type != 'dark'?
        <Image style={styles.bg} source={require('../img/bg-nav.jpg')} />: null}
      
      {LeftContent()}
    
      <View style={styles.title}>
      {title == 'sevnt' ?
        <Image source={require('../img/sevnt-iso.png')} style={{height: 21, width: 70}} />:
        <Text style={[styles.title_text, titleStyle]}>{title}</Text>}
      </View>
      
      {RightContent()}
      
      {type == 'dark'?
        <Image style={styles.status_bar} source={require('../img/bg-nav.jpg')} />: null}
    </View>
  );
};

export default Header;


const styles = StyleSheet.create({
  
  wrapper: {
    flexDirection: 'row',
    height: Platform.OS == 'ios' ? 66 : Platform.Version > 17 ? 70 : 46,
    paddingTop: Platform.OS == 'ios' ? 20 : Platform.Version > 17 ? 24 : 0,
    backgroundColor: '#ffffff',
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0
  },
  
  button: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  title_text: {
    color: '#ffffff',
    fontSize: 18
  },
  
  bg: {
    height: Platform.OS == 'ios' ? 66 : Platform.Version > 17 ? 70 : 46,
    resizeMode: 'stretch',
    position: 'absolute',
    width: null,
    right: 0,
    left: 0,
    top: 0
  },
  
  status_bar: {
    height: Platform.OS == 'ios' ? 20 : Platform.Version > 17 ? 24 : 0,
    position: 'absolute',
    resizeMode: 'cover',
    width: null,
    right: 0,
    left: 0,
    top: 0
  }
  
});
