import { Todo, UserId, Todos, Filters } from '../types'

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

export const addUserId = (userId: UserId) => ({
  type: Types.ADD_USER_ID,
  payload: {
    userId,
  },
})

export const fetchTodos = (userId: UserId) => ({
  type: Types.FETCH_TODOS,
  payload: {
    userId,
  },
})

export const putTodos = (todos: Todos) => ({
  type: Types.PUT_TODOS,
  payload: {
    todos,
  },
})

export const addTodo = (todo: Todo, userId: UserId) => ({
  type: Types.ADD_TODO,
  payload: {
    todo,
  },
  userId,
})

export const deleteTodo = (id: Todo) => ({
  type: Types.DELETE_TODO,
  payload: {
    id,
  },
})

export const clearCompleted = () => ({
  type: Types.CLEAR_COMPLETED,
})

export const changeTodo = (changedTodo: Todo, id: Todo) => ({
  type: Types.CHANGE_TODO,
  payload: {
    changedTodo,
  },
  id,
})

export const toggleTodo = (id: Todo, todo: Todo) => ({
  type: Types.TOGGLE_TODO,
  payload: {
    id,
  },
  todo,
})

export const toggleAllTodos = () => ({
  type: Types.TOGGLE_ALL_TODOS,
})

export const handleFilters = (filter: Filters) => ({
  type: Types.FILTER_TASKS,
  payload: {
    filter,
  },
})

export const todosError = (error: string) => ({
  type: Types.TODOS_ERROR,
  payload: {
    error,
  },
})

export const removeError = () => ({
  type: Types.REMOVE_ERROR,
})
