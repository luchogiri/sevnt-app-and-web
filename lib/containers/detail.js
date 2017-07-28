// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import I18n from '../helpers/i18n';

import { View, Text, Image, TouchableOpacity, Button, ScrollView, Platform, Dimensions, StyleSheet } from '../components/core';

import Account from '../actions/account';
import Share from 'react-native-share';

class Detail extends Component {

  props: Object;
  state: Object;
  addRemoveFavorite: Function;

  constructor(props: Object) {
    super(props);

    this.state = {};
  }

  addRemoveFavorite = () => {
    if (!this.props.account.token)
      return this.props.navigator.push({ screen: 'Login' });

    this.props.account.favorites.indexOf(this.props.event._id) != -1 ?
      this.props.dispatch( Account.RemoveFavorite(this.props.event._id, this.props.account.token) ):
      this.props.dispatch( Account.AddFavorite(this.props.event._id, this.props.account.token) );
  };

  render() {

    const eventDate = moment(this.props.event.start_date).utc();

    let shareOptions = {
      title: this.props.event.name,
      message: "Evento "+this.props.event.name+" en "+this.props.event.venue+", "+this.props.event.address+". El dia "+eventDate.format('DD')+" de "+I18n('months')[eventDate.format('M')]+" a las "+eventDate.format('HH:mm')+"Hs. Más info en http://sevnt.com/e/"+this.props.event._id,
      //url: "http://facebook.github.io/react-native/",
      subject: this.props.event.name //  for email
    };
    
    let price = this.props.event.activities.map(a => a.price.value).sort()[0];

    return (
      <View style={styles.wrapper}>
        <ScrollView ref='scroll'>

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
              <View style={styles.event_info_cat}>
                <Text style={styles.event_info_cat_title}>{I18n(this.props.event.category)}</Text>
              </View>

              <Text style={styles.event_info_title}>
                {this.props.event.name}
              </Text>

              <View style={styles.event_info_desc}>
                <Text style={styles.event_info_desc_text}>
                  {eventDate.format('DD')} de {I18n('months')[eventDate.format('M')]} {eventDate.format('HH:mm')} Hs.
                </Text>
              </View>
              <View style={styles.event_info_desc}>
                <Text style={styles.event_info_desc_text}>{this.props.event.venue} - {this.props.event.address}</Text>
              </View>
              <View style={styles.event_info_desc}>
                <Text style={styles.event_info_desc_text}>
                  Entradas desde:&nbsp;
                  <Text style={styles.event_info_desc_text_big}>
                    {price == 0 ? 'Gratis' : '$ '+price}
                  </Text>
                </Text>
              </View>

              <View style={styles.event_info_actions}>
                {/*
                <TouchableOpacity style={styles.event_info_desc_btn}>
                  <Image source={require('../img/icon-calendar.png')} />
                </TouchableOpacity>
                */}
                <TouchableOpacity style={styles.event_info_desc_btn} onPress={this.addRemoveFavorite}>
                  {this.props.account.favorites.indexOf(this.props.event._id) != -1 ?
                    <Image source={require('../img/icon-favorite-color.png')} />:
                    <Image source={require('../img/icon-favorite.png')} />}
                </TouchableOpacity>

                <TouchableOpacity style={styles.event_info_desc_btn} onPress={()=>{ Share.open(shareOptions); }} >
                  <Image source={require('../img/icon-share.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.event_info_desc_btn_buy}
                  onPress={this.props.navigator.screen('Checkout', { event: this.props.event })}>
                  <Image source={require('../img/icon-ticket.png')} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.event_info_down} onPress={()=> { this.refs.scroll.scrollTo({y:522})}}>
                <Image source={require('../img/icon-down.png')} style={{width: 20, height: 12}} />
              </TouchableOpacity>

            </View>
          </View>


          <View style={styles.event_more}>

            <View style={styles.event_more_row}>
              <Image source={require('../img/icon-calendar-color.png')} />
              <Text style={styles.event_more_row_text}>
                {eventDate.format('DD')+' de '+ I18n('months')[eventDate.format('M')] +' de '+ eventDate.format('YYYY')}
              </Text>
            </View>

            <View style={styles.event_more_row}>
              <Image source={require('../img/icon-date-color.png')} />
              <Text style={styles.event_more_row_text}>{eventDate.format('HH:mm')} Hs.</Text>
            </View>

            <View style={styles.event_more_row}>
              <Image source={require('../img/icon-ticket-color.png')} />
              <Text style={styles.event_more_row_text}>Entradas desde {price == 0 ? 'Gratis' : '$ '+price}</Text>
            </View>

            <View style={styles.event_more_row}>
              <Image source={require('../img/icon-location-color.png')} />
              <Text style={styles.event_more_row_text}>{this.props.event.venue} {this.props.event.address? ' - ' +this.props.event.address: null}</Text>
            </View>
            
            {this.props.event.bus_lines ?
              <View style={styles.event_more_row}>
                <Image source={require('../img/icon-bus-color.png')} />
                <Text style={styles.event_more_row_text}>{this.props.event.bus_lines}</Text>
              </View>: null
            }
            
            {this.props.event.subway_lines ?
              <View style={styles.event_more_row}>
                <Image source={require('../img/icon-train-color.png')} />
                <Text style={styles.event_more_row_text}>{this.props.event.subway_lines}</Text>
              </View>: null
            }
  
            <Button style={styles.button_buy} onPress={this.props.navigator.screen('Checkout', { event: this.props.event })}>
              COMPRAR
            </Button>
            
            {this.props.event.description ?
              <View style={styles.event_more_desc}>
                <Text style={styles.event_more_desc_text}>
                  { this.props.event.description }
                </Text>
              </View>: null
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const Container = connect(store => store)( Detail );
export default Container;

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

  upper: {
    height: height-100
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
      resizeMode: 'stretch',
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
        fontSize: 16,
        lineHeight: 16,
        color: '#ffffff'
      },

      header_day: {
        fontSize: 30,
        lineHeight: 30,
        color: '#ffffff'
      },


  event_info: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 4,
    paddingLeft: 20
  },

  event_info_cat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  },

    event_info_cat_title: {
      color: '#ffffff',
      fontSize: 14,
      marginRight: 4
    },

    event_info_title: {
      marginBottom: 16,
      color: '#ffffff',
      fontSize: 34,
      lineHeight: 34,
      fontWeight: '300'
    },

  event_info_desc: {
    flexDirection:'row'
  },

    event_info_desc_text: {
      fontSize: 14,
      marginBottom: 8
    },

      event_info_desc_text_big: {
        fontSize: 18
      },

  event_info_actions: {
    flexDirection:'row',
    alignItems: 'center'
  },

    event_info_desc_btn: {
      marginRight: 20,
    },
      event_info_desc_btn_buy: {
        marginLeft: 10
      },

    event_info_down: {
      marginTop: 16,
      height: 24,
      marginLeft: 40,
      marginRight: 40,
      alignItems: 'center',
      justifyContent: 'center'
    },



  event_more: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
    paddingBottom: 24
  },

    event_more_row: {
      flexDirection:'row',
      borderRadius: 25,
      borderWidth: 1,
      borderColor: '#a7a9ac',
      height: 50,
      marginTop: 12,
      alignItems: 'center',
      paddingLeft: 16
    },

    event_more_row_text: {
      color: '#555555',
      fontSize: 14,
      marginLeft: 12,
      fontWeight: '500'
    },
      //
      // event_more_subway: {
      //   width: 20,
      //   height: 20,
      //   borderRadius: 10,
      //   backgroundColor: '#bbbbbb',
      //   color: '#ffffff'
      // },
      //
    event_more_desc: {
      marginTop: 24,
      marginBottom: 24,
      marginLeft: 8,
      marginRight: 8
    },

      event_more_desc_text: {
        fontSize: 14,
        lineHeight: 24,
        color: '#555555'
      },
  
    button_buy: {
      backgroundColor: '#8DC63F',
      marginTop: 16,
      height: 48,
      borderRadius: 24
    },

});
