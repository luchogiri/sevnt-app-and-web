// @flow

import React, { Component } from 'react';
import { Navigator, StyleSheet, BackAndroid } from 'react-native';
import Drawer from 'react-native-drawer';

import * as Containers from '../containers';


class AppNavigation extends Component {

  refs: Object;
  _handlers: Array<() => boolean>;
  handleBackButton: Function;
  addBackButtonListener: Function;
  removeBackButtonListener: Function;
  renderScene: renderScene;
  closeDrawer: Function;
  openDrawer: Function;
  getNavigator: Function;
  

  constructor(props: Object) {
    super(props);
    this._handlers = [];
    this.handleBackButton = this.handleBackButton.bind(this);
    this.addBackButtonListener = this.addBackButtonListener.bind(this);
    this.removeBackButtonListener = this.removeBackButtonListener.bind(this);
    this.renderScene = this.renderScene.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.getNavigator = this.getNavigator.bind(this);
  }
  
  openDrawer() {
    this.refs.drawer.open();
  }
  
  closeDrawer() {
    this.refs.drawer.close();
  }
  
  getNavigator() {
    return this.refs.navigator;
  }

  
  render() {
    return (
      <Drawer
        ref="drawer"
        tapToClose={true}
        openDrawerOffset={0.4}
        content={<Containers.Menu navigator={this.getNavigator} close={this.closeDrawer} />}>
        <Navigator
          ref="navigator"
          style={Styles.container}
          initialRoute={{ screen: 'Main' }}
          renderScene={this.renderScene}
          configureScene={(route) => {
            if (route.screen == 'Login') return Navigator.SceneConfigs.FloatFromBottom;
            if (route.screen == 'Onboarding') return Navigator.SceneConfigs.FloatFromBottom
            if (route.screen == 'Thanks') return { ...Navigator.SceneConfigs.PushFromRight, gestures: false };
            return Navigator.SceneConfigs.PushFromRight;
          }}
        />
      </Drawer>
    );
  }

  renderScene(route: Object, navigator: Navigator) {
    navigator.screen = (screen, props = {}) => { return () => { return navigator.push({ screen, ...props }); } };
    let { screen, ...props } = route;
    let Component = Containers[screen];
    return <Component navigator={navigator} openDrawer={this.openDrawer} {...props} />;
  }


  // -------------------------------
  // other stuff to back for android
  componentDidMount() { BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton); }
  componentWillUnmount() { BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton); }
  getChildContext() { return { addBackButtonListener: this.addBackButtonListener, removeBackButtonListener: this.removeBackButtonListener, };}
  addBackButtonListener(listener:Object) { this._handlers.push(listener); }
  removeBackButtonListener(listener:Object) { this._handlers = this._handlers.filter((handler) => handler !== listener); }
  handleBackButton() { for (let i = this._handlers.length - 1; i >= 0; i--) { if (this._handlers[i]()) return true; } if (this.refs.navigator && this.refs.navigator.getCurrentRoutes().length > 1) { this.refs.navigator.pop(); return true; } return false; }
  // ---------------------------------
}

AppNavigation.childContextTypes = { addBackButtonListener: React.PropTypes.func, removeBackButtonListener: React.PropTypes.func };
export default AppNavigation;

// Styles
const Styles = StyleSheet.create({

  container: {
    flex: 1
  }
});