// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, Button, TouchableOpacity, StyleSheet, Platform } from '../components/core';

import Header from '../components/header';


class Thanks extends Component {

  props: Object;
  state: Object;


  constructor(props: Object) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <View style={styles.wrapper}>

        <Text style={styles.headTitle}>Felicitaciones!</Text>
        <Text style={styles.firstTxt}>Ya tenés tu entrada para {this.props.data.event.name}.</Text>
        <Text style={styles.txt}>
          Podrás verla en tu perfil entrando a mis entradas y te enviaremos
          tambien la confirmación por email para tu tranquilidad.
        </Text>
        
        <Text style={styles.txt}>
          Lo único que tenés que hacer ahora es ir el dia
          del evento con tu documento para poder ingresar.
        </Text>

        {/*<Button style={styles.nav_item_create} onPress={this.props.navigator.screen('Purchases')}>*/}
          {/*IR A MIS COMPRAS*/}
        {/*</Button>*/}
        
        <Button style={styles.nav_item_create} onPress={this.props.navigator.popToTop}>VOLVER Al INICIO</Button>

        <Header navigator={this.props.navigator} title="Compra Exitosa" left='none' />
      </View>
    );
  }
}

const Container = connect(store => store)( Thanks );
export default Container;

const styles = StyleSheet.create({

  headTitle:{color:'#D11F41',fontSize:36,textAlign:'center',marginTop:40},
  firstTxt:{fontSize:16,fontWeight:'bold',color:'#4D4E4E',textAlign:'center',marginBottom:25},
  txt:{color:'#6E6F6F',fontSize:14,marginLeft:25,marginRight:25,marginTop:10},
  nav_item_create:{marginLeft:20,marginRight:20,marginTop:16,backgroundColor: '#8DC63F'},
  nav_item_boughts:{marginLeft:20,marginRight:20,marginTop:24,backgroundColor: '#2195D2'},

  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS == 'ios' ? 66 : 70
  },

  list_item: {
    height: 100,
    backgroundColor: '#f5f5f5'
  }

});
