import {View, SafeAreaView, Image} from 'react-native';

import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

import GenericText from '../../components/generic/genericText/genericText';
import GenericInputbox from '../../components/generic/genericInputbox/genericInputbox';
import GenericFlatList from '../../components/generic/genericFlatlist/genericFlatlist';

import {styles} from './style';
import {ListRenderItemInfo} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import GenericButton from '../../components/generic/genericButton/genericButton';

const Home = (props: any) => {
  // console.log("Props" , props)

  const [todos, setTodos] = useState<any>([]);

  const [todos1, setTodos1] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [checked, setchecked] = useState(false);
  const [search, setSearch] = useState('');

  // const [completed , setcompleted] = useState<any>('')

  const completed = todos.filter(
    (value: {completed: boolean}) => value.completed === true,
  ).length;

  // console.log('hello', completed);

  // console.log('Checked', checked);

  // console.log("completed" , completed)

  // console.log('Todos', todos);

  const colors = ['#FACBBA', '#D7F0FF', '#FAD9FF'];

  const filteredtodos = todos.filter((value: {todo: any}) =>
    value.todo.toLowerCase().includes(search.toLowerCase()),
  );

  // console.log('filteredtodos', filteredtodos);

  const renderItem = ({
    item,
    index,
  }: ListRenderItemInfo<{
    completed: any;
    id: string;
    todo: string;
  }>) => {
    const backgroundColor = colors[index % 3];

    return (
      <View style={styles.renderitemcontainer}>
        <View
          style={[
            styles.colorcontainer,
            {backgroundColor: backgroundColor},
          ]}></View>

        <View style={styles.textandcheckboxcontainer}>
          <GenericText
            text={item.todo}
            style={{
              marginRight: 10,
              flex: 1,
              color: 'white',
            }}
          />

          <CheckBox
            style={{height: 17, width: 17}}
            value={checked}
            onCheckColor="#000000"
            tintColor="#BA83DE"
            onFillColor="#BA83DE"></CheckBox>

          {/* <View style={{marginLeft: 30}}>
            <Icon1 name="calendar-month" size={20} color={'yellow'}></Icon1>
          </View> */}
        </View>
      </View>
    );
  };

  async function FetchTodos() {
    let result = await fetch('https://dummyjson.com/todos/random/10');
    result = await result.json();
    // console.log(result)
    setTodos(result);
    // setTodos1(result);
  }

  useEffect(() => {
    FetchTodos();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.textcontainer}>
          <View>
            <GenericText
              text={`You have got ${10 - completed} tasks`}
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
            value={search}
            onChangeText={text => setSearch(text)}
            style={{
              paddingLeft: 3,
              // borderWidth: 2,
              // borderColor: 'black',
              color: 'white',
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
              marginRight: 20,
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
            text={`${completed} / 10 Task Completed`}
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
              text={`${completed * 10}${`%`} `}
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
            <View style={[styles.progressBar, {width: completed * 30}]} />
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
              marginRight: 20,
              fontWeight: 'bold',
            }}
          />
        </View>

        <GenericFlatList
          style={{height: 370, marginTop: 10}}
          data={filteredtodos}
          renderItem={renderItem}
        />

        <GenericButton
          onPress={() => props.navigation.navigate('Newtask')}
          buttonstyle={{marginLeft: 330, marginTop: 720, position: 'absolute'}}>
          <LinearGradient
            colors={['#BA83DE', '#D9D9D9']}
            style={styles.plusbuttonlineargradient}>
            <Icon style={styles.plusicon} name="plus" size={30}></Icon>
          </LinearGradient>
        </GenericButton>
      </SafeAreaView>
    </View>
  );
};

export default Home;
