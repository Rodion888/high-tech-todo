import {
  getTodosDB,
  addTodoToDB,
  deleteTodoDB,
  toggleTodoDB,
  clearTodosDB,
  toggleAllTodosDB,
  changeTodoDB,
} from '../api/index'

const Types = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  CLEAR_COMPLETED: 'CLEAR_COMPLETED',
  TOGGLE_ALL_TODOS: 'TOGGLE_ALL_TODOS',
  CHANGE_TODO: 'CHANGE_TODO',
  FILTER_TASKS: 'FILTER_TASKS',
  ADD_USER_ID: 'ADD_USER_ID',
  TODOS_FETCH: 'TODOS_FETCH',
}

export const addTodo = (todo, userId) => async dispatch => {
  dispatch({
    type: Types.ADD_TODO,
    payload: {
      todo,
    },
  })
  addTodoToDB(todo, userId)
}

export const deleteTodo = id => async dispatch => {
  dispatch({
    type: Types.DELETE_TODO,
    payload: {
      id,
    },
  })
  deleteTodoDB(id)
}

export const toggleTodo = (id, todo) => async dispatch => {
  dispatch({
    type: Types.TOGGLE_TODO,
    payload: {
      id,
    },
  })
  toggleTodoDB(id, todo)
}

export const clearCompleted = () => async dispatch => {
  dispatch({
    type: Types.CLEAR_COMPLETED,
  })
  clearTodosDB()
}

export const toggleAllTodos = () => async dispatch => {
  dispatch({
    type: Types.TOGGLE_ALL_TODOS,
  })
  toggleAllTodosDB()
}

export const changeTodo = (changedTodo, id) => async dispatch => {
  dispatch({
    type: Types.CHANGE_TODO,
    payload: {
      changedTodo,
    },
  })
  changeTodoDB(changedTodo.text, id)
}

export const handleFilters = filter => ({
  type: Types.FILTER_TASKS,
  payload: {
    filter,
  },
})

export const addUserId = userId => ({
  type: Types.ADD_USER_ID,
  payload: {
    userId,
  },
})

export const getTodosFromFirestore = userId => async dispatch => {
  const todos = await getTodosDB(userId)
  dispatch({
    type: Types.TODOS_FETCH,
    payload: {
      todos,
    },
  })
}
