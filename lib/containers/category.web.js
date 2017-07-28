// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from '../components/core';

import { Link } from 'react-router'

import I18n from '../helpers/i18n';
import Events from '../actions/events';
// import Header from '../components/header';


class Category extends Component {

  props: Object;
  state: Object;

  constructor(props: Object) {
    super(props);

    this.state = { refreshing: false };
    // this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentDidMount = () => {
    // !this.props.account.token &&
      // setTimeout(() => { this.props.navigator.push({ screen: 'Login' }) }, 1500);
    this.retrieveEvents();
  };


  retrieveEvents = () => {
    return this.props.dispatch( Events.Retrieve() );
  };


  onRefresh = () => {
    this.setState({ refreshing: true });
    this.retrieveEvents().then(() => this.setState({ refreshing: false }));
  };

  eventos = () => {

    /*
    b = this.props.events.items.every(function(item, index, array){
      //console.log(item);
      return (
        <View style={styles.listitem2} key={item._id}>
             <Image style={styles.event_img2} source={{ uri: item.img }} />
             <View style={styles.event_text2}>
               <Text style={styles.event_title2}>
                 {item.name}
               </Text>
               <Text style={styles.event_date2}>
                {moment(item.start_date).format('DD')} de {I18n(moment(item.start_date).format('MMMM'))}
               </Text>
             </View>
             <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Ver</Text></TouchableOpacity>
        </View>
      )
    })
    return b;
    */
  }

  render() {

    return (
      <View style={styles.wrapper}>
      <div style={styles.scrollContainer}>

          {/*
          <View style={styles.imageContainer}>
              <Image style={styles.event_big_img} source={require('../img/top_categoria.jpg')} />
          </View>
          */}
          
          <View style={styles.white_box}>
            <div>
              <Text style={styles.upcomingTitle}>Eventos</Text>
              <View style={styles.list2}>
              {
                this.props.events.items.map( (item, index) => {
                      return (
                        <View style={styles.listitem2} key={item._id}>
                             <Image style={styles.event_img2} source={{ uri: item.img }} />
                             <View style={styles.event_text2}>
                               <Text style={styles.event_title2}>
                                 {item.name}
                               </Text>
                               <Text style={styles.event_date2}>
                                {moment(item.start_date).format('DD')} de {I18n(moment(item.start_date).format('MMMM'))}
                               </Text>
                             </View>
                             <Text style={styles.btnText}><Link to={"/events/"+item._id} style={styles.btn}>Ver</Link></Text>
                        </View>
                        )
                } )
              }
              </View>
            </div>
          </View>

        </div>
      </View>
    );
  }
}


const Container = connect(store => store)( Category );
export default Container;

const styles = StyleSheet.create({
  banner_img:{ height:50,width:500 },
  containerBanner:{alignItems:'center',marginTop:20,marginBottom:20},
  banner728:{width:728,height:90},
  upcomingTitle:{fontSize:22,color:'#ff0000',marginTop:10,marginBottom:10,marginLeft:20},
  scrollContainer:{
    overflow:'scroll'
  },
  wrapper: {
    /*
    height: null,
    width: null,
    */
    /*    resizeMode: 'stretch',*/
    /*paddingTop: Platform.OS == 'ios' ? 66 : Platform.Version > 17 ? 70 : 46*/
  },

  list: {
    flexDirection:'row'
  },
  list2: {
    flexDirection:'row'
  },

  imageContainer: {
    height:450,
    position:'relative'
  },
  event_big_img:{
    flex:1
  },

  tituloDestacadosMes:{ textTransform:'uppercase',textAlign:'center',marginTop:20,marginBottom:20},

  categoria:{position:'absolute',top:260,left:40,zIndex:999,color:'#f1cc1d',fontSize:18},
  titulo:{position:'absolute',top:280,left:40,zIndex:999,fontSize:48},
  fecha:{position:'absolute',top:330,left:40,zIndex:999,fontSize:16},



  white_box:{
    backgroundColor:'#ffffff',flex:1,flexDirection:'row',marginTop:0,paddingTop:30,zIndex:-1
  },

  listitem:{
    minHeight:260,minWidth:320,flex:1,marginLeft:20,marginRight:20,position:'relative',alignItems:'center',marginBottom:20
  },
    event_text:{marginTop:100,justifyContent:'center'},
    event_title:{textAlign:'center',fontSize:22,marginBottom:5},
    event_date:{textAlign:'center'},
    event_img:{position:'absolute',top:0,left:0,width:320,height:250,zIndex:-1},

    listitem2:{
      minHeight:360,minWidth:320,flex:1,marginLeft:20,marginRight:20,position:'relative',alignItems:'center',marginBottom:20
    },
      event_text2:{marginTop:140,justifyContent:'center'},
      event_title2:{textAlign:'center',color:'#ffffff',zIndex:10,fontSize:22,marginBottom:5},
      event_date2:{textAlign:'center',color:'#ffffff',zIndex:10},
      event_img2:{position:'absolute',top:0,left:0,width:320,height:360},

      btn:{color:'#ffffff'},
      btnText:{ marginTop:10,borderStyle:'solid',borderWidth:1,borderColor:'#ffffff',borderRadius:20,paddingTop:10,paddingBottom:10,paddingLeft:30,paddingRight:30,textAlign:'center',color:'#ffffff',zIndex:10},
/*


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
          */

});
