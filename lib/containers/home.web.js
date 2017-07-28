// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from '../components/core';

import { Link } from 'react-router'

import I18n from '../helpers/i18n';
import Events from '../actions/events';


class Home extends Component {

  props: Object;
  state: Object;

  constructor(props: Object) {
    super(props);
    this.state = { refreshing: false };
  }

  componentDidMount = () => {
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
      <View style={styles.wrapper}>
      <div style={styles.scrollContainer}>

        {this.props.events.items.length ? <View style={styles.imageContainer}>
          <Image style={styles.event_big_img} source={{ uri: this.props.events.items[0].img }} />
          <Text style={styles.categoria}>{I18n(this.props.events.items[0].category)}</Text>
          <Text style={styles.titulo}>{this.props.events.items[0].name}</Text>
          <Text style={styles.fecha}>{moment(this.props.events.items[0].start_date).format('DD')} de {I18n(moment(this.props.events.items[0].start_date).format('MMMM'))}</Text>
          <View style={styles.viewBtn}>
            <Link to={"/events/"+this.props.events.items[0]._id} style={styles.btn}><Text
            style={styles.btnText}>Ver</Text></Link>
          </View>
        </View>:null}

      <View style={styles.containerBanner}>
        <Image style={styles.banner728} source={require('../img/728x90_banner.jpg')} />
      </View>

        {this.props.events.items.length ?
          <View style={styles.list}>

            <View style={styles.listitem} key={this.props.events.items[3]._id}>
              <Image style={styles.event_img} source={{ uri: this.props.events.items[3].img }}/>
              <View style={styles.event_text}>
                <Text style={styles.event_title}>
                  {this.props.events.items[3].name}
                </Text>
                <Text style={styles.event_date}>
                  {moment(this.props.events.items[3].start_date).format('DD')}
                  de {I18n(moment(this.props.events.items[3].start_date).format('MMMM'))}
                </Text>
              </View>
              <Link to={"/events/"+this.props.events.items[3]._id} style={styles.btn}><Text
                style={styles.btnText}>Ver</Text></Link>
            </View>

            <View style={styles.listitem} key={this.props.events.items[2]._id}>
              <Image style={styles.event_img} source={{ uri: this.props.events.items[2].img }}/>
              <View style={styles.event_text}>
                <Text style={styles.event_title}>
                  {this.props.events.items[2].name}
                </Text>
                <Text style={styles.event_date}>
                  {moment(this.props.events.items[2].start_date).format('DD')}
                  de {I18n(moment(this.props.events.items[2].start_date).format('MMMM'))}
                </Text>
              </View>
              <Link to={"/events/"+this.props.events.items[2]._id} style={styles.btn}><Text
                style={styles.btnText}>Ver</Text></Link>
            </View>

            <View style={styles.listitem} key={this.props.events.items[1]._id}>
              <Image style={styles.event_img} source={{ uri: this.props.events.items[1].img }}/>
              <View style={styles.event_text}>
                <Text style={styles.event_title}>
                  {this.props.events.items[1].name}
                </Text>
                <Text style={styles.event_date}>
                  {moment(this.props.events.items[1].start_date).format('DD')}
                  de {I18n(moment(this.props.events.items[1].start_date).format('MMMM'))}
                </Text>
              </View>
              <Link to={"/events/"+this.props.events.items[1]._id} style={styles.btn}><Text
                style={styles.btnText}>Ver</Text></Link>
            </View>

          </View>
        :null}

          <View style={styles.white_box}>
            <div>
              <Text style={styles.upcomingTitle}>Proximos Eventos</Text>
              <View style={styles.list2}>
              {this.props.events.items.map( (item, index) => {

                  if( index < 3){
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
                    </View>)
                  }else{
                    return null;
                  }
                })
              }
              </View>
            </div>
          </View>
        </div>
      </View>
    );
  }
}


const Container = connect(store => store)( Home );
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

  tituloDestacadosMes: {
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },

  categoria: {
    position: 'absolute',
    top: 260,
    left: 40,
    zIndex: 999,
    color: '#f1cc1d',
    fontSize: 18
  },

  titulo: {
    position: 'absolute',
    top: 280,
    left: 40,
    zIndex: 999,
    fontSize: 48
  },
  fecha: {
    position: 'absolute',
    top: 330,
    left: 40,
    zIndex: 999,
    fontSize: 16
  },
  viewBtn: {
    position: 'absolute',
    top: 350,
    left: 40
  },

  event_big_img: {
    flex: 1,
  },

  white_box: {
    backgroundColor: '#ffffff', flex: 1, flexDirection: 'row', marginTop: 0, paddingTop: 30, zIndex: -1
  },

  listitem: {
    minHeight: 260,
    minWidth: 320,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    position: 'relative',
    alignItems: 'center',
    marginBottom: 20
  },
  event_text: {
    marginTop: 100,
    justifyContent: 'center'
  },
  event_title: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 5
  },
  event_date: {
    textAlign: 'center'
  },
  event_img: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 320,
    height: 250,
    zIndex: -1
  },

  listitem2: {
    minHeight: 360,
    minWidth: 320,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    position: 'relative',
    alignItems: 'center',
    marginBottom: 20
  },
  event_text2: {marginTop: 140, justifyContent: 'center'},
  event_title2: {textAlign: 'center', color: '#ffffff', zIndex: 10, fontSize: 22, marginBottom: 5},
  event_date2: {textAlign: 'center', color: '#ffffff', zIndex: 10},
  event_img2: {position: 'absolute', top: 0, left: 0, width: 320, height: 360},

  btn: {color: '#ffffff'},
  btnText: {
    marginTop: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: 'center',
    color: '#ffffff',
    zIndex: 10
  },

});
