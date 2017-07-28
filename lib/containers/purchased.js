// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { Image, View, Text, StyleSheet, Platform, ListView, RefreshControl, TouchableOpacity } from '../components/core';

import I18n from '../helpers/i18n';
import Events from '../actions/events';
import Account from '../actions/account';
import Header from '../components/header';

class Purchased extends Component {

  props: Object;
  state: Object;

  _addtofav: Function;
  retrieveEvents: Function;
  onRefresh: Function;


  constructor(props: Object) {
    super(props);

    this.state = {};
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentDidMount = () => {
    !this.props.account.token &&
      setTimeout(() => { this.props.navigator.push({ screen: 'Login' }) }, 1500);
    this.retrieveEvents();
  };

  retrieveEvents = () => {
    return this.props.dispatch( Events.Retrieve() );
  };

  onRefresh = () => {
    this.setState({ refreshing: true });
    this.retrieveEvents().then(() => this.setState({ refreshing: false }));
  };



  render() {



    return (
      <View style={styles.wrapper}>

        <Text style={styles.titulo}>Purchased {this.props.event.name}</Text>

        <Header navigator={this.props.navigator} title="Mis Compras" />
      </View>
    );
  }
}

const Container = connect(store => store)( Purchased );
export default Container;


const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS == 'ios' ? 66 : 70
  },

  titulo:{color:'#000000'}

});
