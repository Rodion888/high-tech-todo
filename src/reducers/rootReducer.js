const defaultState = {
  todos: [],
  filters: {
    all: true,
    active: false,
    completed: false,
  },
}

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload.todo],
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload.id),
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      }
    case 'CLEAR_COMPLETED':
      return { ...state, todos: state.todos.filter(t => !t.completed) }
    case 'TOGGLE_ALL_TODOS':
      const activeTodosCount = state.todos.filter(t => !t.completed).length
      if (activeTodosCount !== 0) {
        return {
          ...state,
          todos: state.todos.map(todo => ({ ...todo, completed: true })),
        }
      } else {
        return {
          ...state,
          todos: state.todos.map(todo => ({ ...todo, completed: false })),
        }
      }
    case 'CHANGE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
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
