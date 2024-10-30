import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
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

  plusbuttonlineargradient: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },

  plusicon: {
    alignSelf: 'center',
    marginTop: 10,
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
    marginRight: 20,
  },

  rowcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  progresscontainer: {
    height: 190,
    backgroundColor: '#1E1E1E',
    marginTop: 10,
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 20,
  },
  progressTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 10,
  },
  progressBarContainer: {
    height: 16,
    backgroundColor: '#3b3b3b',
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#BA83DE',
    width: '66%',
    borderRadius: 8,
  },
  buttoncontainer: {},
});
