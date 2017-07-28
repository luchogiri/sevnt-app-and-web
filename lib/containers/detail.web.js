// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from '../components/core';

import I18n from '../helpers/i18n';
import Events from '../actions/events';
// import Header from '../components/header';


class Detail extends Component {

  props: Object;
  state: Object;

  constructor(props: Object) {
    super(props);
    this.state = { event: { activities: [] } };
  }

  componentDidMount = () => {
    this.retrieveEvents();
  };


  retrieveEvents = () => {
    this.props
      .dispatch( Events.Get({ _id: this.props.params.id }) )
      .then(event => {
        this.setState({event});
        console.log(this.state.event);
        console.log(this.state.event.activities[0].price.value);
      });
  };


  render() {

    return (
      <View style={styles.wrapper}>
        <div style={styles.scrollContainer}>

          <View style={styles.columns}>
            <View style={styles.colIzq}>
              <View style={styles.containerImgPrin}>
                <Image style={styles.imgPrincipal} source={{ uri: this.state.event.img }} />
              </View>
              <View style={styles.socialLinks}>
                <Text style={styles.txtSocial}>Comparti este evento! </Text>
                <TouchableOpacity>
                  <Image style={styles.icon_fb} source={require('../img/share_fb.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.icon_tw} source={require('../img/share_tw.png')} />
                </TouchableOpacity>
              </View>
              <View style={styles.containerImgBanner}>
                <Image style={styles.imgBanner} source={require('../img/todel2.jpg')} />
              </View>
            </View>
            <View style={styles.colDer}>
              <Text style={styles.event_category}>{I18n(this.state.event.category)}</Text>
              <Text style={styles.event_title}>{this.state.event.name}</Text>
              <View style={styles.boxes}>
                <View style={styles.roundBoxHalf}>
                  <View style={styles.elmnts}>
                    <Image style={styles.icon} source={require('../img/icon-calendar-color.png')} />
                    <Text style={styles.label}>{moment(this.state.event.start_date).format('DD') } de {I18n(moment(this.state.event.start_date).format('MMMM'))}</Text>
                  </View>
                </View>
                <View style={styles.roundBoxHalf}>
                <View style={styles.elmnts}>
                  <Image style={styles.icon} source={require('../img/icon-date-color.png')} />
                  <Text style={styles.label}>{moment(this.state.event.start_date).format('HH')}
                  hs.</Text>
                </View>
                </View>
              </View>
              <View style={styles.boxes}>
                <View style={styles.roundBoxFull}>
                  <View style={styles.elmnts}>
                    <Image style={styles.icon} source={require('../img/icon-ticket-color.png')} />
                    <Text style={styles.label}> { this.state.event.activities.length ? this.state.event.activities[0].price.value : null } </Text>
                  </View>
                </View>
              </View>
              <View style={styles.boxes}>
                <View style={styles.roundBoxFull}>
                  <View style={styles.elmnts}>
                    <Image style={styles.iconLoc} source={require('../img/icon-location-color.png')} />
                    <Text style={styles.label}>{this.state.event.venue}, {this.state.event.address}, {this.state.event.city}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.boxes}>
                <View style={styles.roundBoxFull}>
                  <View style={styles.elmnts}>
                    <Image style={styles.icon} source={require('../img/icon-bus-color.png')} />
                    <Text style={styles.label}>{this.state.event.bus_lines}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.boxes}>
                <View style={styles.roundBoxFull}>
                  <View style={styles.elmnts}>
                    <Image style={styles.iconTrain} source={require('../img/icon-train-color.png')} />
                    <Text style={styles.label}>{this.state.event.subway_lines}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.event_description}>
                <Text style={styles.text_event_description}>
                {this.state.event.description}
                </Text>
              </View>



            </View>
          </View>

        </div>
      </View>
    );
  }
}


const Container = connect(store => store)( Detail );
export default Container;

const styles = StyleSheet.create({
  event_category:{fontSize:16,color:'#969696',fontWeight:700,textTransform:'uppercase',marginTop:20,marginLeft:10},
  event_title:{fontSize:40,color:'#c50848',marginLeft:10},

  elmnts:{flexDirection:'row'},
  icon:{width:25,height:25,marginTop:12,marginLeft:20,marginRight:10},
  iconLoc:{width:24,height:32,marginTop:8,marginLeft:20,marginRight:10},
  iconTrain:{width:24,height:32,marginTop:8,marginLeft:20,marginRight:10},
  label:{color:'#000000',flex:1,marginTop:15},

  masInfo:{borderRadius:25,borderWidth:1,borderStyle:'solid',borderColor:'#d9d9d9',height:50,width:200,},

  boxes:{flexDirection:'row'},
  roundBoxHalf:{marginTop:15,flex:0.5,borderRadius:25,borderWidth:1,borderStyle:'solid',borderColor:'#d9d9d9',height:50,marginRight:10,marginLeft:10 },
  roundBoxFull:{marginTop:15,flex:1,borderRadius:25,borderWidth:1,borderStyle:'solid',borderColor:'#d9d9d9',height:50,marginRight:10,marginLeft:10},

  event_description:{marginTop:20,marginLeft:10,marginRight:10,marginBottom:20},
  text_event_description:{color:'#8d8d8d',fontSize:16,lineHeight:1.5},

  boxRelacionados:{flexDirection:'row',},
    titleRelacionados:{flexDirection:'row',},
    txtTitleRel:{color:'#cc0641',fontSize:20,marginLeft:10,marginBottom:10},
    colRel:{flex:0.5,},

  socialLinks:{flexDirection:'row',alignItems:'center',justifyContent:'flex-end',marginTop:20,marginRight:10},
  txtSocial:{color:'#a3a2a0'},
  icon_fb:{width:30,height:30,marginLeft:5,marginRight:5},
  icon_tw:{width:30,height:30,marginRight:5},

  columns:{flexDirection:'row',backgroundColor:'#ffffff'},
    colIzq:{width:340,minHeight:'600'},
    colDer:{flex:1,},

  containerImgPrin:{flex:1},
    imgPrincipal:{width:320,height:420,marginLeft:15},
  containerImgBanner:{flex:1,marginTop:80},
    imgBanner:{width:320,height:266,marginLeft:15},
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



});
