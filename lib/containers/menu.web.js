// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, Image, Button, TouchableOpacity, StyleSheet, Platform } from '../components/core';

import { Link } from 'react-router'

import I18n from '../helpers/i18n';
import Account from '../actions/account';


class Menu extends Component {

  props: Object;
  state: Object;
  retrieveUser: Function;
  onUserReceived: Function;
  onUserError: Function;


  constructor(props: Object) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.account.token && this.retrieveUser();
  };

  retrieveUser = () => {
    this.props
      .dispatch( Account.UserInfo( this.props.account.token ) )
      .then(this.onUserReceived, this.onUserError);
  };

  onUserReceived = () => {
    // loading false error false
  };

  onUserError = () => {
    this.props.dispatch( Account.Logout() );
  };


  navigate = (screen) => {
    return () => {
      if (screen == 'Home') this.props.navigator().popToTop();
      else this.props.navigator().push({ screen });
      this.props.close();
    }
  };


  render() {

    const { account } = this.props;

    return (
      <View style={styles.wrapper}>

        <View style={styles.imageContainerTop}>
          <Image style={styles.bg_logo} source={require('../img/bg_logo.png')} />
        </View>
        <View style={styles.logoContainer}>
          <Link to="/">
            <Image style={styles.logo_sevnt} source={require('../img/logo_sevnt.png')} />
          </Link>
        </View>

        <View style={styles.status_bar} />
        {/*
        <View style={styles.imageContainer}>
          <Image style={styles.imgHuella} source={require('../img/left_bar-huella.png')} />
        </View>
        */}
        {account.token ?
          <View style={styles.profile}>
            <Image style={styles.profile_img}
                   source={account.picture ? {uri: account.picture}:require('../img/img-profile.png')} />
            <Text style={styles.profile_name}>{account.first_name}</Text>
            <Text style={styles.profile_well} onPress={this.navigate('Profile')}>Editar Perfil</Text>
          </View>:

          <View style={styles.profile}>
            <Image style={styles.profile_img} source={require('../img/img-profile.png')} />
            <Text style={styles.profile_name}>Invitado</Text>
            <Text style={styles.profile_well}>Bienvenido</Text>
          </View>}

        {!this.props.account.token ?

          <View style={styles.menu}>
            <Button style={styles.nav_item_login} onPress={this.navigate('Login')}>INGRESAR</Button>
          </View>
          :
          <View style={styles.menu}>

            <TouchableOpacity style={styles.nav_item} onPress={this.navigate('Favorites')}>
              <Text style={styles.nav_item_text}>Mis Favoritos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nav_item} onPress={this.navigate('Purchases')}>
              <Text style={styles.nav_item_text}>Mis Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nav_item} onPress={this.navigate('Events')}>
              <Text style={styles.nav_item_text}>Mis Eventos</Text>
            </TouchableOpacity>

            <Button style={styles.nav_item_create} onPress={this.navigate('Create')}>CREAR EVENTO</Button>
          </View>
        }
        {/*
        <View style={styles.imageContainer}>
          <Image style={styles.imgHuella} source={require('../img/left_bar-huella.png')} />
        </View>
        */}

        <View style={styles.predefined}>
          {['MUSIC', 'THEATRE', 'FASHION', 'SPIRITUALITY', 'COURSES', 'PROFESSIONAL', 'SPORTS', 'EDUCATION',
            'PARTIES', 'EXHIBITIONS AND MUSEUMS', 'INFANTILE', 'RECOMMENDED'].map(category => (
            <TouchableOpacity key={category} style={styles.predefined_item} onPress={this.navigate(category)}>
              <Link style={styles.link} to={"/categories/"+I18n(category)}>
                <Text style={styles.predefined_item_text}>{I18n(category)}</Text>
              </Link>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.socialLinks}>
          <Text style={styles.txtSocial}>Seamos Amigos! </Text>
          <TouchableOpacity>
            <Image style={styles.icon_fb} source={require('../img/icon_fb.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.icon_tw} source={require('../img/icon_tw.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Container = connect(store => ({ account: store.account }))( Menu );
export default Container;


const styles = StyleSheet.create({
  link: {
    textDecoration:'none'
  },
  
  socialLinks: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    marginTop:8,
    marginBottom:8,
    marginRight:15
  },
  
    txtSocial:{
      color:'#a3a2a0'
    },
  
  imageContainerTop: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  
    bg_logo:{
       width:330,
       height:60,
    },
  
    logoContainer:{
      flex:0,
      flexDirection:'row',
    },
  
    logo_sevnt:{
      width:103,
      height:38,
      marginTop:-48,
      marginLeft:10
    },
  
    icon_fb:{width:24,height:22,marginLeft:5,marginRight:5},
    icon_tw:{width:24,height:22,marginRight:5},

    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
      imgHuella: {
        width:320,
        height:480,
      },

     /*
       imageContainer:{
         height:400,
       },
       imgHuella:{
         flex:1
       },
     */

  wrapper: {
    /*flex: 1,*/
    flex: Platform.OS != 'web' ? 1 : 0.3 ,
    backgroundColor: '#f2f2f2',

  },

  status_bar: {
    height: Platform.OS == 'ios' ? 20 : 24,
    // backgroundColor: 'rgb(203, 14, 67)',
  },

  profile: {
    height: 170,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
    borderStyle: 'solid'
  },

    profile_img: {
      height: 80,
      width: 80,
      overflow: 'hidden',
      resizeMode: 'cover',
      borderRadius: 40,
      backgroundColor: 'transparent'
    },

    profile_name: {
      marginTop: 10,
      fontSize: 18,
      color: '#333333'
    },

    profile_well: {
      fontSize: 15,
      color: '#333333'
    },


  nav: {

  },

    nav_item: {
      height: 48,
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: '#e3e3e3',
      backgroundColor: '#efefef',
      justifyContent: 'center',
      paddingLeft: 32,
    },

      nav_item_text: {
        fontSize: 17,
        fontWeight: '400',
        color: '#444444'
      },

    nav_item_login: {
      backgroundColor: '#2195D2',
      height: 35,
      marginTop: 18,
      marginBottom: 10,
      marginLeft: 20,
      marginRight: 20
    },

    nav_item_create: {
      backgroundColor: '#a61362',
      height: 36,
      marginTop: 24,
      marginLeft: 20,
      marginRight: 20
    },

    predefined: {
      marginTop: 10
    },

      predefined_item: {
        height: 35,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        backgroundColor: '#fbfbfb',
        justifyContent: 'center',
        paddingLeft: 32,
      },

        predefined_item_text: {
          fontSize: 13,
          fontWeight: '400',
          color: '#666666'
        },


});
