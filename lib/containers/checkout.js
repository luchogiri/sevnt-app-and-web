// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import I18n from '../helpers/i18n';
import ModalPicker from 'react-native-modal-picker';

import { View, Text, Image, TouchableOpacity, ScrollView, Button, Platform, StyleSheet } from '../components/core';


class Checkout extends Component {

  constructor(props: Object) {
    super(props);
    
    this.state = { quantity: this.props.event.activities.map(i => 0), options: [0,1,2,3,4,5,6,7,8,9,10] };
  }
  
  changedQuantity = (idx) => {
    return (option) => {
      let quantity = this.state.quantity;
      quantity[idx] = option.name;
      this.setState({ quantity });
    }
  };
  
  proceedToPurchase = () => {
    this.setState({ error: false });
    if ( [...this.state.quantity].sort().reverse()[0] == 0 )
      return this.setState({ error: true });
    this.props.navigator.push({ screen: 'Purchase', event: this.props.event, data: this.state.quantity });
  };

  render() {

    const eventDate = moment(this.props.event.start_date).utc();

    return (
      <View style={styles.wrapper}>
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


          <View style={styles.event_more}>
            
            {this.props.event.activities.map((activity, idx) =>
              <View style={styles.event_more_row} key={idx}>
                
                <View style={styles.event_more_text}>
                  <Text style={styles.event_more_row_text}>
                    {activity.name}&nbsp;&nbsp;-&nbsp;&nbsp;
                    {activity.price.value == 0 ? 'Gratis': '$ '+activity.price.value}</Text>
                </View>
                
                <ModalPicker
                  style={styles.event_more_row_select}
                  optionTextStyle={styles.event_more_row_text}
                  data={this.state.options.map(item => ({ key: item, name: item, label: item }) )}
                  initValue={this.state.quantity.toString()}
                  cancelText='Cancelar'
                  onChange={this.changedQuantity(idx)}>
                  <View style={styles.event_more_stock}>
                    <Text style={styles.event_more_row_text_qty}>{this.state.quantity[idx]}</Text>
                    <Image source={require('../img/icon-down-blue.png')} />
                  </View>
                </ModalPicker>
              </View>)}
  
            {this.state.error ? <Text style={styles.form_error}>Debe seleccionar al menos un tipo de entrada</Text>: null}

            <Button style={styles.button_buy} onPress={this.proceedToPurchase}>
              COMPLETAR PEDIDO
            </Button>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const Container = connect(store => store)( Checkout );
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

  event_more: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24
  },

    event_more_row: {
      flexDirection:'row',
      borderRadius: 25,
      borderWidth: 1,
      borderColor: '#a7a9ac',
      height: 50,
      marginTop: 12,
      alignItems: 'center',
      paddingLeft: 16,
      paddingRight: 16
    },
  
    event_more_text: {
      flex: 1,
      justifyContent: 'center'
    },
  
    event_more_stock: {
      width: 80,
      flexDirection:'row',
      alignItems: 'center'
    },

      event_more_row_text: {
        color: '#555555',
        fontSize: 14,
        fontWeight: '500'
      },

      event_more_row_text_qty: {
        color: '#555555',
        fontSize: 14,
        marginLeft: 40,
        marginRight: 12,
        fontWeight: '700'
      },

    button_buy: {
      backgroundColor: '#8DC63F',
      marginTop: 24,
      height: 48,
      borderRadius: 24
    },
  
    select: {
      height: 48,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    
    select_text: {
      color: '#888888',
      textAlign: 'center'
    },
  
    form_error: {
      marginTop: 16,
      fontSize: 14,
      color: '#ff0000'
    },

});
