// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import I18n from '../helpers/i18n';

import { View, Text, TextInput, Image, TouchableOpacity, Button, ScrollView, StyleSheet, Platform } from '../components/core';


class Search extends Component {
  
  props: Object;
  state: Object;
  handleInput: Function;
  
  
  constructor(props: Object) {
    super(props);
    
    this.state = { query: '' };
  }
  
  handleInput = (field) => {
    return (value) => {
      this.setState({ [field] : value });
    };
  };
  
  navigate = (category) => {
    return () => {
      if (!category && !this.state.query) return;
      if (!category)
        this.props.navigator.push({ screen: 'Result', data: { query: this.state.query }});
      else
        this.props.navigator.push({ screen: 'Result', data: { category }});
    }
  }
  
  
  render() {
    return (
      <View style={styles.wrapper}>
  
        <Image style={styles.header} source={require('../img/bg-nav.jpg')}>
          <View style={styles.header_content}>
            
            <TouchableOpacity style={styles.header_back} onPress={this.props.navigator.pop}>
              <Image style={{width: 12, height: 20}} source={require('../img/icon-back.png')} />
            </TouchableOpacity>
            
            <View style={styles.header_field}>
              <TextInput
                style={styles.header_input}
                placeholderTextColor='#bbbbbb'
                underlineColorAndroid='transparent'
                placeholder='ingrese un término...'
                onChangeText={this.handleInput('query')}
                value={this.state.query}
                autoCapitalize='none'
                returnKeyType='done'
                />
            </View>
            
            <Button
              style={styles.header_search}
              textStyle={styles.header_search_text}
              onPress={this.navigate()}>BUSCAR</Button>
          </View>
        </Image>
        
        <ScrollView>
          <View style={styles.predefined}>
            {['MUSIC', 'THEATRE', 'FASHION', 'SPIRITUALITY', 'COURSES', 'PROFESSIONAL', 'SPORTS', 'EDUCATION',
              'PARTIES', 'EXHIBITIONS AND MUSEUMS', 'INFANTILE', 'RECOMMENDED'].map(category => (
              <TouchableOpacity key={category} style={styles.predefined_item} onPress={this.navigate(category)}>
                <Text style={styles.predefined_item_text}>{I18n(category)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const Container = connect(store => store)( Search );
export default Container;


const styles = StyleSheet.create({
  
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  
  header: {
    paddingTop: Platform.OS == 'ios' ? 20 : Platform.Version > 17 ? 24 : 0,
    height: Platform.OS == 'ios' ? 70 : Platform.Version > 17 ? 74 : 60,
    width: null,
    resizeMode: 'cover',
  },
  
  header_content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 16,
    paddingLeft: 6
  },
  
    header_back: {
      width: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    header_field: {
      flex: 1,
      height: 32,
      borderRadius: 16,
      backgroundColor: '#ffffff',
      marginRight: 12,
      marginLeft: 8,
      position: 'relative',
      paddingLeft: 16
    },
  
      header_input: {
        flex: 1,
        fontSize: 14,
        color: '#333333',
        marginBottom: 0,
        paddingBottom: Platform.OS == 'ios' ? 0 : 6
      },
  
    header_search: {
      width: 70,
      height: 32,
      backgroundColor: 'transparent',
      borderColor: '#ffffff',
      borderWidth: 1
    },
      header_search_text: {
        color:'#ffffff',
        fontSize: 13
      },
  
  predefined: {
    marginTop: 16
  },
  
    predefined_item: {
      height: 56,
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: '#f0f0f0',
      backgroundColor: '#fbfbfb',
      justifyContent: 'center',
      paddingLeft: 32,
    },
    
      predefined_item_text: {
        fontSize: 18,
        fontWeight: '400',
        color: '#666666'
      },
  
});