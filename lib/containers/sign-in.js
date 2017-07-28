// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, Field, Button, StyleSheet, Platform } from '../components/core';

import Account from '../actions/account';
import Header from '../components/header';


class SignIn extends Component {
  
  props: Object;
  state: Object;
  handleInput: Function;
  handleNext: Function;
  handleLogin: Function;
  handleLoggedIn: Function;
  handleLoginError: Function;
  
  
  constructor(props: Object) {
    super(props);
    
    this.state = { error: false, loading: false, email: '', password: '' };
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
  
  handleLogin = () => {
    const { email, password } = this.state;
    this.setState({ error: false, loading: true });
    
    if (!email || !password)
      return this.setState({ error: true, loading: false });
    
    this.props
      .dispatch( Account.Login({ email, password }) )
      .then(this.handleLoggedIn, this.handleLoginError);
  };
  
  handleLoggedIn = () => {
    this.setState({ error: false, loading: false });
    this.refs.password.blur();
    this.props.navigator.popToTop();
  };
  
  handleLoginError = (err) => {
    this.setState({ error: true, loading: false });
    console.log(err);
  };
  
  
  render() {
    
    return (
      <View style={styles.wrapper}>
        
        <View style={styles.form}>
          
          <Field
            label='USUARIO'
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
            label='CLAVE'
            placeholder='••••••••'
            value={this.state.password}
            onChangeText={this.handleInput('password')}
            secureTextEntry={true}
            autoCapitalize='none'
            returnKeyType='done'
            style={styles.field}
          />
          
          {this.state.error ? <Text style={styles.form_error}>Revise su usuario o contraseña</Text>: null}
  
          <Button style={styles.button_login} onPress={this.handleLogin}>ENTRAR</Button>
          
          <View style={styles.forgot}>
            <Text style={styles.forgot_text}>
              ¿Olvidaste tu clave?&nbsp;
              <Text style={styles.forgot_text_link} onPress={this.props.navigator.screen('Forgot')}>podemos ayudarte</Text>
            </Text>
          </View>
          
          <View style={styles.hr}>
            <View style={styles.hr_bg} />
            <Text style={styles.hr_text}>o también podés</Text>
          </View>
  
          <Button style={styles.button_fb} onPress={this.props.navigator.popToTop}>
            INGRESAR CON FACEBOOK
          </Button>
  
          <Text style={styles.hr_text}>¿Todavía no sos usuario?</Text>
  
          <Button style={styles.button_register}
                  textStyle={styles.button_register_text}
                  onPress={this.props.navigator.screen('Register')}>
            CREAR CUENTA
          </Button>
        </View>
        
        <Header navigator={this.props.navigator} type='dark' title='Ingresar' titleStyle={styles.title} />
      </View>
    );
  }
}

const Container = connect(store => store)( SignIn );
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
  
  
  hr: {
    height: 18,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    position: 'relative',
    alignItems: 'center'
  },
  
    hr_bg: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 9,
      borderTopWidth: 1,
      borderTopColor: '#888888'
    },
  
    hr_text: {
      paddingLeft: 16,
      paddingRight: 16,
      fontSize: 14,
      backgroundColor: '#ffffff',
      textAlign:'center',
      color: '#444444'
    },
  
  button_login: {
    marginTop: 32,
    backgroundColor: '#2195D2'
  },
  
  button_fb: {
    backgroundColor: '#4B6EA7',
    marginTop: 32,
    marginBottom: 32
  },
  
  button_register: {
    backgroundColor: 'transparent',
    borderColor: '#2195D2',
    borderWidth: 1,
    marginTop: 16
  },
    button_register_text: {
      color:'#2195D2'
    }
});