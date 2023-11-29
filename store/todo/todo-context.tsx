import { createContext, useReducer, useEffect } from 'react';
import { INITIAL_STATE } from './initial-todos';
import { Action, ActionType } from './Actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Todo {
  id: string;
  title: string;
  content?: string;
  createdAt?: string;
  date?: string;
  label?: String[];
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (todoData: Partial<Todo>) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todoData: Partial<Todo>) => void;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: (todoData) => {},
  deleteTodo: (id) => {},
  updateTodo: ({ id, title, content }) => {},
});

function TodoReducer(state: Todo[], action: Action) {
  switch (action.type) {
    case ActionType.FETCH:
      return [...action.payload];
    case ActionType.ADD:
      const id = new Date().toString() + Math.random().toString();
      return [
        {
          title: action.payload.title,
          content: action.payload.content,
          date: action.payload.date,
          id: id,
        },
        ...state,
      ];
    case ActionType.UPDATE:
      const updatableTodoIndex = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const updatableTodo = state[updatableTodoIndex];
      const updatedItem = { ...updatableTodo, ...action.payload };
      const updatedTodos = [...state];
      updatedTodos[updatableTodoIndex] = updatedItem;
      return updatedTodos;
    case ActionType.DELETE:
      return [...state.filter((expense) => expense.id !== action.payload)];
    default:
      return state;
  }
}

const TodoContextProvider = ({ children }) => {
  const [todosState, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('todosState');
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (e) {
      alert('Une erreur est survenue lors du chargement des données');
    }
  };

  const addTodo = (todoData: { title: string; content?: string }) => {
    dispatch({ type: ActionType.ADD, payload: todoData });
  };

  const deleteTodo = (id: string) => {
    dispatch({ type: ActionType.DELETE, payload: id });
  };

  const updateTodo = (todoData: {
    title: string;
    content: string;
    date: string;
  }) => {
    dispatch({ type: ActionType.UPDATE, payload: todoData });
  };

  const value = {
    todos: todosState,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    updateTodo: updateTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;
