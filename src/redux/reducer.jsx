// import { ADD_TODO , TodoState, TodoAction } from '../type';

// const initState={
//     todoList:[
//         {id:1, title:'sách hay', date:'2021-03-03', complated:false},
//         {id:2, title:'sách hay lắm', date:'2021-03-03',complated:false},
//         {id:3, title:'sách hay vừa', date:'2021-03-03',complated:false}
//     ]
// }
// const rootReducer = (state = initState,action) =>{
//     console.log({state,action});
//     switch(action.type){
//         case  'todoList/Addtodo':
//             return{
//                 ...state,
//                 todoList:[...state.todoList,action.payload]
//             }
//             default:
//                 return state;
//     }
// }
// export default rootReducer;