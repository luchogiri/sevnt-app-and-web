// @flow

import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Platform } from 'react-native';


class Field extends Component {
  
  constructor(props: Object) {
    super(props);
  }
  
  focus = () => {
    this.refs.input.focus();
  };
  
  blur= () => {
    this.refs.input.blur();
  };
  
  render() {
    
    let {label, style, labelStyle, inputStyle, ...attrs} = this.props;
    
    return (
      <View style={[styles.def, style]}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
        <TextInput
          ref='input'
          style={[styles.input, inputStyle]}
          placeholderTextColor='#bbbbbb'
          underlineColorAndroid='transparent'
          {...attrs}
        />
      </View>
    );
  }
}

export default Field;


const styles = StyleSheet.create({
  
  def: {
    borderBottomWidth: 1,
    borderBottomColor: '#888888',
    height: 50
  },
  
  label: {
    fontSize: 12,
    color:'#939598'
  },
  
  input: {
    flex: 1,
    height: 38,
    marginBottom: 0,
    paddingBottom: Platform.OS == 'ios' ? 0 : 8,
    fontSize: 20,
    lineHeight: 20,
    color: '#333333'
  }
  
});