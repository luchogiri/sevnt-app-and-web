// @flow

import React, { Component } from 'react';

const TextInline = (props: Object) => {
  
  let { style, ...attrs } = props;
  
  return (
    <span style={style} {...attrs}>
      {props.children}
    </span>
  );
};

export default TextInline;