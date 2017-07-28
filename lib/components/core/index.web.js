
import React, { Component } from 'react';

export { default as View } from './view';
export { default as ScrollView } from './view';
export { default as Text } from './text';
export { default as TextInline } from './text-inline';
export { default as TouchableOpacity } from './touchable';
export { default as Image } from './image';
export { default as Button } from './button';

export const Platform = { OS: 'web' };
export const Dimensions = { get: () => ({ width: 0, height: 0 }) };
export const StyleSheet = { create: (styles) => styles };