
const RN = require('react-native');

export const View = RN.View;
export const KeyboardAvoidingView = RN.Platform.OS == 'android' ? RN.View : RN.KeyboardAvoidingView;
export { default as Text } from './text';
export { default as TextInline } from './text';
export const TextInput = RN.TextInput;
export { default as Field } from './field';
export const Image = RN.Image;
export const TouchableOpacity = RN.TouchableOpacity;
export { default as Button } from './button';
export const Modal  = RN.Modal;
export const ScrollView = RN.ScrollView;
export const ListView = RN.ListView;
export const RefreshControl = RN.RefreshControl;

export const StyleSheet = RN.StyleSheet;
export const Dimensions = RN.Dimensions;
export const Platform = RN.Platform;
export const LayoutAnimation = RN.LayoutAnimation;
