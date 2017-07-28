// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Field, View, Text, Image, TextInput, TouchableOpacity, ScrollView, Button, Platform, StyleSheet } from '../components/core';

import Header from '../components/header';

class CreateDescription extends Component {

  prop: Object;
  state: Object;
  createEvent: Function;

  constructor(props: Object) {
    super(props);

    this.state = {
      bus_lines: this.props.data.bus_lines || '',
      subway_lines: this.props.data.subway_lines || '',
      description: this.props.data.description || '' };
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
  
  onSave = () => {
    this.props.onDescriptionAdded(this.state.bus_lines, this.state.subway_lines, this.state.description);
    this.props.navigator.pop();
  };

  render() {

    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.formFields}>
          <View style={styles.inputLineas}>
            <Field
              label='Colectivos'
              placeholder='ej: Lineas 42 - 68 - 55 - 96'
              value={this.state.bus_lines}
              onChangeText={this.handleInput('bus_lines')}
              autoCapitalize='none'
              returnKeyType='next'
              blurOnSubmit={false}
              style={styles.field}
              onSubmitEditing={this.handleNext('subway_lines')}
            />
          </View>

          <View style={styles.inputLineas}>
            <Field
              ref='subway_lines'
              label='Subtes'
              placeholder='ej: Lineas A - B - C'
              value={this.state.subway_lines}
              onChangeText={this.handleInput('subway_lines')}
              autoCapitalize='none'
              returnKeyType='next'
              blurOnSubmit={false}
              style={styles.field}
              onSubmitEditing={this.handleNext('description')}
            />
          </View>

          <View style={styles.inputDescripcion}>

            <Field
              ref='description'
              multiline={true}
              label='Descripción'
              placeholder='ej: Sobre este evento...'
              value={this.state.description}
              onChangeText={this.handleInput('description')}
              autoCapitalize='none'
              blurOnSubmit={false}
              style={styles.fieldMulti}
              inputStyle={{fontSize: 14}}
            />
          </View>
  
          <View style={styles.suggest}>
            <Button style={styles.button} onPress={this.onSave}>Guardar</Button>
          </View>
        </ScrollView>
  
        <Header navigator={this.props.navigator} title="Crear Descripción" />
      </View>
    );
  }
}

const Container = connect(store => store)( CreateDescription );
export default Container;


const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  formFields:{
    marginTop: Platform.OS == 'ios' ? 70 : Platform.Version > 17 ? 84 : 60,
    paddingBottom: 16
  },
  inputLineas:{
    marginTop:24,
    marginLeft:24,
    marginRight:24
  },
  inputDescripcion:{
    marginTop:24,
    marginLeft:24,
    marginRight:24
  },
  fieldMulti:{
    height:135
  },
  inputHead:{
    color:'#00000088'
  },
  search: {
    flex: 1,
    paddingTop: 20,
    paddingLeft:50
  },

  suggest: {
    height: 60,
    justifyContent: 'center'
  },

  button: {
    backgroundColor: '#8DC63F',
    marginLeft: 24,
    marginRight: 24
  },

});
