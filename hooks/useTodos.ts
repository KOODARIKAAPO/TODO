import { useReducer } from "react"
import type { TodosAction, TodosState } from "../types/Todo"
import type { Todo } from "../types/Todo"


const initialState: TodosState = {
  todos: []
}

const todosReducer = (state: TodosState, action: TodosAction): 
  TodosState => {
    switch (action.type) {
      case "add": {
        const text = action.payload.text.trim()
        if (!text) return state

        const newTodo: Todo = {
          id: Date.now(),     
          text,
          completed: 0
        }

        return { ...state, todos: [newTodo, ...state.todos] }
      }

      case "remove":
        return { ...state, todos: state.todos.filter(t => t.id !== action.payload.id) }

      case "toggle":
        return {
          ...state,
          todos: state.todos.map(t =>
            t.id === action.payload.id ? { ...t, completed: t.completed ? 0 : 1 } : t
          )
        }

      default:
        return state
    }
  }

export const useTodos = () => {
  const [state, dispatch] = useReducer(todosReducer, initialState)

  const handleAdd = (text: string) => {
    dispatch({ type: "add", payload: { text } })
  }

  const handleRemove = (id: number) => {
    dispatch({ type: "remove", payload: { id } })
  }

  const handleToggle = (id: number) => {
    dispatch({ type: "toggle", payload: { id } })
  }

  return {
    state,
    initialState,
    todosReducer,
    handleAdd,
    handleRemove,
    handleToggle
  }
}
