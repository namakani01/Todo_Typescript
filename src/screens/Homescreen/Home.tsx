import {View, SafeAreaView, Image, TouchableOpacity} from 'react-native';

import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

import GenericText from '../../components/generic/genericText/genericText';
import GenericInputbox from '../../components/generic/genericInputbox/genericInputbox';

import GenericFlatList from '../../components/generic/genericFlatlist/genericFlatlist';

import {styles} from './style';

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
              // borderWidth: 2,
              // borderColor: 'black',
              height: 45,
              width: '85%',
              marginLeft: 7,
            }}
          />
        </View>

        <View style={styles.rowcontainer}>
          <GenericText
            text="Progress"
            style={{
              color: 'white',
              marginTop: 15,
              marginLeft: 10,
              fontWeight: 'bold',
            }}
          />

          <GenericText
            text="See All"
            style={{
              color: '#BA83DE',
              marginTop: 15,
              marginLeft: 10,
              fontWeight: 'bold',
            }}
          />
        </View>

        <View style={styles.progresscontainer}>
          <GenericText
            text="Daily Task"
            style={{
              color: 'white',
              marginTop: 10,
              marginLeft: 10,
              fontWeight: 'bold',
            }}
          />

          <GenericText
            text="2/3 Task Completed"
            style={{
              color: '#FFFFFFCC',
              marginTop: 10,
              marginLeft: 10,
              // fontWeight: 'bold',
            }}
          />

          <View style={styles.progressTextContainer}>
            <GenericText
              text="You are almost done go ahead"
              style={{
                color: '#FFFFFFCC',
                // fontWeight: 'bold',
              }}
            />

            <GenericText
              text="66%"
              style={{
                color: 'white',
                marginTop: 5,
                // alignSelf: 'flex-end',
                marginRight: 10,
                fontWeight: 'bold',
              }}
            />
          </View>

          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar} />
          </View>
        </View>

        <View style={styles.rowcontainer}>
          <GenericText
            text="Task"
            style={{
              color: 'white',
              marginTop: 15,
              marginLeft: 10,
              fontWeight: 'bold',
            }}
          />

          <GenericText
            text="See All"
            style={{
              color: '#BA83DE',
              marginTop: 15,
              fontWeight: 'bold',
            }}
          />
        </View>

        <TouchableOpacity>
          <LinearGradient
            colors={['#BA83DE', '#D9D9D9']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            style={styles.plusbuttonlineargradient}>
            <Icon style={styles.plusicon} name="plus" size={30}></Icon>
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Home;
