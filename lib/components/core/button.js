// @flow

import React, { Component } from 'react';

import Text from './text';
import { TouchableOpacity, StyleSheet } from 'react-native';


const Button = (props: Object) => {
  
  let { style, textStyle, ...attrs } = props;
  
  return (
    <TouchableOpacity style={[styles.def, style]} {...attrs}>
      <Text style={[styles.label, textStyle]}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Button;


const styles = StyleSheet.create({
  
  def: {
    height: 40,
    borderRadius: 20,
    backgroundColor: '#666666',
    justifyContent: 'center'
  },
  
  label: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14
  },
  
});
