// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

import { View, Text, Image, Button, StyleSheet, Platform } from '../components/core';

import Config from '../actions/config';


class Onboarding extends Component {
  
  props: Object;
  state: Object;
  
  
  constructor(props: Object) {
    super(props);
    this.state = {};
  }
  
  dismiss = () => {
    this.props.dispatch( Config.Update({ show_onboarding: false }) );
    this.props.navigator.popToTop();
  };
  
  
  render() {
    return (
      <View style={styles.wrapper}>
        <Image style={styles.status_bar} source={require('../img/bg-nav.jpg')} />
        
        <Swiper
          ref='slider'
          loop={false}
          dot={<View style={styles.pagination_dot} />}
          activeDot={<View style={styles.pagination_dot_active} />}
          paginationStyle={styles.pagination}>
          
          <View style={styles.slide}>
            <View style={styles.top}>
              <Image style={styles.img} source={require('../img/step-onboarding-1.png')} />
            </View>
            <View style={styles.bottom}>
              <Text style={styles.title}>Busca</Text>
              <Text style={styles.desc}>tu evento favorito</Text>
            </View>
          </View>
          
          <View style={styles.slide}>
            <View style={styles.top}>
              <Image style={styles.img} source={require('../img/step-onboarding-2.png')} />
            </View>
            <View style={styles.bottom}>
              <Text style={styles.title}>Compra</Text>
              <Text style={styles.desc}>y asocialo con tus datos personales</Text>
            </View>
          </View>
          
          <View style={styles.slide}>
            <View style={styles.top}>
              <Image style={styles.img} source={require('../img/step-onboarding-3.png')} />
            </View>
            <View style={styles.bottom}>
              <Text style={styles.title}>Entra!</Text>
              <Text style={styles.desc}>Tu documento es tu entrada!</Text>
              <Button onPress={this.dismiss} style={styles.button}>COMENZAR</Button>
            </View>
          </View>
        </Swiper>
        
      </View>
    );
  }
}

const Container = connect(store => store)( Onboarding );
export default Container;


const styles = StyleSheet.create({
  
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  
  status_bar: {
    height: Platform.OS == 'ios' ? 20 : Platform.Version > 17 ? 24 : 0,
    width: null,
    resizeMode: 'cover'
  },
  
  slide: {
    flex: 1,
    paddingTop: 48
  },

  pagination: {
    paddingBottom: 72
  },
    pagination_dot: {
      backgroundColor: '#90A4AE',
      width: 12,
      height: 12,
      borderRadius: 6,
      marginRight: 8,
      marginLeft: 8
    },
      pagination_dot_active: {
        backgroundColor: '#D11F41',
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: 8,
        marginLeft: 8
      },

  
    top: {
      flex: 1,
      marginLeft: 40,
      marginRight: 40,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
      img: {
        flex: 1,
        resizeMode: 'contain'
      },
  
    bottom: {
      flex: 1,
      paddingTop: 16
    },
  
      title: {
        fontSize: 48,
        textAlign: 'center',
        color: '#D11F41'
      },
  
      desc: {
        fontSize: 24,
        textAlign: 'center',
        color: '#D11F41',
        marginTop: 8,
        marginLeft: 56,
        marginRight: 56
      },
  
      button: {
        position: 'absolute',
        bottom: 40,
        left: 40,
        right: 40,
        backgroundColor: '#8DC63F'
      }
});