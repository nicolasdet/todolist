import { createContext, useReducer } from 'react';
import { INITIAL_STATE } from './initial-todos';
import { Action, ActionType } from './Actions';

export interface Todo {
  id: string;
  title: string;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: ({id, title}: Todo) => void;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: (title) => {},
  deleteTodo: (id) => {},
  updateTodo: ({id, title}) => {},
});

function TodoReducer(state: Todo[], action: Action) {
  switch (action.type) {
    case ActionType.ADD:
      const id = new Date().toString() + Math.random().toString();
      return [{ title: action.payload, id: id }, ...state];
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
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

const TodoContextProvider = ({ children }) => {
  const [todosState, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

  const addTodo = (todoData: string) => {
    dispatch({ type: ActionType.ADD, payload: todoData });
  }

  const deleteTodo = (id: string) => {
    dispatch({ type: ActionType.DELETE, payload: id });
  }

  const updateTodo = (todoData: Todo) => {
    dispatch({ type: ActionType.UPDATE, payload: todoData });
  }

  const value = {
    todos: todosState,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    updateTodo: updateTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export default TodoContextProvider;
