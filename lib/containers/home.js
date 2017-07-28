// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { View, Text, Image, TouchableOpacity, ListView, RefreshControl, StyleSheet, Platform } from '../components/core';

import I18n from '../helpers/i18n';
import Events from '../actions/events';
import Header from '../components/header';


class Home extends Component {

  props: Object;
  state: Object;
  retrieveEvents: Function;
  onRefresh: Function;


  constructor(props: Object) {
    super(props);

    this.state = { refreshing: false };
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentDidMount = () => {
    !this.props.account.token &&
      setTimeout(() => { this.props.navigator.push({ screen: 'Login' }) }, 1500);
    this.retrieveEvents();
  };


  retrieveEvents = () => {
    return this.props.dispatch( Events.Retrieve() );
  };


  onRefresh = () => {
    this.setState({ refreshing: true });
    this.retrieveEvents().then(() => this.setState({ refreshing: false }));
  };


  render() {

    return (
      <Image style={styles.wrapper} source={require('../img/bg-main.jpg')}>
  
        {this.props.events.items.length || this.state.loading ? null :
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../img/icon-no-result.png')} style={{height: 80, width: 80 }} />
            <Text style={{color:'#777777', fontSize: 14, marginTop: 16}}>Nada por aquí aún.</Text>
          </View>}
          
        <ListView
          removeClippedSubviews={false}
          dataSource={this.ds.cloneWithRows(this.props.events.items)}
          renderRow={(data, rowId, index) => (
            <View style={styles.event}>

              <Image style={styles.event_img} source={{ uri: data.img }} />
              <TouchableOpacity style={styles.event_wrapper} onPress={this.props.navigator.screen('Detail',{ event: data })}>

                <View style={styles.event_date}>
                  <Text style={styles.event_date_month}>{I18n(moment(data.start_date).format('MMM'))}</Text>
                  <Text style={styles.event_date_day}>{moment(data.start_date).format('DD')}</Text>
                </View>

                <View style={styles.event_info}>
                  <View style={styles.event_info_cat}>
                    <Text style={styles.event_info_cat_title}>{I18n(data.category).toUpperCase()}</Text>

                    {this.props.account.favorites.indexOf(data._id) == -1 ? null:
                      <Image source={require('../img/icon-like-empty.png')} />}

                  </View>

                  <Text style={styles.event_title}>
                    {data.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}

          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
              tintColor="#ffffff"
            />
          }
        />

        <Header left='menu' right='search' title='sevnt' navigator={this.props.navigator} drawer={this.props.openDrawer} />
      </Image>
    );
  }
}


const Container = connect(store => store)( Home );
export default Container;

const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'stretch',
    paddingTop: Platform.OS == 'ios' ? 66 : Platform.Version > 17 ? 70 : 46
  },

  list: {

  },

    event: {
      height: 190
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

      event_wrapper: {
        flex: 1,
        backgroundColor: '#00000077'
      },

        event_date: {
          height: 56,
          width: 50,
          justifyContent: 'flex-end',
          alignSelf: 'flex-end',
          alignItems: 'center'
        },

          event_date_month: {
            fontSize: 14,
            lineHeight: 14,
            color: '#ffffff'
          },
          event_date_day: {
            fontSize: 27,
            lineHeight: 27,
            color: '#ffffff'
          },

        event_info: {
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: 12,
          paddingLeft: 20
        },

          event_info_cat: {
            flexDirection: 'row',
            alignItems: 'center'
          },
            event_info_cat_title: {
              color: '#ffffff',
              fontSize: 14,
              marginRight: 4
            },

          event_title: {
            color: '#ffffff',
            fontSize: 34,
            lineHeight: 34,
            fontWeight: '300'
          }

});
