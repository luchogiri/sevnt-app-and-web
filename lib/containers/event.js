// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ENV from '../env';

import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-datepicker';
import ModalPicker from 'react-native-modal-picker';
import moment from 'moment';
import { RNS3 } from 'react-native-aws3';

import { View, Text, Image, TextInput, TouchableOpacity, Modal, ScrollView, Button, Platform, StyleSheet } from '../components/core';
import I18n from '../helpers/i18n';

import Events from '../actions/events';
import EventsModel from '../models/events';


class Create extends Component {
  
  prop: Object;
  state: Object;
  createEvent: Function;
  image: Object;
  
  constructor(props: Object) {
    super(props);
    
    this.state = {
      error: false,
      loading: false,
      cam_modal: false,
      data: new EventsModel(this.props.event)
    };
    
    this.image = '';
  }
  
  handleInput = (field) => {
    return (value) => {
      const data = this.state.data;
      data[field] = value;
      this.setState({ data });
    };
  };
  
  handleDate = (field) => {
    return (value) => {
      const data = this.state.data;
      let date = value.split(' ');
      data[field] = date[0].split('/').reverse().join('-') + 'T' + date[1];
      this.setState({ data });
    };
  };
  
  setModalVisible = (visible) => {
    return () => {
      this.setState({ cam_modal: visible });
    };
  };
  
  takeImg = () => {
    ImagePicker
      .openCamera({ width: 500, height: 500, cropping: true })
      .then(this.onPictureCropped);
  };
  
  pickImg = () => {
    ImagePicker
      .openPicker({ width: 500, height: 500, cropping: true })
      .then(this.onPictureCropped);
  };
  
  onPictureCropped = (response) => {
    this.setModalVisible(false)();
    
    this.image = response;
    const data = this.state.data;
    data.img = response.path;
    this.setState({ data });
  };
  
  onPlaceSelected = (place) => {
    const data = this.state.data;
    data.venue = place.name;
    data.address = place.vicinity;
    data.city = place.address_components ? ((place.address_components[0]||{}).long_name||'') : place.city;
    this.setState({ data });
  };
  
  onDescriptionAdded = (bus_lines, subway_lines, description) => {
    const data = this.state.data;
    data.bus_lines = bus_lines;
    data.subway_lines = subway_lines;
    data.description = description;
    this.setState({ data });
  };
  
  onTicketsCreated = (tickets) => {
    const data = this.state.data;
    data.activities = tickets;
    this.setState({ data });
  };
  
  updateEvent = () => {
    
    if (this.state.loading) return;
    this.setState({ loading: true, error: false });
    
    const data = this.state.data;
    try { data.validate(); }
    catch ( err ) { return this.setState({ loading: false, error: true }); }
    // validate
    
    if (this.image && this.image.path) {
      let file = {
        uri: 'file://' + this.image.path,
        name: this.image.path.split('/')[this.image.path.split('/').length - 1],
        type: this.image.mime
      };
      
      RNS3.put(file, ENV.S3).then(s3response => {
        
        // if (s3response.status !== 201)
        // error uploading img
        this.setState({ loading: false });
        data.img = ((s3response.body || {}).postResponse || {}).location || undefined;
        
        this.props
          .dispatch(Events.Update( this.props.event._id, data, this.props.account.token ))
          .then(this.props.navigator.pop /*,  onError  */);
      });
    }
    
    else {
      this.setState({ loading: false });
      this.props
        .dispatch(Events.Update( this.props.event._id, data, this.props.account.token ))
        .then(this.props.navigator.pop /*,  onError  */);
    }
  };
  
  deleteEvent = () => {
  
    if (this.state.loading) return;
    this.setState({ loading: true, error: false });
    
    this.props
      .dispatch(Events.Delete( this.props.event._id, this.props.account.token ))
      .then(this.props.navigator.pop /*,  onError  */);
  };
  
  
  render() {
    
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          
          <View style={styles.upper}>
            
            {!this.state.data.img?
              <Image style={styles.event_img} source={require('../img/bg-head.jpg')} />:
              <Image style={styles.event_img} source={{ uri: this.state.data.img, isStatic: true }} />}
            
            <Image style={styles.event_img_bg} source={require('../img/bg-detail.png')} />
            
            <View style={styles.header}>
              <TouchableOpacity style={styles.header_back} onPress={this.props.navigator.pop}>
                <Image source={require('../img/icon-back.png')} style={{width: 12, height: 20}} />
              </TouchableOpacity>
              
              <View style={styles.header_img}>
                <TouchableOpacity onPress={this.setModalVisible(true)}>
                  <Image source={require('../img/icon-image.png')} />
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={styles.event_info}>
              <TextInput
                style={styles.event_info_title}
                placeholderTextColor='#ffffff55'
                underlineColorAndroid='transparent'
                placeholder='ej: Festejo de Verano'
                value={this.state.data.name}
                onChangeText={this.handleInput('name')}
                returnKeyType='done' />
            </View>
          </View>
          
          
          <View style={styles.event_more}>
            
            <ModalPicker
              style={styles.event_more_row_select}
              optionTextStyle={styles.event_more_row_text}
              data={this.props.config.categories.map(item => ({ key: item, name: item, label: I18n(item) }) )}
              initValue={this.state.data.category}
              cancelText='Cancelar'
              onChange={(option)=>{ this.handleInput('category')(option.name)}}>
              <View style={styles.select}>
                <Text style={styles.event_more_row_text}>
                  {this.state.data.category ? I18n(this.state.data.category): 'Categoría'}
                </Text>
                <Image source={require('../img/icon-right-blue.png')} />
              </View>
            </ModalPicker>
            
            <TouchableOpacity style={styles.event_more_row} onPress={() => this.refs.start_date.onPressDate()}>
              <DatePicker
                ref="start_date"
                style={{width: 200}}
                date={this.state.data.start_date ? moment(this.state.data.start_date).format('DD/MM/YYYY HH:mm') : ''}
                minDate={moment().add(1, 'hour').startOf('hour').toDate()}
                mode="datetime"
                placeholder="Fecha inicio del evento"
                format="DD/MM/YYYY HH:mm"
                confirmBtnText="Confirmar"
                cancelBtnText="Cancelar"
                showIcon={false}
                customStyles={{dateInput:{borderWidth:0,alignItems:'flex-start'},placeholderText:{color:'#555555', fontWeight:'500'}}}
                onDateChange={(date) => {this.handleDate('start_date')(date)}}
              />
              
              <View>
                <Image source={require('../img/icon-right-blue.png')} />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.event_more_row} onPress={() => this.refs.end_date.onPressDate()}>
              <DatePicker
                ref="end_date"
                style={{width: 200}}
                date={this.state.data.end_date ? moment(this.state.data.end_date).format('DD/MM/YYYY HH:mm'): ''}
                minDate={moment(this.state.data.start_date).add(1, 'hour').toDate()}
                mode="datetime"
                placeholder="Fecha fin del evento"
                format="DD/MM/YYYY HH:mm"
                confirmBtnText="Confirmar"
                cancelBtnText="Cancelar"
                showIcon={false}
                customStyles={{dateInput:{borderWidth:0,alignItems:'flex-start'},placeholderText:{color:'#555555', fontWeight:'500'}}}
                onDateChange={(date) => {this.handleDate('end_date')(date)}}
              />
              
              <View>
                <Image source={require('../img/icon-right-blue.png')} />
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.event_more_row} onPress={this.props.navigator.screen('CreatePlace',{onPlaceSelected: this.onPlaceSelected, data: this.state.data})}>
              <Text style={styles.event_more_row_text}>{this.state.data.venue? this.state.data.venue: 'Lugar del evento'}</Text>
              <Image source={require('../img/icon-right-blue.png')} />
            </TouchableOpacity>
            
            
            <TouchableOpacity style={styles.event_more_row} onPress={this.props.navigator.screen('CreateTickets', {data: this.state.data.activities, onTicketsCreated: this.onTicketsCreated})}>
              <Text style={styles.event_more_row_text}>{this.state.data.activities.length?
              this.state.data.activities.length+ ' tipo/s de entrada creadas':
                'Tipos de entradas'}</Text>
              <Image source={require('../img/icon-right-blue.png')} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.event_more_row} onPress={this.props.navigator.screen('CreateDescription',  {onDescriptionAdded: this.onDescriptionAdded, data: this.state.data })} >
              <Text style={styles.event_more_row_text}>{this.state.data.description ? this.state.data.description.substr(0,200)+'...':'Información adicional'}</Text>
              <Image source={require('../img/icon-right-blue.png')} />
            </TouchableOpacity>
            
            {this.state.error ?
              <View style={styles.errors}>
                {this.state.data.errors.map(err => <Text style={styles.error} key={err.name}>{I18n(err.message)} {I18n('field '+ err.name)}</Text>)}
              </View>: null}
            
            <Button style={[styles.button_buy, this.state.loading? {opacity: 0.7}:null]} onPress={this.updateEvent}>
              {!this.state.loading? 'EDITAR EVENTO': 'Editando evento...'}
            </Button>
  
            <Button style={[styles.button_delete, this.state.loading? {opacity: 0.7}:null]} onPress={this.deleteEvent}>
              {!this.state.loading? 'ELIMINAR EVENTO': 'Eliminando evento...'}
            </Button>
          </View>
        
        </ScrollView>
        
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.cam_modal}>
          <View style={styles.modal}>
            <View>
              <Button style={styles.button_pic} onPress={this.takeImg}>
                Tomar una fotografía
              </Button>
              <Button style={styles.button_pic} onPress={this.pickImg}>
                Seleccionar de librería...
              </Button>
              <Button style={styles.button_cancel} onPress={this.setModalVisible(false)}>
                Cancelar
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const Container = connect(store => store)( Create );
export default Container;


const styles = StyleSheet.create({
  
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  
  upper: {
    height: 180,
    justifyContent: 'space-between'
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
    resizeMode: 'cover',
    opacity: 0.8,
    width: null,
    height: null
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
  
  header_img: {
    height: 50,
    width: 50,
    marginTop: 16,
    marginRight: 8,
    alignItems: 'center'
  },
  
  
  event_info: {
    height: 48,
    backgroundColor: '#ffffff11',
    marginBottom: 16,
    marginHorizontal: 16,
    paddingHorizontal: 8,
    justifyContent: 'center',
    borderBottomColor: '#ffffff44',
    borderBottomWidth: 1
  },
  
  event_info_title: {
    color: '#ffffff',
    height: 44,
    fontSize: 26,
    lineHeight: 26,
    fontWeight: '300',
    marginBottom: 0,
    paddingBottom: Platform.OS == 'ios' ? 0 : 8,
  },
  
  
  event_more: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },
  
  event_more_row: {
    flexDirection:'row',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#a7a9ac',
    height: 50,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16
  },
  
  event_more_row_text: {
    color: '#555555',
    fontSize: 14,
    fontWeight: '500'
  },
  
  
  event_more_row_select: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#a7a9ac',
    height: 50,
    marginTop: 12,
    paddingLeft: 16,
    paddingRight: 16
  },
  
  select: {
    height: 48,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  
  select_text: {
    color: '#888888',
    textAlign: 'center'
  },
  
  modal: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'flex-end',
    paddingLeft: 24,
    paddingRight: 24
  },
  
  button_buy: {
    backgroundColor: '#8DC63F',
    marginTop: 24,
    borderRadius: 24,
    height: 48
  },
  
  button_pic: {
    backgroundColor: '#2195D2',
    marginTop: 12,
    borderRadius: 24,
    height: 48
  },
  
  button_delete: {
    backgroundColor: '#ff3333',
    marginTop: 12,
    borderRadius: 24,
    height: 48
  },
  
  button_cancel: {
    marginTop: 12,
    marginBottom: 16,
    borderRadius: 24,
    height: 48
  },
  
  errors: {
    marginTop: 16
  },
  
  error: {
    color: '#ff0000',
    fontSize: 13,
    marginTop: 4
  }
  
});
