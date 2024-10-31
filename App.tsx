import {View, Text} from 'react-native';
import React from 'react';
import Routes from './src/routes/routes';
// import Createtask from './src/screens/Createtaskscreen/Createtask';
import Home from './src/screens/Homescreen/Home';
import Profile from './src/screens/Taskscreen/Task';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    // <Home/>
    // <Createtask />
    // <Profile></Profile>

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
        {/* <Profile></Profile> */}
      </PersistGate>
    </Provider>
  );
};

export default App;
