import {createSlice} from '@reduxjs/toolkit';

const initialState = <any>[];

const TodoSlice = createSlice({
  name: 'Todoredux',
  initialState: initialState,
  reducers: {
    addTodo: (initialState, action) => {
      initialState.push(action.payload);
    },

    updateTodo: (initialState, action) => {
      return initialState.map((todo: {id: any}) =>
        todo.id === action.payload.id ? {...todo, ...action.payload} : todo,
      );
    },

    deleteTodo: (initialState, action) => {
      return initialState.filter(
        (value: {id: any}) => value.id !== action.payload,
      );
    },
  },
});

export const {addTodo, updateTodo, deleteTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
