import React, {useState} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type TimePickerProps = {
  onConfirm: (time: Date) => void;
  label?: string;
};

const TimePicker = ({onConfirm, label = 'Pick a Time'}: TimePickerProps) => {
  const [isPickerVisible, setPickerVisible] = useState(false);

  const handleConfirm = (time: Date) => {
    setPickerVisible(false);
    onConfirm(time);
  };

  return (
    <View style={styles.container}>
      <Button title={label} onPress={() => setPickerVisible(true)} />
      <DateTimePickerModal
        isVisible={isPickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={() => setPickerVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default TimePicker;
