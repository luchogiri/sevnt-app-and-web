// @flow

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


const TextComponent = (props: Object) => {

  let { style, ...attrs } = props;

  return (
    <Text style={[styles.def, style]} {...attrs}>
      {props.children}
    </Text>
  );
};

export default TextComponent;

let styles = StyleSheet.create({

  def: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontSize: 16
  }

});
