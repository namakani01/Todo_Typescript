import React from 'react';
import {View, Text, StyleProp, ViewStyle, TextStyle} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

type CheckboxProps = {
  label?: string;
  checked?: boolean;
  onToggle?: (checked: boolean) => void;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: object;
  checkboxStyle?: object;
  tintColors?: {true: string; false: string};
};

const GenericCheckbox = ({
  label,
  checked = false,
  onToggle,
  containerStyle,
  labelStyle,
  checkboxStyle,
  tintColors = {true: '#007BFF', false: '#B0B0B0'},
}: CheckboxProps) => {
  return (
    <CheckBox
      value={checked}
      onValueChange={newValue => onToggle && onToggle(newValue)}
      tintColors={tintColors}
      style={checkboxStyle}
    />
  );
};

export default GenericCheckbox;
