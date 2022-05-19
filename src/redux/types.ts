

export interface Todo {
    id: number;
    title: string;
    date:string;
    onEdit?:false;
    completed:boolean;
  }
  
export interface Store {
    todos: Todo[];
    newTodo: string;
    date:string;
    completed:boolean;
  }
  