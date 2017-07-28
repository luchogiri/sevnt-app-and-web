// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { Image, View, Text, StyleSheet, Platform, ListView, RefreshControl, TouchableOpacity } from '../components/core';
import { SwipeListView } from 'react-native-swipe-list-view';

import I18n from '../helpers/i18n';
import Account from '../actions/account';
import Header from '../components/header';

class Favorites extends Component {

  props: Object;
  state: Object;
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
      .dispatch( Account.GetFavorites( this.props.account.token ) )
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

  onRemove = (item) => {
    return () => {
      this.props
        .dispatch( Account.RemoveFavorite( item, this.props.account.token ))
        .then(this.retrieveEvents, this.retrieveEvents);
    }
  };

  render() {

    return (
      <View style={styles.wrapper}>
        
        {this.state.items.length || this.state.loading ? null :
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../img/icon-no-result.png')} style={{height: 80, width: 80 }} />
            <Text style={{color:'#777777', fontSize: 14, marginTop: 16}}>Aún no has agregado favoritos.</Text>
          </View>}

        <SwipeListView
          removeClippedSubviews={false}
          dataSource={this.ds.cloneWithRows(this.state.items)}
          disableRightSwipe={true}
          renderRow={ (data, rowId, index) => {

            let eventDate = moment(data.start_date).utc();

            return (
              <View style={styles.event}>

                <Image style={styles.event_img} source={{ uri: data.img }} />
                <TouchableOpacity style={styles.event_wrapper} onPress={this.props.navigator.screen('Detail',{ event: data })}>

                  <View style={styles.event_date}>
                    <Text style={styles.event_date_month}>{I18n(eventDate.format('MMM'))}</Text>
                    <Text style={styles.event_date_day}>{eventDate.format('DD')}</Text>
                  </View>

                  <View style={styles.event_info}>
                    <Text style={styles.event_title}>
                      {data.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
          )}}

          renderHiddenRow={ data => (
              <View style={styles.rowBack}>
                <TouchableOpacity style={styles.clickFav} onPress={this.onRemove( data._id )} >
                  <Image style={styles.swipelike} source={require('../img/icon-trash.png')} />
                </TouchableOpacity>
              </View>
            )}
            rightOpenValue={-75}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />
            }

        />


        <Header navigator={this.props.navigator} title="Favoritos" />
      </View>
    );
  }
}

const Container = connect(store => store)( Favorites );
export default Container;

const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS == 'ios' ? 66 : 70
  },

  event: {
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd'
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
      backgroundColor: '#000000aa'
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
          fontSize: 24,
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
          fontSize: 30,
          fontWeight: '300'
        },

    rowBack: {
      flex:1,
      backgroundColor:'#a61362',
      alignItems:'flex-end',
      justifyContent:'center'
    },

      swipelike:{
        marginRight:28,
        width:20,
        height:20
      },

});
