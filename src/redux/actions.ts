
import { Action } from "redux";
import { Todo } from "./types";

export const ADD_TODO ="ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO ="UPDATE_TODO";
export const SET_NEWTODO ="SETNEW_TODO";
export const SET_TODOS = "SET_TODOS";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const LOAD_DATA = "LOAD_DATA";
export type ActionTypes =

  | { type: typeof ADD_TODO }
  | { type: typeof DELETE_TODO; payload: number }
  | {
      type: typeof UPDATE_TODO;
      payload: {
        id: number;
        title: string;
      };
    }
    | { type: typeof SET_NEWTODO;payload:string }
    | { type: typeof TOGGLE_TODO; payload: number }
    | { type: typeof LOAD_DATA }
  | { type: typeof SET_TODOS;payload:Todo[] };
export const addTodo = (): ActionTypes => ({ type: ADD_TODO });

export const deleteTodo = (id: number): ActionTypes => ({
  type: DELETE_TODO,
  payload: id,
});
export const setNewTodo = ( title:string): ActionTypes => ({
  type: SET_NEWTODO,
  payload: title,
});

export const updateTodo = (id: number, title: string): ActionTypes => ({
  type: UPDATE_TODO,
  payload: {
      id,
      title,
  },
});
export const toggleTodo = (id: number): ActionTypes => ({
  type: TOGGLE_TODO,
  payload: id,
});
export const setTodos = (todos: Todo[]): ActionTypes => ({
  type: SET_TODOS,
  payload: todos,
});
export const loaddata = (): ActionTypes => ({
  type: LOAD_DATA,
})