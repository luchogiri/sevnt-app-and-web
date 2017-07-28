// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Image, Text, Button, StyleSheet } from '../components/core';

import Account from '../actions/account';

class Login extends Component {
  
  props: Object;
  state: Object;
  
  
  constructor(props: Object) {
    super(props);
    this.state = {};
  }
  
  onFacebookLogin = () => {
    this.props.dispatch( Account.FBLogin() ).then(this.props.navigator.popToTop, this.onFBError);
  };
  
  onFacebookLogout = () => {
    this.props.dispatch( Account.FBLogout() );
  };
  
  onFBError = (err) => {
    console.log(err);
  };
  
  render() {
    return (
      <Image source={require('../img/bg-main.jpg')} style={styles.wrapper}>
        
        <View style={styles.logo}>
          <Image source={require('../img/sevnt-logo.png')} />
        </View>
  
        <View style={styles.message}>
          <Text style={styles.message_text}>
            Bienvenido, estás a punto de comprar entradas
            para tus eventos de una forma mas rápida y segura
          </Text>
        </View>
        
        <View style={styles.buttons}>
          <Button style={styles.button_fb} onPress={this.onFacebookLogin}>
            INGRESAR CON FACEBOOK
          </Button>
  
          <Button style={styles.button_email} onPress={this.props.navigator.screen('SignIn')}>
            INGRESAR CON EMAIL
          </Button>
  
          <Button style={styles.button_register} onPress={this.props.navigator.screen('Register')}>
            CREAR CUENTA
          </Button>
        </View>
  
        <View style={styles.terms}>
          <Text style={styles.message_text}>
            Al ingresar acepta los <Text onPress={this.props.navigator.screen('Terms')} style={styles.terms_link}>
            Términos y Condiciones</Text> del sitio.
          </Text>
        </View>
  
        <View style={styles.skip}>
          <Button style={styles.button_skip} textStyle={styles.button_skip_text} onPress={this.props.navigator.popToTop}>
            Continuar como invitado
          </Button>
        </View>
        
      </Image>
    );
  }
}

const Container = connect(store => store)( Login );
export default Container;


const styles = StyleSheet.create({
  
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: null,
    width: null,
    resizeMode: 'stretch'
  },
  
    logo: {
      flex: 7,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
  
    message: {
      flex: 3,
      marginLeft: 44,
      marginRight: 44,
      justifyContent: 'center'
    },
      message_text: {
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
        fontWeight: '400'
      },
  
    buttons: {
      flex: 6,
      marginLeft: 40,
      marginRight: 40,
      justifyContent: 'center'
    },
      button_fb: {
        backgroundColor: '#4B6EA7',
        marginBottom: 16
      },
  
      button_email: {
        backgroundColor: '#2195D2',
        marginBottom: 16
      },
  
      button_register: {
        backgroundColor: 'transparent',
        borderColor: '#ffffff',
        borderWidth: 1
      },
  
    terms: {
      flex: 3,
      marginLeft: 50,
      marginRight: 50,
      justifyContent: 'center'
    },
      terms_link: {
        fontSize: 14,
        textDecorationLine: 'underline'
      },
  
    skip: {
      flex: 2,
      justifyContent: 'flex-start'
    },
      button_skip: {
        backgroundColor: 'transparent'
      },
        button_skip_text: {
          fontWeight: '400'
        }
  
});