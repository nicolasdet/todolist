import { Todo } from './todo-context';

export enum ActionType {
  ADD = 'ADD',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

interface addTodoAction {
  type: ActionType.ADD;
  payload: Partial<Todo>;
}

interface updateTodoAction {
  type: ActionType.UPDATE;
  payload: Partial<Todo>;
}

interface deleteAction {
  type: ActionType.DELETE;
  payload: string;
}

export type Action = addTodoAction | updateTodoAction | deleteAction;
