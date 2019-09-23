const Types = {
  ADD_USER_ID: 'ADD_USER_ID',
  FETCH_TODOS: 'FETCH_TODOS',
  PUT_TODOS: 'PUT_TODOS',
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  CLEAR_COMPLETED: 'CLEAR_COMPLETED',
  CHANGE_TODO: 'CHANGE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  TOGGLE_ALL_TODOS: 'TOGGLE_ALL_TODOS',
  FILTER_TASKS: 'FILTER_TASKS',
  TODOS_ERROR: 'TODOS_ERROR',
  REMOVE_ERROR: 'REMOVE_ERROR',
}

export const addUserId = userId => ({
  type: Types.ADD_USER_ID,
  payload: {
    userId,
  },
})

export const fetchTodos = userId => ({
  type: Types.FETCH_TODOS,
  payload: {
    userId,
  },
})

export const putTodos = todos => ({
  type: Types.PUT_TODOS,
  payload: {
    todos,
  },
})

export const addTodo = (todo, userId) => ({
  type: Types.ADD_TODO,
  payload: {
    todo,
  },
  userId,
})

export const deleteTodo = id => ({
  type: Types.DELETE_TODO,
  payload: {
    id,
  },
})

export const clearCompleted = () => ({
  type: Types.CLEAR_COMPLETED,
})

export const changeTodo = (changedTodo, id) => ({
  type: Types.CHANGE_TODO,
  payload: {
    changedTodo,
  },
  id,
})

export const toggleTodo = (id, todo) => ({
  type: Types.TOGGLE_TODO,
  payload: {
    id,
  },
  todo,
})

export const toggleAllTodos = () => ({
  type: Types.TOGGLE_ALL_TODOS,
})

export const handleFilters = filter => ({
  type: Types.FILTER_TASKS,
  payload: {
    filter,
  },
})

export const todosError = error => ({
  type: Types.TODOS_ERROR,
  payload: {
    error,
  },
})

export const removeError = () => ({
  type: Types.REMOVE_ERROR,
})