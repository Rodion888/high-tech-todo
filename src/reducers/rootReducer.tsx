import { Todo } from '../types'

const defaultState = {
  todos: [],
  filters: {
    all: true,
    active: false,
    completed: false,
  },
  userId: '',
}

const rootReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case 'PUT_TODOS':
      return {
        ...state,
        todos: action.payload.todos,
      }
    case 'ADD_USER_ID':
      return {
        ...state,
        userId: action.payload.userId,
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((t: Todo) => t.id !== action.payload.id),
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      }
    case 'CLEAR_COMPLETED':
      return { ...state, todos: state.todos.filter((t: Todo) => !t.completed) }
    case 'TOGGLE_ALL_TODOS':
      const activeTodosCount = state.todos.filter((t: Todo) => !t.completed)
        .length
      if (activeTodosCount !== 0) {
        return {
          ...state,
          todos: state.todos.map((todo: Todo) => ({
            ...todo,
            completed: true,
          })),
        }
      } else {
        return {
          ...state,
          todos: state.todos.map((todo: Todo) => ({
            ...todo,
            completed: false,
          })),
        }
      }
    case 'CHANGE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo: Todo) =>
          todo.id !== action.payload.changedTodo.id
            ? todo
            : action.payload.changedTodo
        ),
      }
    case 'FILTER_TASKS':
      return {
        ...state,
        filters: {
          all: false,
          active: false,
          completed: false,
          [action.payload.filter]: true,
        },
      }
    default:
      return state
  }
}

export default rootReducer