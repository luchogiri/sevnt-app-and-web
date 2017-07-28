// @flow

import React, { Component } from 'react';

const View = (props: Object) => {

  let { style, scrollEventThrottle, ...attrs } = props;

  return (
    <div style={{...styles.def, ...style}} {...attrs}>
      {props.children}
    </div>
  );
};

export default View;


let styles = {
  def: {
    display: 'flex',
    flexDirection: 'column'
  }
};
