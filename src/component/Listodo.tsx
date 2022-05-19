// import { title } from "process";
import React, { useEffect, useState } from "react";
import './Addtodo';
import AddTodo from "./Addtodo";
import './main';
import { Store } from "../redux/types";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, loaddata, setNewTodo, setTodos, toggleTodo, updateTodo } from "../redux/actions";
import axios from "axios";



function Listodo() {
    const [sort, setSort] = useState("all");
    const [todoitem, setTodoitem] = useState(null);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((results) => {
                console.log(results.data);
                dispatch((setTodos(results.data)))
            })
    }, [])
    const todos = useSelector((state: Store) => state.todos)
    const dispatch = useDispatch();
    const [editTitle, setEditTitle] = useState('');

    const EditTodo = (id: number) => {
        todos.forEach((todo: any) => {
            if (todo.id === id) {
                if (todo.onEdit) {
                    todo.title = editTitle;
                    todo.onEdit = false;
                    dispatch(updateTodo(id, editTitle));
                }
                else {
                    todo.onEdit = true;
                    setEditTitle(todo.title);
                    dispatch(updateTodo(id, editTitle));
                }
                return;
            }
            else {
                todo.onEdit = false;
            }
            return;
        });
    }
    useEffect(() => {
        dispatch(loaddata());
    }, []);
    return (
        <div className="List_todo">
            <div className="mx-1 px-5 pb-3 w-80">
                <div className="col mx-auto">
                    {/* <!-- Todo Item 1 --> */}
                    <AddTodo />
                </div>

            </div>

            <div className="row m-1 p-3 px-5 d justify-content-end">
                    <div className="col-auto  d-flex align-items-center">
                        <label className="text-secondary my-2 pr-2 view-opt-label">Filter</label>
                        <select  className="custom-select custom-select-sm btn my-2" onChange={(e) => setSort(e.target.value)}>
                            <option value="all" selected>All</option>
                            <option value="completed">Completed</option>
                            <option value="active">Active</option>
                            <option value="has-due-date">Has due date</option>
                        </select>
                    </div>
                    <div className="col-auto d-flex align-items-center px-1 pr-3">
                        <label className="text-secondary my-2 pr-2 view-opt-label">Sort</label>
                        <select className="custom-select custom-select-sm btn my-2">
                            <option value="added-date-asc" selected>Added date</option>
                            <option value="due-date-desc">Due date</option>
                        </select>
                    </div>
                    <div className="icon_amount">
                        <i className="fas fa-sort-amount-up-alt"></i>
                    </div>
                </div>
            <div className="col-auto m-1 p-0 d-flex align-items-center">
                <h2 className="m-0 p-0">
                    <i className="fa fa-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as complete"></i>
                    <i className="fa fa-check-square-o text-primary btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Mark as todo"></i>
                </h2>
            </div>
            {todos.length >0 && sort === "all" ?
                todos.map((todo) => {
                    return (
                        <div className="list_todo--content" key={todo.id}>

                        {
    
    
                            <div className="todo_child">
                                <div className="col-auto m-1 p-0 d-flex align-items-center">
                                    <input type="checkbox"
                                    checked={todo.completed}
                                    onClick={() => dispatch(toggleTodo(todo.id))}
                                     />
                                </div>
                                <div className="col px-1 m-1 d-flex align-items-center">
                                    <input id="nhap" className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
                                        defaultValue={todo.onEdit ? editTitle : todo.title}
                                        disabled={!todo.onEdit}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                    // onChange={(e) => dispatch(updateTodo(todo.id, e.target.value))}
                                    />
                                </div>
    
    
                                <div className="action">
                                    <div className="action_icon">
                                    {todo.onEdit ? (
                                                <i
                                                    onClick={() => EditTodo(todo.id)}
                                                    className="fas fa-pencil-alt"
                                                >
                                                </i>
                                            ) : (
                                                <i
                                                    className="fas fa-pencil-alt"
                                                    onClick={() => EditTodo(todo.id)}
                                                >
                                                </i>
                                            )}
                                        <i className="fas fa-trash-alt"
                                            onClick={() => dispatch(deleteTodo(todo.id))}
                                        ></i>
                                    </div>
                                    <div className="date_item">
                                        <p><i className="fas fa-info-circle"></i>2021-03-21</p>
                                    </div>
                                </div>
                            </div>
    
    
                        }
                    </div>
                    )
                })
                :null
            }
            {todos.length >0 && sort === "active" ?
                todos.map((todo) => {
                    return (todo.completed === false && (
                        <div className="list_todo--content" key={todo.id}>

                        {
    
    
                            <div className="todo_child">
                                <div className="col-auto m-1 p-0 d-flex align-items-center">
                                    <input type="checkbox"
                                    checked={todo.completed}
                                    onClick={() => dispatch(toggleTodo(todo.id))}
                                     />
                                </div>
                                <div className="col px-1 m-1 d-flex align-items-center">
                                    <input id="nhap" className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
                                        defaultValue={todo.onEdit ? editTitle : todo.title}
                                        disabled={!todo.onEdit}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                    // onChange={(e) => dispatch(updateTodo(todo.id, e.target.value))}
                                    />
                                </div>
    
    
                                <div className="action">
                                    <div className="action_icon">
                                    {todo.onEdit ? (
                                                <i
                                                    onClick={() => EditTodo(todo.id)}
                                                    className="fas fa-pencil-alt"
                                                >
                                                </i>
                                            ) : (
                                                <i
                                                    className="fas fa-pencil-alt"
                                                    onClick={() => EditTodo(todo.id)}
                                                >
                                                </i>
                                            )}
                                        <i className="fas fa-trash-alt"
                                            onClick={() => dispatch(deleteTodo(todo.id))}
                                        ></i>
                                    </div>
                                    <div className="date_item">
                                        <p><i className="fas fa-info-circle"></i>2021-03-21</p>
                                    </div>
                                </div>
                            </div>
    
    
                        }
                    </div>
                    ))
                })
                :null
            }
            {todos.length >0 && sort === "completed" ?
                todos.map((todo) => {
                    return (todo.completed === true && (
                        <div className="list_todo--content" key={todo.id}>

                        {
    
    
                            <div className="todo_child">
                                <div className="col-auto m-1 p-0 d-flex align-items-center">
                                    <input type="checkbox"
                                    checked={todo.completed}
                                    onClick={() => dispatch(toggleTodo(todo.id))}
                                     />
                                </div>
                                <div className="col px-1 m-1 d-flex align-items-center">
                                    <input id="nhap" className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
                                        defaultValue={todo.onEdit ? editTitle : todo.title}
                                        disabled={!todo.onEdit}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                    // onChange={(e) => dispatch(updateTodo(todo.id, e.target.value))}
                                    />
                                </div>
    
    
                                <div className="action">
                                    <div className="action_icon">
                                    {todo.onEdit ? (
                                                <i
                                                    onClick={() => EditTodo(todo.id)}
                                                    className="fas fa-pencil-alt"
                                                >
                                                </i>
                                            ) : (
                                                <i
                                                    className="fas fa-pencil-alt"
                                                    onClick={() => EditTodo(todo.id)}
                                                >
                                                </i>
                                            )}
                                        <i className="fas fa-trash-alt"
                                            onClick={() => dispatch(deleteTodo(todo.id))}
                                        ></i>
                                    </div>
                                    <div className="date_item">
                                        <p><i className="fas fa-info-circle"></i>2021-03-21</p>
                                    </div>
                                </div>
                            </div>
    
    
                        }
                    </div>
                    ))
                })
                :null
            }

        </div>
    )
}

export default Listodo;

// function componentDidMount() {
//     throw new Error("Function not implemented.");
// }
