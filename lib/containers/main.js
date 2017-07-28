// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Text, View, TouchableOpacity, StyleSheet, LayoutAnimation, Platform } from '../components/core';

import Config from '../actions/config';
import Home from './home';
import Menu from './menu';
import Onboarding from './onboarding';


class Main extends Component {

  state: Object;
  retrieveConfig: Function;
  onConfigReceived: Function;
  onConfigError: Function;


  constructor(props:Object) {
    super(props);

    this.state = { complete: false, error: false };
  }

  componentDidMount() {
    this.retrieveConfig();
  }

  retrieveConfig = () => {
    this.setState({ complete: false, error: false});
    this.props
      .dispatch( Config.Retrieve() )
      .then( this.onConfigReceived, this.onConfigError );
  };

  onConfigReceived = () => {
    this.setState({ complete: true, error: false});
  };

  onConfigError = () => {
    this.setState({ complete: false, error: true });
  };


  componentWillUpdate() {
    Platform.OS != 'web' ?
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut): null;
  }

  render() {

    let content = null;

    if (this.state.error) {
      content = <View style={styles.content}>
                  <Text style={styles.loading__text}>Ha ocurrido un problema de conexión</Text>
                  <TouchableOpacity onPress={this.retrieveConfig}>
                    <Text style={styles.loading__text}>reintentar</Text>
                  </TouchableOpacity>
                </View>;
    }

    else if (Platform.OS != 'web' && this.state.complete && this.props.show_onboarding) {
      content = <Onboarding navigator={this.props.navigator} />;
    }

    else if (this.state.complete && (!this.props.show_onboarding || Platform.OS == 'web')) {
      content = Platform.OS == 'web' ?
        <View style={styles.container}>
          <Menu style={styles.containerMenu} />
          <View style={styles.containerHome}>
            {this.props.children}
          </View>
        </View> :
        <Home navigator={this.props.navigator} openDrawer={this.props.openDrawer}/>;
    }

    else {
      content = <View style={styles.content}>
                  <Text style={styles.loading__text}>Cargando...</Text>
                </View>;
    }

    return (
      <View style={styles.wrapper}>{content}</View>
    );
  }
}



const Container = connect(store => store.config)( Main );
export default Container;

const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: Platform.OS == 'web' ? 0: 50
  },

  containerMenu:{
    
  },
  containerHome:{
    flex:1
  },

  container: {
    flex: 1,
    flexDirection: 'row'
  },

  loading__text: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
    backgroundColor: 'transparent'
  }
});
