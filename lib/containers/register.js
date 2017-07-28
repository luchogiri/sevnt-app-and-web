// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, Field, Button, ScrollView, StyleSheet, Platform } from '../components/core';

import Account from '../actions/account';
import Header from '../components/header';



class Register extends Component {
  
  props: Object;
  state: Object;
  handleInput: Function;
  handleNext: Function;
  handleRegister: Function;
  handleRegistered: Function;
  handleRegisterError: Function;
  
  constructor(props: Object) {
    super(props);
  
    this.state = { error: false, loading: false, first_name: '', last_name: '', email: '', password: '', repeat: '' };
  }
  
  handleInput = (field) => {
    return (value) => {
      this.setState({ [field] : value });
    };
  };
  
  handleNext = (next) => {
    return () => {
      this.refs[next].focus();
    };
  };
  
  handleRegister = () => {
    const { first_name, last_name, email, password, repeat } = this.state;
    this.setState({ error: false, loading: true });
    
    if (!email || !password || !first_name || !last_name)
      return this.setState({ error: true, loading: false });
  
    if (password != repeat)
      return this.setState({ error: true, loading: false });
    
    this.props
      .dispatch( Account.Register({ first_name, last_name, email, password }) )
      .then(this.handleRegistered, this.handleRegisterError);
  };
  
  handleRegistered = () => {
    this.setState({ error: false, loading: false });
    this.props.navigator.popToTop();
  };
  
  handleRegisterError = (err) => {
    this.setState({ error: true, loading: false });
    console.log(err);
  };
  
  
  render() {
    return (
      <View style={styles.wrapper}>
  
        <ScrollView>
          <View style={styles.form}>
    
            <Field
              label='NOMBRE'
              placeholder='ej: Juan'
              value={this.state.first_name}
              onChangeText={this.handleInput('first_name')}
              returnKeyType='next'
              blurOnSubmit={false}
              style={styles.field}
              onSubmitEditing={this.handleNext('last_name')}
            />
    
            <Field
              ref='last_name'
              label='APELLIDO'
              placeholder='ej: Lopez'
              value={this.state.last_name}
              onChangeText={this.handleInput('last_name')}
              returnKeyType='next'
              blurOnSubmit={false}
              style={styles.field}
              onSubmitEditing={this.handleNext('email')}
            />
            
            <Field
              ref='email'
              label='EMAIL'
              placeholder='ej: usuario@sevnt.com'
              value={this.state.email}
              onChangeText={this.handleInput('email')}
              keyboardType='email-address'
              autoCapitalize='none'
              returnKeyType='next'
              blurOnSubmit={false}
              style={styles.field}
              onSubmitEditing={this.handleNext('password')}
            />
      
            <Field
              ref='password'
              label='CONTRASEÑA'
              placeholder='••••••••'
              value={this.state.password}
              onChangeText={this.handleInput('password')}
              secureTextEntry={true}
              autoCapitalize='none'
              returnKeyType='next'
              onSubmitEditing={this.handleNext('repeat')}
              style={styles.field}
            />
    
            <Field
              ref='repeat'
              label='REPETIR CONTRASEÑA'
              placeholder='••••••••'
              value={this.state.repeat}
              onChangeText={this.handleInput('repeat')}
              secureTextEntry={true}
              autoCapitalize='none'
              returnKeyType='done'
              style={styles.field}
            />
      
            {this.state.error ? <Text style={styles.form_error}>Revise sus datos</Text>: null}
      
            <Button style={styles.button_register} onPress={this.handleRegister}>REGISTRARME</Button>
    
            <View style={styles.forgot}>
              <Text style={styles.forgot_text}>
                ¿Ya tenés cuenta?&nbsp;
                <Text style={styles.forgot_text_link} onPress={this.props.navigator.pop}>volver al ingreso</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
  
        <Header navigator={this.props.navigator} type='dark' title='Registrarme' titleStyle={styles.title} />
      </View>
    );
  }
}

const Container = connect(store => store)( Register );
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
      textAlign: 'center',
      fontSize: 14
    },
    
    forgot_text_link: {
      color:'#2295d2',
      fontSize: 14
    },
  
  button_register: {
    marginTop: 32,
    backgroundColor: '#2195D2'
  },
  
  
});