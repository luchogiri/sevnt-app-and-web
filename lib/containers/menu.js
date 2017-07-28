// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, Image, Button, TouchableOpacity, StyleSheet, Platform } from '../components/core';

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
        <View style={styles.status_bar} />
        
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
      </View>
    );
  }
}

const Container = connect(store => ({ account: store.account }))( Menu );
export default Container;


const styles = StyleSheet.create({
  
  wrapper: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  
  status_bar: {
    height: Platform.OS == 'ios' ? 20 : 24,
    // backgroundColor: 'rgb(203, 14, 67)',
  },
  
  profile: {
    height: 180,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
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
    marginTop: 12,
    fontSize: 19,
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
    height: 36,
    marginTop: 24,
    marginBottom: 16,
    marginLeft: 20,
    marginRight: 20
  },
  
  nav_item_create: {
    backgroundColor: '#a61362',
    height: 36,
    marginTop: 24,
    marginLeft: 20,
    marginRight: 20
  }
});
