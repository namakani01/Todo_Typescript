import {View, SafeAreaView, StyleSheet, Image} from 'react-native';

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

import GenericText from '../../components/generic/genericText/genericText';
import GenericInputbox from '../../components/generic/genericInputbox/genericInputbox';

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.textcontainer}>
          <View>
            <GenericText
              text="You have got 5 tasks"
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                marginLeft: 10,
                marginBottom: 5,
              }}
            />
            <GenericText
              text="today to complete"
              style={{
                color: 'white',
                fontFamily: 'Roboto-Regular',
                fontWeight: 'bold',
                fontSize: 15,
                marginLeft: 10,
              }}
            />
          </View>

          <LinearGradient
            colors={['#BA83DE', '#D9D9D9']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.lineargardient}>
            <Image
              style={styles.imagestyle}
              source={require('../../assets/images/profilepic.png')}></Image>
          </LinearGradient>
        </View>

        <View style={styles.inputboxcontainer}>
          <Icon
            style={styles.iconstyle}
            name="search1"
            size={20}
            color={'white'}></Icon>
          <GenericInputbox
            text="Search Task here"
            placeholderTextColor="white"
            style={{
              paddingLeft: 3,
              //   borderWidth: 2,
              borderColor: 'black',
              height: 45,
              width: '82%',
              marginLeft: 7,
            }}
          />
        </View>

        <GenericText
          text="Progress"
          style={{
            color: 'white',
            marginTop: 15,
            marginLeft: 10,
            fontWeight: 'bold',
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 500,
    backgroundColor: '#020206',
  },

  textcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  lineargardient: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },

  imagestyle: {
    height: 75,
    width: 75,
    alignSelf: 'center',
  },

  iconstyle: {
    marginLeft: 8,
  },

  inputboxcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderColor: 'yellow',
    backgroundColor: '#1E1E1E',
    borderWidth: 2,
    height: 49,
    borderRadius: 7,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 30,
  },
});

export default Home;
