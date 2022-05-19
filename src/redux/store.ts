import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  ActionTypes,
  SET_TODOS,
  DELETE_TODO,

  UPDATE_TODO,

  ADD_TODO,

  SET_NEWTODO,
  TOGGLE_TODO,

} from "./actions";
import { Store, Todo } from "./types";

const updateTodo = (todos: Todo[], id: number, title: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    title: todo.id === id ? title : todo.title,
  }));

  const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo : todo,
  }));

  const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

  const addTodo = (todos: Todo[], title: string, date:string,completed:boolean): Todo[] => [
    ...todos,
    {
      id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
      title,
      date,
      completed,
    },
  ];
function todoReducer(
  state: Store = {
    todos: [],
    newTodo: "",
    date:"",
    completed:false,
  },
  action: ActionTypes
) {
  switch (action.type) {
    case UPDATE_TODO:
      const updateTodo = state.todos.map((todo)=>{
        if(todo.id === action.payload.id){
          return{...todo, task:action.payload.title}
        }
        return todo;
      })
      return{
        ...state,
        todo: updateTodo,
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: removeTodo(state.todos, action.payload),
      };
    case ADD_TODO:
      return {
        ...state,
        newTodo: "",
        todos: addTodo(state.todos, state.newTodo,state.date,state.completed),
      };
      case SET_TODOS:
        return {
          ...state,
          todos: action.payload,
        };
      case SET_NEWTODO:
        return {
          ...state,
          newTodo: action.payload,
        };
        case TOGGLE_TODO:
          return {
            ...state,
            todos: toggleTodo(state.todos, action.payload),
          };
    default:
      return state;
  }
}
const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;