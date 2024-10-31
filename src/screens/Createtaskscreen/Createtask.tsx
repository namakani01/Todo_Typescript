import {View, SafeAreaView, StyleSheet, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Switch} from 'react-native';
import GenericText from '../../components/generic/genericText/genericText';
import GenericInputbox from '../../components/generic/genericInputbox/genericInputbox';
import GenericButton from '../../components/generic/genericButton/genericButton';
import DateTimePicker from 'react-native-modal-datetime-picker';
import LinearGradient from 'react-native-linear-gradient';
import CalendarStrip from 'react-native-calendar-strip';
import {addTodo} from '../../redux/slices/TodoSlice';
import {updateTodo} from '../../redux/slices/TodoSlice';
import {styles} from './style';
import {nanoid} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

const Createtask = (props: any) => {
  console.log(props);

  const item = props.route.params?.item;

  // console.log('item', item);

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setDescription(item.description);
      setCalendardate(item.calendardate);
      // console.log('item', item);

      setStartTime(
        item?.startTime?.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      );
      setEndTime(
        item?.endTime?.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      );
      // setPriority(item.priority);
    }
  }, [item]);

  const dispatch = useDispatch();

  const [calendardate, setCalendardate] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [on, setOn] = useState(false);

  // console.log("title", title)
  // console.log("desc", description)

  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [startTime, setStartTime] = useState<any>(null);
  const [endTime, setEndTime] = useState<any>(null);
  const [isStartTimeSelected, setIsStartTimeSelected] = useState(true);

  // console.log(
  //   'stime',
  //   startTime?.toLocaleTimeString([], {
  //     hour: '2-digit',
  //     minute: '2-digit',
  //   }),
  // );

  // console.log(
  //   'etime',
  //   endTime?.toLocaleTimeString([], {
  //     hour: '2-digit',
  //     minute: '2-digit',
  //   }),
  // );

  // console.log("Priority" , priority)

  // console.log('calendardate', calendardate);

  const handleCreatetask = () => {
    if (
      title &&
      description &&
      calendardate &&
      priority &&
      startTime &&
      endTime
    ) {
      const TodoObject = {
        id: item ? item.id : nanoid(),
        title: title,
        description: description,
        calendardate: calendardate,
        startTime: startTime,
        endTime: endTime,
        priority: priority,
      };

      if (item) {
        dispatch(updateTodo(TodoObject));
      } else {
        dispatch(addTodo(TodoObject));
      }

      setCalendardate('');
      setTitle('');
      setDescription('');
      setStartTime('');
      setEndTime('');
      setPriority('');
      Alert.alert(
        item ? 'Task updated successfully' : 'Task created successfully',
      );
      props.navigation.navigate('Task');
    } else {
      Alert.alert('Please fill all the fields');
    }
  };

  const handleTimeConfirm = (time: Date) => {
    // console.log('time -----',time)
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
        <CalendarStrip
          scrollable
          calendarColor={'#181818'}
          style={{height: 100, paddingTop: 20, paddingBottom: 10}}
          calendarHeaderFormat="LL"
          calendarHeaderStyle={{color: '#BA83DE'}}
          dateNumberStyle={{color: '#FFFFFF99', marginTop: 5}}
          dateNameStyle={{color: '#FFFFFF99'}}
          highlightDateNumberStyle={{color: '#BA83DE', marginTop: 5}}
          highlightDateNameStyle={{color: '#BA83DE'}}
          onDateSelected={date => setCalendardate(date.format('DD-MM-YY'))}
        />

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
              value={title}
              onChangeText={text => setTitle(text)}
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
              value={description}
              onChangeText={text => setDescription(text)}
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
                  item?.startTime
                    ? `${startTime}`
                    : startTime
                    ? startTime?.toLocaleTimeString([], {
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
                  item?.endTime
                    ? `${endTime}`
                    : endTime
                    ? endTime?.toLocaleTimeString([], {
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
              onPress={() => setPriority('High')}
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
                onPress={() => setPriority('Medium')}
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
                onPress={() => setPriority('Low')}
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

          <Switch
            value={on}
            onValueChange={() => setOn(!on)}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={'#A378FF'}></Switch>
        </View>

        <LinearGradient
          colors={['#BA83DE', '#DE83B0']}
          style={styles.lineargardient}>
          <GenericButton
            onPress={() => handleCreatetask()}
            buttonstyle={{padding: 15}}
            label={item ? 'Update' : 'Create Task'}
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
