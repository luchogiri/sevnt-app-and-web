// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, TouchableOpacity, StyleSheet, Platform } from '../components/core';

import Header from '../components/header';


class Delivery extends Component {

  props: Object;
  state: Object;

  
  constructor(props: Object) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <View style={styles.wrapper}>

        <Text>CHECKOUT</Text>

        <TouchableOpacity style={styles.list_item} onPress={this.props.navigator.screen('Purchase')}>
          <Text>DO PURCHASE</Text>
        </TouchableOpacity>

        <Header navigator={this.props.navigator} />
      </View>
    );
  }
}

const Container = connect(store => store)( Delivery );
export default Container;


const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS == 'ios' ? 66 : 70
  },

  list_item: {
    height: 100,
    backgroundColor: '#f5f5f5'
  }

});
