import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

type ButtonProps = {
  label?: string;
  onPress?: () => void;
  buttonstyle?: object;
  textStyle?: object;
};

const GenericButton = ({
  label,
  onPress,
  buttonstyle,
  textStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity style={[buttonstyle]} onPress={onPress}>
      <Text style={[textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

// const styles = StyleSheet.create({
//   button: {
//     padding: 10,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
//   label: {
//     color: '#FFFFFF',
//     fontSize: 16,
//   },
// });

export default GenericButton;