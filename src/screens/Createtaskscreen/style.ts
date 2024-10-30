import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#020206',
  },

  schedulecontainer: {
    // backgroundColor: 'red',
    marginTop: 25,
    paddingBottom: 15,
  },

  timecontainer: {
    marginTop: 20,
    height: 100,
    // backgroundColor: 'red',
  },

  insidetimecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  starttimecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    height: 50,
    borderRadius: 7,
    marginTop: 10,
    marginLeft: 10,
    width: 150,
  },

  Endtimecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    height: 50,
    borderRadius: 7,
    marginTop: 10,
    marginRight: 48,
    width: 150,
  },

  inputboxcontainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    height: 49,
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 20,
  },

  inputboxcontainer2: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    height: 80,
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 20,
  },

  insideprioritycontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    // backgroundColor : 'yellow'
  },

  switchcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    // backgroundColor : 'yellow'
  },

  lineargardient: {
    marginTop: 25,
    borderRadius: 8,
    margin: 20,
  },
});
