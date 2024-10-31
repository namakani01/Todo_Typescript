import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type TextProps = {
  text: string;
  style?: object;
};

const GenericText = ({text, style}: TextProps) => {
  return <Text style={[style]}>{text}</Text>;
};

// const styles = StyleSheet.create({
//   textcolor: {
//     fontSize: 15,
//     color: 'white',
//     fontWeight: 'bold',
//     marginLeft: 10,
//     borderWidth : 2 ,
//     borderColor : 'black',
//     borderRadius : 5,
//     textAlign : 'center',
//     alignItems: 'center',
//     position : 'absolute'
//   },
// });

export default GenericText;
