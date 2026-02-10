
export type Todo = {
    id: number
    text: string
    completed: number
  }
  
  export type TodosState = {
    todos: Todo[]
  }
  
  export type TodosAction =
    | { type: "add"; payload: { text: string } }
    | { type: "remove"; payload: { id: number } }
    | { type: "toggle"; payload: { id: number } }
  