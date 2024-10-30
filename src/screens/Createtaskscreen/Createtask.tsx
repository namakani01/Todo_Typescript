import {View, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Switch} from 'react-native';
import GenericText from '../../components/generic/genericText/genericText';
import GenericInputbox from '../../components/generic/genericInputbox/genericInputbox';
import GenericCalender from '../../components/generic/genericCalender/genericCalender';
import GenericButton from '../../components/generic/genericButton/genericButton';
import DateTimePicker from 'react-native-modal-datetime-picker';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './style';

const Createtask = () => {
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [isStartTimeSelected, setIsStartTimeSelected] = useState(true);

  const handleTimeConfirm = (time: Date) => {
    if (isStartTimeSelected) {
      setStartTime(time);
    } else {
      setEndTime(time);
    }
    setTimePickerVisible(false);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <GenericCalender />

        <View style={styles.schedulecontainer}>
          <GenericText
            text="Schedule"
            style={{
              color: 'white',
              marginLeft: 10,
            }}></GenericText>
          <View style={styles.inputboxcontainer1}>
            <GenericInputbox
              text="Name"
              placeholderTextColor="white"
              style={{
                color: 'white',
                paddingLeft: 3,
                height: 45,
                width: '85%',
                marginLeft: 7,
              }}
            />
          </View>

          <View style={styles.inputboxcontainer2}>
            <GenericInputbox
              text="Description"
              placeholderTextColor="white"
              style={{
                color: 'white',
                paddingLeft: 3,
                height: 45,
                width: '85%',
                marginLeft: 7,
              }}
            />
          </View>
        </View>

        <View style={styles.timecontainer}>
          <View style={styles.insidetimecontainer}>
            <GenericText
              text="Start Time"
              style={{color: 'white', marginLeft: 10}}
            />
            <GenericText
              text="End  Time"
              style={{color: 'white', marginRight: 130}}
            />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.starttimecontainer}>
              <Icon
                style={{marginLeft: 8}}
                name="clock"
                size={24}
                color={'#BA83DE'}></Icon>
              <GenericButton
                onPress={() => {
                  setIsStartTimeSelected(true);
                  setTimePickerVisible(true);
                }}
                label={
                  startTime
                    ? startTime.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                    : 'Select Time'
                }
                textStyle={{color: 'white', marginLeft: 12}}
              />
            </View>

            <View style={styles.Endtimecontainer}>
              <Icon
                style={{marginLeft: 8}}
                name="clock"
                size={24}
                color={'#BA83DE'}></Icon>
              <GenericButton
                onPress={() => {
                  setIsStartTimeSelected(false);
                  setTimePickerVisible(true);
                }}
                label={
                  endTime
                    ? endTime.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                    : 'Select Time'
                }
                textStyle={{color: 'white', marginLeft: 12}}
              />
            </View>
          </View>
        </View>

        <View>
          <GenericText
            text="Priority"
            style={{
              color: 'white',
              marginTop: 10,
              marginLeft: 20,
              fontSize: 16,
            }}
          />

          <View style={styles.insideprioritycontainer}>
            <GenericButton
              buttonstyle={{
                borderWidth: 2,
                borderColor: '#FACBBA',
                paddingLeft: 25,
                paddingRight: 25,
                padding: 10,
                borderRadius: 8,
              }}
              textStyle={{color: 'white', textalign: 'center'}}
              label="High"
            />

            <View>
              <GenericButton
                buttonstyle={{
                  borderWidth: 2,
                  borderColor: '#D7F0FF',
                  paddingLeft: 25,
                  paddingRight: 25,
                  padding: 10,
                  borderRadius: 8,
                }}
                textStyle={{color: 'white', textalign: 'center'}}
                label="Medium"
              />
            </View>

            <View>
              <GenericButton
                buttonstyle={{
                  borderWidth: 2,
                  borderColor: '#FAD9FF',
                  paddingLeft: 25,
                  paddingRight: 25,
                  padding: 10,
                  borderRadius: 8,
                }}
                textStyle={{color: 'white', textalign: 'center'}}
                label="Low"
              />
            </View>
          </View>
        </View>

        <View style={styles.switchcontainer}>
          <GenericText
            text="Get alert for this task"
            style={{
              color: 'white',
              fontSize: 15,
              marginLeft: 15,
            }}></GenericText>

          <Switch thumbColor={'#A378FF'}></Switch>
        </View>

        <LinearGradient
          colors={['#BA83DE', '#DE83B0']}
          style={styles.lineargardient}>
          <GenericButton
            buttonstyle={{padding: 15}}
            label="Create Task"
            textStyle={{
              color: 'white',
              textAlign: 'center',
            }}
          />
        </LinearGradient>

        <DateTimePicker
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={() => setTimePickerVisible(false)}
        />
      </SafeAreaView>
    </View>
  );
};


export default Createtask;
