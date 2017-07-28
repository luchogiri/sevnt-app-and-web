// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, Image, Field, Button, ScrollView, StyleSheet, Platform } from '../components/core';

import Account from '../actions/account';
import Header from '../components/header';


class Profile extends Component {
  
  props: Object;
  state: Object;
  handleInput: Function;
  handleNext: Function;
  handleSave: Function;
  handleSaved: Function;
  handleSaveError: Function;
  
  
  constructor(props: Object) {
    super(props);
    
    let { first_name, last_name, email } = this.props.account;
    if (/fb[0-9]+@tmpsevnt.com/.test(email)) email = '';
    this.state = { error: false, loading: false, saved: false, first_name, last_name, email };
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
  
  handleSave = () => {
    const { first_name, last_name, email } = this.state;
    this.setState({ error: false, loading: true });
    
    if (!email || !first_name || !last_name )
      return this.setState({ error: true, loading: false });
    
    this.props
      .dispatch( Account.Update({ first_name, last_name, email }, this.props.account.token) )
      .then(this.handleSaved, this.handleSaveError);
  };
  
  handleSaved = () => {
    this.setState({ error: false, loading: false, saved: true });
    setTimeout(() => { this.state && this.setState({ saved: false }) }, 2500);
  };
  
  handleSaveError = (err) => {
    this.setState({ error: true, loading: false });
    console.log(err);
  };
  
  handleLogout = () => {
    this.props.dispatch( Account.Logout() );
    this.props.navigator.popToTop();
  };
  
  
  render() {
    
    let { account } = this.props;
    
    return (
      <View style={styles.wrapper}>
        <ScrollView style={{position:'relative'}}>
          
          <View style={styles.profile}>
            <Image source={require('../img/bg-head.jpg')} style={styles.profile_bg} />
            <Image
              style={styles.profile_img}
              source={account.picture ? {uri: account.picture}:require('../img/img-profile.png')} />
          </View>
          
          <View style={styles.form}>
  
            {/*<Button style={styles.button_fb} onPress={this.props.navigator.popToTop}>*/}
              {/*CONECTAR CUENTA DE FACEBOOK*/}
            {/*</Button>*/}
            
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
              returnKeyType='done'
              style={styles.field}
            />
            
            {this.state.error ? <Text style={styles.form_error}>Revise sus datos</Text>: null}
    
            {!this.state.saved ?
              <Button style={styles.button_save} onPress={this.handleSave}>GUARDAR CAMBIOS</Button>:
              <Button style={styles.button_saved} textStyle={styles.button_saved_text}>GUARDADO</Button>}
  
            <Button style={styles.button_logout} onPress={this.handleLogout}>SALIR DE MI CUENTA</Button>
          
          </View>
        
          <Header navigator={this.props.navigator} style={styles.header} title='Mi Perfil' />
        </ScrollView>
      </View>
    );
  }
}


const Container = connect(store => ({ account: store.account }))( Profile );
export default Container;


const styles = StyleSheet.create({
  
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  
  profile: {
    marginTop: Platform.OS == 'ios' ? 66 : Platform.Version > 17 ? 70 : 46,
    height: 140,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20
  },
  
    profile_bg: {
      height: 70,
      width: null,
      resizeMode: 'cover',
      position: 'absolute',
      right: 0,
      left: 0,
      top: 0
    },
    
    profile_img: {
      height: 100,
      width: 100,
      overflow: 'hidden',
      resizeMode: 'cover',
      borderRadius: 50,
      backgroundColor: 'transparent'
    },
  
  form: {
    marginLeft: 32,
    marginRight: 32
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
  
  button_save: {
    marginTop: 32,
    backgroundColor: '#2195D2'
  },
  
  button_saved: {
    marginTop: 32,
    backgroundColor: 'transparent',
    borderColor: '#2195D2',
    borderWidth: 1
  },
    button_saved_text: {
      color: '#2195D2'
    },
  
  button_fb: {
    backgroundColor: '#4B6EA7',
    marginBottom: 16
  },
  
  button_logout: {
    backgroundColor: '#D11F41',
    marginTop: 16
  }
  
  
});