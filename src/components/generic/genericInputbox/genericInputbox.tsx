import {TextInput} from 'react-native';
import React from 'react';

type TextinputProps = {
  text: string;
  style?: object;
  placeholderTextColor?: string;
  onChangeText: (text: string) => void;
  value: string;
};

const GenericInputbox = ({
  text,
  style,
  placeholderTextColor,
  value,
  onChangeText,
}: TextinputProps) => {
  return (
    <TextInput
      style={[style, {placeholderTextColor: 'red'}]}
      placeholder={text}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default GenericInputbox;
