// @flow

import React, { Component } from 'react';


const Image = (props: Object) => {
  
  const { style = {}, source = {}, ...attrs } = props;
  if (source.uri) style.backgroundImage = `url('${source.uri}')`;
  else style.backgroundImage = `url('/bin/${source}')`;
  
  return (
    <div style={{...style, ...styles.def}} {...attrs}>
      {props.children}
    </div>
  );
};

export default Image;

const styles = {
  
  def: {
    display: 'flex',
    flexDirection: 'column',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }
  
};
