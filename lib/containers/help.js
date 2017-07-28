// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, TouchableOpacity, StyleSheet, Platform } from '../components/core';

import Header from '../components/header';


class Help extends Component {
  
  props: Object;
  state: Object;
  
  
  constructor(props: Object) {
    super(props);
    
    this.state = {};
  }
  
  
  render() {
    return (
      <View style={styles.wrapper}>
        
        <Text>HELP</Text>
  
        <Header navigator={this.props.navigator} />
      </View>
    );
  }
}

const Container = connect(store => store)( Help );
export default Container;


const styles = StyleSheet.create({
  
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS == 'ios' ? 66 : 70
  }
  
});