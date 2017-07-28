// @flow

import React, { Component } from 'react';
import Camera from 'react-native-camera';
import { connect } from 'react-redux';

import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from '../components/core';

import Reservations from '../actions/reservations';


class Validate extends Component {

  props: Object;

  constructor(props: Object) {
    super(props);
    this.state = { data: [], read: false, readed: false, readError: false, scanned: 0, flash: Camera.constants.FlashMode.off };
  }

  onBarcodeReaded = (evt) => {
    
    if (this.state.readed) return;
    if (evt.data) {
      // document_number == data[4] (new format), data[1] (old format)
      this.setState({ readed: true });
      let data = evt.data.split('@');
      this.props
        .dispatch( Reservations.Accredit( this.props.event._id, { document_number: data[4] }, this.props.account.token) )
        .then(this.handleValidate(evt.data), this.handleError);
    }
  };
  
  handleValidate = (data) => {
    return (res) => {
      if (res.success)
        this.setState({ data: res.data, read: true, scanned: this.state.scanned+1});
      else {
        this.setState({ readError: true, data: data.split('@') });
      }
    };
  };
  
  handleError = (err) => {
    console.log(err);
  };


  render() {
    return (
      <View style={styles.wrapper}>
      <ScrollView>
        
        <View style={styles.header} />
        
        <View style={styles.back}>
          <TouchableOpacity onPress={this.props.navigator.pop}>
            <Text>Volver</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.card}>
          
          {!this.state.read && !this.state.readError ?
            <Camera
              ref={(cam) => { this.camera = cam; }}
              style={styles.preview}
              aspect='fill'
              defaultOnFocusComponent={false}
              torchMode={this.state.flash}
              onBarCodeRead={this.onBarcodeReaded} />:
            null}
            
          {!this.state.read && !this.state.readError ?
            <View style={styles.data}>
              <View style={[styles.data_check, {backgroundColor: '#bbbbbb'}]} />
              <View style={styles.data_content}>
                <Text style={styles.data_text}>Esperando lectura...</Text>
              </View>
            </View>:
            null}
  
          {!this.state.read && !this.state.readError ?
            <TouchableOpacity onPress={()=> {
              this.setState({ flash: this.state.flash == Camera.constants.FlashMode.on ?
                              Camera.constants.FlashMode.off:
                              Camera.constants.FlashMode.on }); }}
              style={{position: 'absolute', right: 48, top: 48}}>
                <Image source={require('../img/icon-flash.png')} />
            </TouchableOpacity>: null
          }
            
            

          {this.state.read ?
            <View style={styles.data}>
              <View style={styles.data_check} />
              <View style={styles.data_content}>
                <Text style={styles.data_text}>Ticket: {this.state.data.name}</Text>
                <Text style={styles.data_text}>{this.state.data.first_name}</Text>
                <Text style={styles.data_text}>{this.state.data.last_name}</Text>
                <Text style={styles.data_text}>{this.state.data.document_number}</Text>
              </View>
              <TouchableOpacity style={styles.data_next} onPress={(() => { this.setState({ readed: false, read: false, readError: false, data: [] }) }).bind(this)}>
                <Text style={styles.data_next_text}>Continuar</Text>
              </TouchableOpacity>
            </View>:null
          }

          {this.state.readError ?
            <View style={styles.data}>
              <View style={[styles.data_check, { backgroundColor: 'red' }]} />
              <View style={styles.data_content}>
                <Text style={styles.data_text}>NO AUTORIZADO</Text>
                <Text style={styles.data_text}>{this.state.data[1]}</Text>
                <Text style={styles.data_text}>{this.state.data[2]}</Text>
                <Text style={styles.data_text}>{this.state.data[4]}</Text>
              </View>
              <TouchableOpacity style={styles.data_next} onPress={(() => { this.setState({ readed: false, read: false, readError: false, data: [] }) }).bind(this)}>
                <Text style={styles.data_next_text}>Continuar</Text>
              </TouchableOpacity>
            </View>:null
          }

          {/*<TouchableOpacity style={styles.data_next} onPress={() => { this.onBarcodeReaded({ type: 'org.iso.PDF417', data: '00243060325@GIRIBONE@LUIS ALBERTO@M@33150957@A@21/07/1987@30/01/2014'}) }}>*/}
            {/*<Text style={styles.data_next_text}>Sincronizar</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*<Text style={styles.info}>132 Entradas sincronizadas</Text>*/}
          <Text style={styles.info}>{this.state.scanned} Tickets Escaneados</Text>

          </View>
        </ScrollView>
      </View>
    )
  }
}

const Container = connect(store => store)( Validate );
export default Container;


const styles = StyleSheet.create({
  info:{color:'#333'},

  wrapper: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },

  header: {
    backgroundColor: '#a61362',
    paddingTop: 32,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 200
  },

  back: {
    height: 30,
    marginTop: 32,
    width: 80,
    paddingLeft: 16,
    justifyContent: 'center'
  },

  card: {
    height: 580,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    backgroundColor: '#ffffff',
    marginLeft: 32,
    marginRight: 32,
    marginTop: 16,
    paddingTop: 32,
    marginTop: 16,
    alignItems: 'center',
    position: 'relative'
  },

  data: {
    marginTop: 50,
    alignItems: 'center'
  },

  data_check: {
    height: 70,
    width: 70,
    backgroundColor: 'green',
    borderRadius: 35,
    marginBottom: 25
  },

  data_content: {
  },

  data_text: {
    fontSize: 22,
    marginTop: 2,
    color: '#444444',
    textAlign: 'center'
  },

  data_next: {
    height: 36,
    width: 260,
    backgroundColor: '#a61362',
    justifyContent: 'center',
    borderRadius: 18,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 24,
    marginBottom:15
  },

  data_next_text: {
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center'
  },

  preview: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: Dimensions.get('window').width - 130
  },

  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
