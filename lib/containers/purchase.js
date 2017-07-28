// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import I18n from '../helpers/i18n';

import Camera from 'react-native-camera';
import { CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io';

import { View, Text, Image, TouchableOpacity, Modal, ScrollView, Field, Button, Platform, Dimensions, StyleSheet, KeyboardAvoidingView } from '../components/core';

import Events from '../actions/events';


class Purchase extends Component {

  props: Object;
  state: Object;
  handleInput: Function;
  handleNext: Function;
  handleBuy: Function;
  handleBought: Function;
  handleBuyError: Function;

  constructor(props: Object) {
    super(props);
    this.state = {
      error: false, loading: false, modalVisible: false, data: [], read: false,
      first_name: '', last_name: '', document_number: '', email: '',
      payment_method: '', holder_name: '', card_number: '', security_code: ''
    }
  }
  
  componentDidMount(){
    if( this.props.account.token ){
      this.setState({first_name:this.props.account.first_name, last_name:this.props.account.last_name, email:this.props.account.email});
    }
  }
  
  componentWillMount() {
    try { CardIOUtilities.preload() }
    catch(error) { console.log(error) }
  }
  
  
  setModalVisible = (visible) => {
    return () => {
      this.setState({ modalVisible: visible });
    };
  };

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

  handleBuy = () => {
  
    if (!this.props.account.token)
      return this.props.navigator.push({ screen: 'Login' });
  
    this.setState({ error: false, loading: true });
    
    const { first_name, last_name, document_number, email, payment_method, card_number, holder_name, security_code } = this.state;
  
    let isFree = true;
    this.props.event.activities.forEach((activity, i) => {
      if (activity.price.value != 0 && this.props.data[i]) isFree = false;
    });
    
    // validations
    if (!first_name || !last_name || !document_number || !email)
      return this.setState({ error: true, loading: false });
  
    if (!isFree && (!payment_method || !card_number || !holder_name || !security_code))
      return this.setState({ error: true, loading: false });
    
    let user_data = { first_name, last_name, document_number, email };
    let payment_info = { payment_method, holder_name, card_number, security_code };
    
    let data = {};
    data.event = this.props.event;
    data.payment_info = payment_info;
    data.tickets = [];
    this.props.data.forEach( (q,idx) => {
      for (let i = 0; i < q; i++) {
        data.tickets.push({ ...this.props.event.activities[idx], ...user_data });
      }
    });
    
    this.props
      .dispatch( Events.Buy( data, this.props.account.token) )
      .then(this.handleBought(data), this.handleBuyError);
    
  };

  handleBought = (data) => {
    return () => {
      this.setState({ error: false, loading: false });
      this.props.navigator.push({ screen: 'Thanks', data });
    }
  };

  handleBuyError = (err) => {
    this.setState({ error: true, loading: false });
    console.log(err);
  };
  
  onBarcodeRead = (evt) => {
    if (this.state.read) return;
    // Alert.alert('Data', evt.data);
    // if (evt.data && evt.type == 'org.iso.PDF417') {
    let info = evt.data.split('@');
      this.setState({ data: info, first_name: info[2], last_name: info[1], document_number: info[4], read: true});
      this.setModalVisible(false)();
    // }
  };

  scanCard = () => {
    CardIOModule.scanCard().then(card => {
      this.setState({card_number:card.cardNumber, payment_method:card.cardType, security_code:card.cvv});
    }).catch(() => {});
  };

  
  render() {

    const eventDate = moment(this.props.event.start_date).utc();
    let isFree = true;
    this.props.event.activities.forEach((activity, i) => {
      if (activity.price.value != 0 && this.props.data[i]) isFree = false;
    });

    return (
      <KeyboardAvoidingView behavior='position' style={styles.wrapper}>
        <ScrollView>

          <View style={styles.upper}>

            <Image style={styles.event_img} source={{ uri: this.props.event.img }} />
            <Image style={styles.event_img_bg} source={require('../img/bg-detail.png')} />

            <View style={styles.header}>
              <TouchableOpacity style={styles.header_back} onPress={this.props.navigator.pop}>
                <Image source={require('../img/icon-back.png')} style={{width: 12, height: 20}} />
              </TouchableOpacity>

              <View style={styles.header_date}>
                <Text style={styles.header_month}>{I18n(eventDate.format('MMM'))}</Text>
                <Text style={styles.header_day}>{eventDate.format('DD')}</Text>
              </View>
            </View>

            <View style={styles.event_info}>
              <Text style={styles.event_info_title}>
                {this.props.event.name}
              </Text>
            </View>
          </View>


          <View style={styles.form}>
            <View style={styles.form_component}>
              <Text style={styles.form_title}>DATOS DE ENTRADA</Text>
              <TouchableOpacity style={styles.form_icon} onPress={() => { this.setState({read: false}); this.setModalVisible(true)() }}>
                <Image style={{height: 20, width: 20}} source={require('../img/icon-camera.png')} />
              </TouchableOpacity>
            </View>
  
            <Modal
              animationType={"slide"}
              transparent={true}
              visible={this.state.modalVisible}>
              <View style={styles.modal}>
                <View style={{alignItems: 'center', justifyContent: 'center' }}>
                  <Camera
                    ref={(cam) => { this.camera = cam; }}
                    style={styles.preview}
                    aspect='fill'
                    defaultOnFocusComponent={true}
                    torchMode={Camera.constants.TorchMode.on}
                    onBarCodeRead={this.onBarcodeRead} />
                  <Button style={styles.button_cancel} onPress={this.setModalVisible(false)}>
                    Cancelar
                  </Button>
                </View>
              </View>
            </Modal>
            
            <View style={styles.help}>
              <View style={styles.help_pointer} />
              <Text style={styles.help_text}>¿Sabías que podés tomar todos los datos para tu entrada escaneando tu documento? ¡Intentalo!</Text>
            </View>

            <Field
              label='NOMBRE'
              placeholder='ej: Juan'
              value={this.state.first_name || this.state.data[1]}
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
              value={this.state.last_name || this.state.data[2]}
              onChangeText={this.handleInput('last_name')}
              returnKeyType='next'
              blurOnSubmit={false}
              style={styles.field}
              onSubmitEditing={this.handleNext('document_number')}
            />

            <Field
              ref='document_number'
              label='NUMERO DE DOCUMENTO'
              placeholder='ej: 23444555'
              value={this.state.document_number || this.state.data[4]}
              onChangeText={this.handleInput('document_number')}
              keyboardType='numeric'
              autoCapitalize='none'
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
              returnKeyType={isFree? 'done': 'next'}
              blurOnSubmit={false}
              style={styles.field}
              onSubmitEditing={isFree? () =>{ this.refs.email.blur(); }: this.handleNext('payment_method')}
            />
  
            {isFree ? null :
              <View>
                <View style={styles.form_component}>
                  <Text style={styles.form_title}>FORMA DE PAGO</Text>
                  <TouchableOpacity style={styles.form_icon} onPress={this.scanCard}>
                    <Image style={{height: 20, width: 20}} source={require('../img/icon-camera.png')}/>
                  </TouchableOpacity>
                </View>
      
                <View style={styles.help}>
                  <View style={styles.help_pointer}/>
                  <Text style={styles.help_text}>¿Sabías que podés escanear los datos de tu tarjeta de crédito? ¡Intentalo!</Text>
                </View>
                
                <Field
                  ref='payment_method'
                  label='MEDIO DE PAGO'
                  placeholder='ej: Visa'
                  value={this.state.payment_method}
                  onChangeText={this.handleInput('payment_method')}
                  returnKeyType='next'
                  blurOnSubmit={false}
                  style={styles.field}
                  onSubmitEditing={this.handleNext('holder_name')}
                />
      
                <Field
                  ref='holder_name'
                  label='NOMBRE DEL TITULAR'
                  placeholder='como figura en la tarjeta'
                  value={this.state.holder_name}
                  onChangeText={this.handleInput('holder_name')}
                  returnKeyType='next'
                  blurOnSubmit={false}
                  style={styles.field}
                  onSubmitEditing={this.handleNext('card_number')}
                />
      
                <Field
                  ref='card_number'
                  label='NUMERO DE TARJETA'
                  placeholder='ej: 4444 1234 1234 1234'
                  value={this.state.card_number}
                  onChangeText={this.handleInput('card_number')}
                  keyboardType='numeric'
                  autoCapitalize='none'
                  returnKeyType='next'
                  blurOnSubmit={false}
                  style={styles.field}
                  onSubmitEditing={this.handleNext('security_code')}
                />
      
                <Field
                  ref='security_code'
                  label='CODIGO DE SEGURIDAD'
                  placeholder='ej: 123'
                  value={this.state.security_code}
                  onChangeText={this.handleInput('security_code')}
                  keyboardType='numeric'
                  autoCapitalize='none'
                  returnKeyType='done'
                  style={styles.field}
                />
              </View>}

            {this.state.error ? <Text style={styles.form_error}>Revise sus datos</Text>: null}
            
            <Button style={styles.button_buy} onPress={this.handleBuy}>
              {isFree? 'OBTENER' : 'COMPRAR'}
            </Button>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const Container = connect(store => store)( Purchase );
export default Container;


const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

  upper: {
    height: 200
  },

  event_img: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
    width: null,
    height: null
  },

    event_img_bg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      resizeMode: 'cover',
      width: null,
      height: null,
      opacity: 0.8
    },


  header: {
    height: Platform.OS == 'ios' ? 70 : Platform.Version > 17 ? 84 : 60,
    marginTop: Platform.OS == 'ios' ? 20 : Platform.Version > 17 ? 24 : 0,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

    header_back: {
      width: 30,
      marginTop: 16,
      marginLeft: 12
      },

    header_date: {
      height: 66,
      width: 60,
      marginTop: 16,
      alignItems: 'center'
    },

      header_month: {
        fontSize: 15,
        lineHeight: 15,
        color: '#ffffff'
      },

      header_day: {
        fontSize: 24,
        lineHeight: 24,
        color: '#ffffff'
      },


  event_info: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 4,
    paddingLeft: 20
  },

    event_info_title: {
      marginBottom: 16,
      color: '#ffffff',
      fontSize: 30,
      fontWeight: '300'
    },

  form: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24
  },
  
    form_component: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    form_title: {
      marginTop: 16,
      marginBottom: 16,
      fontSize: 16,
      fontSize: 16,
      fontWeight: '700',
      color: '#555555',
      flex: 1
    },
  
    form_icon: {
      width: 40
    },

    field: {
      marginBottom: 24
    },

    form_error: {
      marginTop: 16,
      fontSize: 14,
      color: '#ff0000'
    },
  
  
  help: {
    backgroundColor: '#00000099',
    borderRadius: 8,
    padding: 8,
    position: 'relative',
    marginBottom: 16,
  },
    help_pointer: {
      position: 'absolute',
      right: 16,
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

  button_buy: {
    backgroundColor: '#8DC63F',
    marginTop: 32,
    marginBottom: 24
  },
  
  modal: {
    flex: 1,
    backgroundColor: '#00000099',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 64
  },
  
  button_cancel: {
    marginTop: 48,
    marginBottom: 16,
    borderRadius: 24,
    height: 48,
    width: Dimensions.get('window').width - 100
  },
  
  preview: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: Dimensions.get('window').width - 100
  },

});
