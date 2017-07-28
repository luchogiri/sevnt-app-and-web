// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import I18n from '../helpers/i18n';
import { View, Image, Text, ListView, RefreshControl, TouchableOpacity, StyleSheet, Dimensions, Platform } from '../components/core';

import Account from '../actions/account';
import Header from '../components/header';


class MyEvents extends Component {

  props: Object;
  retrieveEvents: Function;
  onRefresh: Function;
  onRemove: Function;
  
  
  constructor(props: Object) {
    super(props);
    
    this.state = { refreshing: false, items: [] };
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }
  
  componentDidMount = () => {
    !this.props.account.token &&
    setTimeout(() => { this.props.navigator.push({ screen: 'Login' }) }, 1500);
    this.retrieveEvents();
  };
  
  retrieveEvents = () => {
    this.setState({ loading: true, refreshing: true });
    this.props
      .dispatch( Account.GetMyEvents( this.props.account.token ) )
      .then(this.onEventsRetrieved, this.onEventsError);
  };
  
  onEventsRetrieved = (response) => {
    this.setState({ loading: false, refreshing: false, items: response });
  };
  
  onEventsError = (err) => {
    // console.log(err);
    this.setState({ loading: false, refreshing: false });
  };
  
  onRefresh = () => {
    this.setState({ refreshing: true });
    this.retrieveEvents();
  };

  render() {
    
    return (

      <View style={styles.wrapper}>
  
        {this.state.items.length || this.state.loading ? null :
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../img/icon-no-result.png')} style={{height: 80, width: 80 }} />
            <Text style={{color:'#777777', fontSize: 14, marginTop: 16}}>Aún no has creado ningun evento aún.</Text>
          </View>}
  
  
        <ListView
          removeClippedSubviews={false}
          dataSource={this.ds.cloneWithRows(this.state.items)}
          renderRow={(data, rowId, index) => (
            
            <View style={styles.card}>
              <Image style={styles.card_img} source={{uri: data.img}} />
  
              <View style={styles.data}>
                <Text style={styles.data_title}>{data.name}</Text>
                <Text style={styles.data_text}>{data.venue}</Text>
 
                <Text style={styles.data_text}>
                  {moment(data.start_date).utc().format('DD')} de&nbsp;
                  {I18n('months')[moment(data.start_date).utc().format('M')]}&nbsp;
                  {moment(data.start_date).utc().format('HH:mm')} Hs.
                </Text>
  
                <TouchableOpacity style={styles.data_next} onPress={this.props.navigator.screen('Event', { event: data } )}>
                  <Text style={styles.data_next_text}>Admistrar evento</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.data_next, {marginTop: 10}]} onPress={this.props.navigator.screen('Validate', { event: data } )}>
                  <Text style={styles.data_next_text}>Validar entradas</Text>
                </TouchableOpacity>
  
              </View>
            </View>
          )}
    
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
        />
  
        <Header navigator={this.props.navigator} title="Mis Eventos Organizados" />
      </View>
    )
  }
}

const Container = connect(store => store)( MyEvents );
export default Container;


const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: Platform.OS == 'ios' ? 66 : 70
  },

  card: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    backgroundColor: '#ffffff',
    marginLeft: 24,
    marginRight: 24,
    marginTop: 16,
    alignItems: 'center',
  },

  card_img: {
    height: 140,
    width: Dimensions.get('window').width - 50,
    borderRadius: 5,
    resizeMode: 'cover'
  },


  data: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16
  },

  data_title: {
    color: '#444444',
    fontSize: 22,
    marginTop: 12
  },

  data_text: {
    color: '#444444',
    fontSize: 16
  },

  data_next: {
    height: 36,
    width: 260,
    backgroundColor: '#a61362',
    justifyContent: 'center',
    borderRadius: 18,
    marginTop: 24,
  },

  data_next_text: {
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center'
  }
});
