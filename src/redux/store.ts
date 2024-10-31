import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import TodoReducer from '../redux/slices/TodoSlice';
import EncryptedStorage from 'react-native-encrypted-storage';

const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
};

const rootReducer = combineReducers({
  Todo: TodoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (
    getDefaultMiddleware, // non- serilizer error
  ) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
