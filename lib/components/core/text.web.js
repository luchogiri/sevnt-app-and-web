// @flow

import React, { Component } from 'react';

const Text = (props: Object) => {

  let { style, ...attrs } = props;

  return (
    <p style={style} {...attrs}>
      {props.children}
    </p>
  );
};

export default Text;