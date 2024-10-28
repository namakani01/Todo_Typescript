import {TextInput} from 'react-native';
import React from 'react';

type TextinputProps = {
  text: string;
  style?: object;
  placeholderTextColor?: string;
};

const GenericInputbox = ({
  text,
  style,
  placeholderTextColor,
}: TextinputProps) => {
  return (
    <TextInput
      style={[style, {placeholderTextColor: 'red'}]}
      placeholder={text}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

export default GenericInputbox;
