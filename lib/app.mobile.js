// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Store from './reducers/store';
import Navigation from './containers/navigation';

import { Text, Image, StatusBar, StyleSheet, LayoutAnimation, UIManager } from 'react-native';


(console: Object).disableYellowBox = true;
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Application extends Component {
  
  state: Object;
  mounted: Boolean;
  received: Boolean;
  storeDidLoad: Function;
  
  constructor() {
    super();
  
    this.mounted = this.received = false;
    this.storeDidLoad = this.storeDidLoad.bind(this);
  
    this.state = {
      loading: true,
      store : Store(this.storeDidLoad)
    };
  }
  
  componentDidMount() {
    if (this.received) this.setState({ loading: false });
    this.mounted = true;
  }
  
  storeDidLoad() {
    if (this.mounted) this.setState({ loading: false });
    this.received = true;
  }
  
  componentWillUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <Image style={styles.wrapper} source={require('./img/bg-main.jpg')}>
          <StatusBar translucent={true} barStyle="light-content" backgroundColor="rgba(0,0,0,0.4)" />
          {!this.state.loading ? <Navigation ref="nav" />:null}
        </Image>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    resizeMode: 'stretch',
    width: null,
    height: null,
  }
});
