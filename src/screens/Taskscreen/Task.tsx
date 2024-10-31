import {View, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import GenericText from '../../components/generic/genericText/genericText';
import GenericFlatList from '../../components/generic/genericFlatlist/genericFlatlist';
import {ListRenderItemInfo} from 'react-native';
import GenericButton from '../../components/generic/genericButton/genericButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {deleteTodo} from '../../redux/slices/TodoSlice';

type TodoType = {
  id: string;
  title: string;
  calendardate: string;
  description: string;
  startTime: string;
  endTime: string;
  priority: string;
};

const Task = (props: any) => {
  const data = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const handleEdit = (item: TodoType) => {
    props.navigation.navigate('Newtask', {item});
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const renderItem = ({item}: ListRenderItemInfo<TodoType>) => (
    <View style={styles.todoItemContainer}>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <GenericText text={item.title} style={styles.titleText} />
          <View
            style={[
              styles.priorityBadge,
              {backgroundColor: getPriorityColor(item.priority)},
            ]}>
            <GenericText text={item.priority} style={styles.priorityText} />
          </View>
        </View>
        <GenericText text={item.calendardate} style={styles.dateText} />
        <GenericText text={item.description} style={styles.descriptionText} />
      </View>
      <View style={styles.iconContainer}>
        <GenericButton
          onPress={() => handleEdit(item)}
          buttonstyle={styles.editButton}>
          <Icon name="edit" size={20} color="white" />
        </GenericButton>
        <GenericButton
          onPress={() => handleDelete(item.id)}
          buttonstyle={styles.deleteButton}>
          <Icon name="delete" size={20} color="white" />
        </GenericButton>
      </View>
    </View>
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'red';
      case 'Medium':
        return 'orange';
      case 'Low':
        return 'green';
      default:
        return 'grey';
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <GenericText text="Task" style={styles.profileText} />

        <GenericFlatList
          data={data.Todo}
          renderItem={renderItem}
          style={styles.flatList}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Task;
