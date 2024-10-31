import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#020206',
    padding: 16,
  },
  todoItemContainer: {
    backgroundColor: '#1F1F1F',
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    flex: 1,
  },
  priorityBadge: {
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 9,
    marginRight: 65,
  },
  priorityText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  dateText: {
    color: 'grey',
    fontSize: 13,
    marginTop: 5,
  },
  descriptionText: {
    color: 'white',
    fontSize: 14,
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    marginTop: 20,
    marginRight: 20,
  },
  deleteButton: {
    marginTop: 20,
    marginRight: 10,
  },
  profileText: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
  },
  flatList: {
    marginTop: 10,
  },
});
