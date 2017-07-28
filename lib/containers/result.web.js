// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from '../components/core';

import { Link } from 'react-router'

import I18n from '../helpers/i18n';
import Events from '../actions/events';
//import Header from '../components/header';


class Result extends Component {

  props: Object;
  state: Object;
  retrieveEvents: Function;
  onRefresh: Function;


  constructor(props: Object) {
    super(props);

    this.state = { refreshing: false, events: { items: [] } };
    //this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentDidMount = () => {
    this.retrieveEvents();
  };

  retrieveEvents = () => {
    this.props
      .dispatch( Events.Get({ ...this.props.data }) )
      .then(this.onEventsRetrieved, this.onEventsError);
  };

  onEventsRetrieved = (events) => {
    this.setState({ events, refreshing: false });
  };

  onEventsError = (err) => {
    // console.log(err);
    this.setState({ refreshing: false });
  };

  onRefresh = () => {
    this.setState({ refreshing: true });
    this.retrieveEvents().then(() => this.setState({ refreshing: false }));
  };


  render() {
    return (
      <View>
        {this.state.events.items.length || this.state.loading ? null :
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <Text style={{fontSize: 14, marginTop: 16}}>No encontramos resultados</Text>
            <Text style={{fontSize: 14, marginTop: 2}}>para tu búsqueda.</Text>
          </View>}

        {this.state.loading ? null :
          <View>
            {this.state.events.items.map((data, idx) => (
              <View style={styles.event} key={idx}>

                <Image style={styles.event_img} source={{ uri: data.img }} />
                <Link to={"/events/"+data._id} style={styles.link}>
                <TouchableOpacity style={styles.event_wrapper}>

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
                </Link>
              </View>
            ))}
          </View>}

        {/*<Header title={this.props.data.query || I18n(this.props.data.category)} navigator={this.props.navigator} />*/}
      </View>
    );
  }
}


const Container = connect(store => store)( Result );
export default Container;


const styles = StyleSheet.create({
  link:{textDecoration:'none'},
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
    height: 190,
    position:'relative'
  },

  event_img: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
    width: null,
    height: null,
    zIndex:-1
  },

  event_wrapper: {
    flex: 1,
    backgroundColor: '#00000088'
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
    color: '#ffffff'
  },
  event_date_day: {
    fontSize: 27,
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
    marginRight: 4,
  },

  event_title: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '300'
  }

});
