// import React, { useState } from "react";
import './Listodo';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, setNewTodo} from '../redux/actions';
// import {v4 as uuidv4} from 'uuid';
// import store from '../redux/store';
import {Store} from "../redux/types";
import { useState } from 'react';
// import Listodo from "./Listodo";
// interface AddProps{
//     addNewTodo?:any
// }
    function AddTodo() {
        const newTodo = useSelector((state: Store) => state.newTodo);
        const dispatch = useDispatch();
        
        return (
            <div className="col col-11 mx-auto">
                <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                    <div className="col">
                        <input  className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"  type="text" placeholder="Add new .." 
                            value={newTodo}
                            onChange={(event)=>dispatch(setNewTodo(event.target.value))}
                        />
                    </div>
                    <div className="col-auto m-0 px-2 d-flex align-items-center">

                        <input type="date" 
                           
                        />
                    </div>
                    <div className="col-auto px-0 mx-0 mr-2">
                        <button type="button" className="btn btn-primary"
                           onClick={() => dispatch(addTodo())}
                        >Add</button>
                    </div>
                </div>
                
                
            </div>
            
        )
    }

export default AddTodo;