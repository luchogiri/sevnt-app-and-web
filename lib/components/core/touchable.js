// @flow

// import { Link } from 'react-router';

import React, { Component } from 'react';

const Touchable = (props: Object) => {
  
  let { style, onPress, ...attrs } = props;
  
  return (
    <div style={{...style, ...styles.def}} onClick={onPress} className='touchable' {...attrs}>
      {props.children}
    </div>
  );
};

export default Touchable;

const styles = {
  
  def: {
    display: 'flex',
    flexDirection: 'column'
  }
  
};