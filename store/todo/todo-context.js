import { createContext, useReducer } from 'react';
import { INITIAL_STATE } from './initial-todos';

export const TodoContext = createContext({
  todos: [],
  addTodo: ({ title }) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, { title }) => {},
});

function TodoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableTodoIndex = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const updatableTodo = state[updatableTodoIndex];
      const updatedItem = { ...updatableTodo, ...action.payload.data };
      const updatedTodos = [...state];
      updatedTodos[updatableTodoIndex] = updatedItem;
      return updatedTodos;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function TodoContextProvider({ children }) {
  const [todosState, dispatch] = useReducer(TodoReducer, INITIAL_STATE);
  console.log(todosState);

  function addTodo(todoData) {
    dispatch({ type: 'ADD', payload: todoData });
  }

  function deleteTodo(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateTodo(id, todoData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: todoData } });
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
