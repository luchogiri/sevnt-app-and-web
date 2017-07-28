// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, KeyboardAvoidingView, Modal, Field, Button, Platform, StyleSheet } from '../components/core';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Header from '../components/header';


class CreatePlace extends Component {

  prop: Object;
  state: Object;
  createEvent: Function;

  constructor(props: Object) {
    super(props);

    this.state = { name: '', date:'', modal: false, venue_name: '', venue_address: '', venue_city: '' };
  }

  handleInput = (field) => {
    return (value) => {
      this.setState({ [field] : value });
    };
  };
  
  setModalVisible = (visible) => {
    return () => {
      this.setState({ modal: visible });
    };
  };
  
  handleNext = (next) => {
    return () => {
      this.refs[next].focus();
    };
  };
  
  createVenue = () => {
    let { venue_name, venue_address, venue_city } = this.state;
    if (!venue_name || !venue_address || !venue_city) return false;
    this.props.onPlaceSelected({ name: venue_name, vicinity: venue_address, city: venue_city });
    this.setModalVisible(false)();
    this.props.navigator.pop();
  };
  
  render() {
    return (
      <View style={styles.wrapper}>

        <Header navigator={this.props.navigator} />

        <View style={styles.search}>
          <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={2} // minimum length of text to search
            autoFocus={false}
            listViewDisplayed='auto'    // true/false/undefined
            fetchDetails={true}
            renderDescription={(row = {}) => {
                return ((row.terms||[])[0]||{}).value
              }
            }
            onPress={(data, details = null) => {
              this.props.onPlaceSelected(details);
              this.props.navigator.pop();
            }}
            getDefaultValue={() => ''}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: 'AIzaSyCa2vTlvJdL8OEnn-UB-MU_-yhc_pZJlE0',
              language: 'es',
              types: 'establishment',
            }}
            styles={{
              poweredContainer:{
                height:1,width:1
              },
              powered:{
                height:1,width:1
              },
              textInputContainer:{
                backgroundColor:'transparent',borderWidth:0,borderColor:'none'
              },
              description: {
                fontWeight: 'bold',
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
              textInputContainer:{
                backgroundColor:'transparent',borderWidth:0, borderColor:'transparent'
              }
            }}

            currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
            currentLocationLabel="Current location"
            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={{
              // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }}
            GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              rankby: 'distance',
              types: 'bar,cafe,casino,university,stadium, shopping_mall, school, rv_park, restaurant, park, night_club, museum, movie_theater, local_goverment_office',
            }}

            // bar,cafe,casino,university,stadium, shopping_mall, school, rv_park, restaurant, park, night_club, museum, movie_theater, local_goverment_office
            //filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

          />
        </View>

        <View style={styles.suggest}>
          <Button style={styles.button} onPress={this.setModalVisible(true)}>ó ingresar la dirección...</Button>
        </View>
        
  
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modal}>
          <KeyboardAvoidingView behavior='position' style={styles.modal}>
            <View style={styles.ctn_modal}>
              <Field
                label='Nombre del Lugar'
                placeholder='ej: Teatro Gran Rex'
                value={this.state.venue_name}
                onChangeText={this.handleInput('venue_name')}
                returnKeyType='next'
                blurOnSubmit={false}
                style={styles.field}
                onSubmitEditing={this.handleNext('venue_address')}
              />
  
              <Field
                ref='venue_address'
                label='Dirección'
                placeholder='ej: Av. Madero 909'
                value={this.state.venue_address}
                onChangeText={this.handleInput('venue_address')}
                returnKeyType='next'
                blurOnSubmit={false}
                style={styles.field}
                onSubmitEditing={this.handleNext('venue_city')}
              />
  
              <Field
                ref='venue_city'
                label='Ciudad'
                placeholder='ej: Ciudad de Buenos Aires'
                value={this.state.venue_city}
                onChangeText={this.handleInput('venue_city')}
                returnKeyType='done'
                style={styles.field}
              />
              
              <Button style={[styles.button, {marginTop: 16, marginLeft: 0, marginRight: 0}]} onPress={this.createVenue}>Confirmar</Button>
              <Button style={[styles.button_cancel, {marginTop: 16}]} onPress={this.setModalVisible(false)}>Cancelar</Button>
            </View>
          </KeyboardAvoidingView>
        </Modal>
      </View>
    );
  }
}

const Container = connect(store => store)( CreatePlace );
export default Container;


const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

  search: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 22 : Platform.Version > 17 ? 26 : 2,
    marginLeft:50,
    marginRight:50,
  },

  suggest: {
    height: 70,
    justifyContent: 'center'
  },

  button: {
    backgroundColor: '#8DC63F',
    marginLeft: 24,
    marginRight: 24
  },
  
  modal: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'flex-end',
  },
  
  ctn_modal: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingVertical: 24,
    backgroundColor: "#ffffff",
    borderRadius: 8
  },
  
  field:{
    marginTop: 16
  },

});
