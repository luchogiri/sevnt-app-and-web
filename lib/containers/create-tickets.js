// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import I18n from '../helpers/i18n';

import { Field, View, Text, Image, TextInput, TouchableOpacity, ScrollView, Button, Platform, StyleSheet } from '../components/core';

import Header from '../components/header';
import ActivityModel from '../models/activities';

class CreateTickets extends Component {
  
  prop: Object;
  state: Object;
  createEvent: Function;
  
  constructor(props: Object) {
    super(props);
    this.state = { error: false, activities: this.props.data, free: false, limitless: false, data: new ActivityModel() };
  }
  
  handleInput = (field) => {
    return (value) => {
      const data = this.state.data;
      data[field] = field == 'stock' ? value.replace(/[a-zA-Z\.]/g, ''): value;
      this.setState({ data });
    };
  };

  handleSubInput = (parent, field) => {
    return (value) => {
      const data = this.state.data;
      data[parent][field] = value.replace(/[a-zA-Z]/g, '');
      this.setState({ data });
    };
  };
  
  handleNext = (next) => {
    return () => {
      this.refs[next].focus();
    };
  };
  
  addActivity = () => {
    
    this.setState({ error: false });
    try { this.state.data.validate(); }
    catch (err) { return this.setState({ error: true }) }
    this.state.data.price.value = Math.floor(Number(this.state.data.price.value)*1.1*100)/100;
    this.setState({ activities: [...this.state.activities, this.state.data.lean()], data: new ActivityModel(), free: false, limitless: false });
  };
  
  createActivities = () => {
    // complete creation
    if (!this.state.activities.length) return;
    this.props.onTicketsCreated(this.state.activities);
    this.props.navigator.pop();
  };
  
  removeActivity = (i) => {
    return () => {
      this.setState({ activities : [...this.state.activities.slice(0, i), ...this.state.activities.slice(i+1)] });
    };
  };
  
  render() {
    
    return (
      <View style={styles.wrapper}>
        <ScrollView>
        
          <Header navigator={this.props.navigator} title="Tipos de Entrada" />
          
          <View style={styles.activities}>
            {this.state.activities.map((activity, i) => (
              <View style={styles.activity} key={i}>
                <Text style={{color: "#333"}}>{activity.name}</Text>
                {/*<Text style={{color: "#333"}}>Fecha de la actividad</Text>*/}
                <Text style={{color: "#333"}}>
                  {activity.stock == 0? 'Entradas sin límite ': activity.stock + ' entradas '}
                  {(activity.price || {}).value == 0? 'Gratis': 'a $ '+ (activity.price || {}).value +' c/u.'}
                </Text>
                <TouchableOpacity style={styles.activity_remove} onPress={this.removeActivity(i)}>
                  <Text style={{color: 'red', fontSize: 26, transform:[{scaleY: 0.75}]}}>x</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          
          <View style={styles.fields}>
            <View style={styles.input}>
              <Field
                label='Nombre'
                placeholder='ej: Platea Alta o Entrada General'
                value={this.state.data.name}
                onChangeText={this.handleInput('name')}
                autoCapitalize='none'
                returnKeyType='next'
                blurOnSubmit={false}
                style={styles.field}
                onSubmitEditing={this.handleNext('stock')}
              />
            </View>
  
            <View style={styles.inline}>
              <View style={[styles.input, styles.input_inline]}>
                <Field
                  ref='stock'
                  label='Cantidad'
                  placeholder='ej: 500'
                  value={this.state.data.stock}
                  onChangeText={this.handleInput('stock')}
                  autoCapitalize='none'
                  keyboardType='numeric'
                  returnKeyType='next'
                  blurOnSubmit={false}
                  style={styles.field}
                  onSubmitEditing={this.handleNext('price')}
                />
              </View>
    
              <Button style={[styles.button, styles.button_inline, !this.state.limitless? styles.disabled: null]}
                      onPress={() => {
                        const data = this.state.data;
                        data.stock = !this.state.limitless ? '0' : '';
                        this.setState({ limitless: !this.state.limitless, data })
                      }}>
                SIN LIMITE
              </Button>
            </View>
            
            <View style={styles.inline}>
              <View style={[styles.input, styles.input_inline]}>
                <Field
                  ref='price'
                  multiline={true}
                  label='Precio'
                  placeholder='ej: 390'
                  value={this.state.data.price.value}
                  onChangeText={this.handleSubInput('price', 'value')}
                  autoCapitalize='none'
                  returnKeyType='done'
                  keyboardType='numeric'
                  style={styles.field}
                />
              </View>
              
              <Button style={[styles.button, styles.button_inline, !this.state.free? styles.disabled: null]}
                      onPress={() => {
                        const data = this.state.data;
                        data.price.value = !this.state.free ? '0' : '';
                        this.setState({ free: !this.state.free, data }) }}>
                ENTRADA GRATUITA
              </Button>
            </View>
  
            {!this.state.free && this.state.data.price.value ?
              <View style={styles.help}>
                <View style={styles.help_pointer} />
                <Text style={styles.help_text}>Costo del servicio $ {Math.floor(this.state.data.price.value * 0.1 * 100)/100}</Text>
                <Text style={styles.help_text}>Precio final al público $ {Math.floor(this.state.data.price.value * 1.1 * 100)/100}</Text>
              </View>: null}
            
          </View>
  
          {this.state.error ?
            <View style={styles.errors}>
              {this.state.data.errors.map(err => <Text style={styles.error} key={err.name}>{I18n(err.message)} {I18n('field '+ err.name)}</Text>)}
            </View>: null}
  
          <View style={styles.suggest}>
            <Button style={styles.button} onPress={this.addActivity}>AGREGAR</Button>
          </View>
          
          <View style={styles.suggest}>
            <Button style={[styles.button, !this.state.activities.length ? styles.disabled: {backgroundColor:'#2195D2'}]} onPress={this.createActivities}>LISTO</Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const Container = connect(store => store)( CreateTickets );
export default Container;


const styles = StyleSheet.create({
  
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  
  fields:{
    marginTop:16,
    marginBottom:16
  },
  
    inline: {
      flex: 1,
      flexDirection: 'row'
    },
  
    input:{
      marginTop: 24,
      marginLeft: 24,
      marginRight: 24
    },
  
    input_inline: {
      flex: 1,
      marginRight: 0
    },
  
    button_inline: {
      width: 170,
      marginTop: 36
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
  
  disabled: {
    backgroundColor: '#bbbbbb',
  },
  
  activities: {
    marginTop: Platform.OS == 'ios' ? 70 : 84
  },
    
    activity: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#a7a9ac',
      marginTop: 12,
      marginLeft: 16,
      marginRight: 16,
      paddingRight: 24,
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 12,
      position: 'relative',
    },
  
    activity_remove: {
      position: 'absolute',
      right: 0,
      top: 0,
      height: 32,
      width: 32,
      alignItems: 'center',
      justifyContent:'center'
    },
  
  
    help: {
      backgroundColor: '#00000099',
      borderRadius: 8,
      padding: 8,
      position: 'relative',
      margin: 16,
      marginBottom: 8
    },
      help_pointer: {
        position: 'absolute',
        left: 24,
        top: -10,
        borderColor: 'transparent',
        borderBottomColor: '#00000099',
        borderWidth: 14,
        borderBottomWidth: 10,
        borderTopWidth: 0,
        height: 0,
        width: 0
      },
        help_text: {
          fontSize: 14
       },
  
    errors: {
      marginLeft: 24,
      marginRight: 24,
    },
      
      error: {
        color: '#ff0000',
        fontSize: 13,
        marginTop: 4
      },
});
