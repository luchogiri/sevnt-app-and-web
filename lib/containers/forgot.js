// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, Field, Button, StyleSheet, Platform } from '../components/core';

import Account from '../actions/account';
import Header from '../components/header';



class Forgot extends Component {
  
  props: Object;
  state: Object;
  handleInput: Function;
  handleReset: Function;
  handleResetSuccess: Function;
  handleResetError: Function;
  
  
  constructor(props: Object) {
    super(props);
    
    this.state = { error: false, loading: false, requested: false, email: '' };
  }
  
  handleInput = (field) => {
    return (value) => {
      this.setState({ [field] : value });
    };
  };
  
  handleReset = () => {
    const { email } = this.state;
    this.setState({ error: false, loading: true });
    this.refs.email.blur();
    
    if (!email)
      return this.setState({ error: true, loading: false });
    
    this.props
      .dispatch( Account.RequestNewPassword({ email }) )
      .then(this.handleResetSuccess, this.handleResetError);
  };
  
  handleResetSuccess = () => {
    this.setState({ error: false, loading: false, requested: true });
    // this.props.navigator.popToTop();
  };
  
  handleResetError = (err) => {
    this.setState({ error: true, loading: false });
    console.log(err);
  };
  
  
  render() {
    return (
      <View style={styles.wrapper}>
        
        <View style={styles.form}>
  
          <View style={styles.forgot}>
            <Text style={styles.forgot_text}>
              Los datos y la forma de recuperar tu contraseña seran enviadas a la direccion de mail con la que te registraste.
            </Text>
          </View>
          
          <Field
            ref='email'
            label='EMAIL'
            placeholder='ej: usuario@sevnt.com'
            value={this.state.email}
            onChangeText={this.handleInput('email')}
            keyboardType='email-address'
            autoCapitalize='none'
            returnKeyType='done'
            style={styles.field}
          />
          
          {this.state.error ? <Text style={styles.form_error}>El email proporcionado es inválido</Text>: null}
          
          <Button style={styles.button_request} onPress={this.handleReset}>ENVIAR</Button>
  
          {this.state.requested ?
            <View>
              <Text style={styles.form_error}>Revise su casilla de email</Text>
              <Button
                style={styles.button_back} textStyle={styles.button_back_text}
                onPress={this.props.navigator.popToTop}>VOLVER AL INICIO</Button>
            </View>
            : null}
        </View>
        
        <Header navigator={this.props.navigator} type='dark' title='Recuperar Contraseña' titleStyle={styles.title} />
      </View>
    );
  }
}

const Container = connect(store => store)( Forgot );
export default Container;


const styles = StyleSheet.create({
  
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS == 'ios' ? 66 : Platform.Version > 17 ? 70 : 46
  },
  
  title: {
    color: '#2195D2'
  },
  
  form: {
    marginLeft: 32,
    marginRight: 32,
    marginTop: 24
  },
  
    field: {
      marginTop: 24
    },
    
    form_error: {
      marginTop: 16,
      fontSize: 14,
      color: '#ff0000'
    },
    
  forgot: {
    marginTop: 24
  },
  
    forgot_text: {
      color: '#000000',
      fontSize: 14,
      lineHeight: 18
    },
  
    button_request: {
      marginTop: 32,
      backgroundColor: '#2195D2'
    },
  
    button_back: {
      marginTop: 16,
      backgroundColor: 'transparent',
      borderColor: '#2195D2',
      borderWidth: 1
    },
      button_back_text: {
        color: '#2195D2'
      }
  
  
});