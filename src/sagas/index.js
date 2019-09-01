import { all, takeEvery, call, put } from 'redux-saga/effects'

import { putTodos } from '../actions/todoActions'
import {
  getTodosDB,
  addTodoToDB,
  deleteTodoDB,
  clearTodosDB,
  changeTodoDB,
  toggleTodoDB,
  toggleAllTodosDB,
} from '../api/index'

export default function* rootSaga() {
  yield all([
    fetchTodos(),
    addTodo(),
    deleteTodo(),
    clearCompleted(),
    changeTodo(),
    toggleTodo(),
    toggleAllTodos(),
  ])
}

function* fetchTodos() {
  yield takeEvery('FETCH_TODOS', fetchTodosAsync)
}

function* fetchTodosAsync(action) {
  try {
    const userId = action.payload.userId
    const todos = yield call(() => getTodosDB(userId))
    yield put(putTodos(todos))
  } catch (e) {
    console.log(e)
  }
}

function* addTodo() {
  yield takeEvery('ADD_TODO', addTodoSaga)
}

function* addTodoSaga(action) {
  try {
    const { userId } = action
    const todo = action.payload.todo
    yield call(() => addTodoToDB(todo, userId))
  } catch (e) {
    console.log(e)
  }
}

function* deleteTodo() {
  yield takeEvery('DELETE_TODO', deleteTodoSaga)
}

function* deleteTodoSaga(action) {
  try {
    const { id } = action.payload
    yield call(() => deleteTodoDB(id))
  } catch (e) {
    console.log(e)
  }
}

function* clearCompleted() {
  yield takeEvery('CLEAR_COMPLETED', clearCompletedSaga)
}

function* clearCompletedSaga() {
  try {
    yield call(() => clearTodosDB())
  } catch (e) {
    console.log(e)
  }
}

function* changeTodo() {
  yield takeEvery('CHANGE_TODO', changeTodoSaga)
}

function* changeTodoSaga(action) {
  try {
    const text = action.payload.changedTodo.text
    const { id } = action
    yield call(() => changeTodoDB(text, id))
  } catch (e) {
    console.log(e)
  }
}

function* toggleTodo() {
  yield takeEvery('TOGGLE_TODO', toggleTodoSaga)
}

function* toggleTodoSaga(action) {
  try {
    const id = action.payload.id
    const { todo } = action
    yield call(() => toggleTodoDB(id, todo))
  } catch (e) {
    console.log(e)
  }
}

function* toggleAllTodos() {
  yield takeEvery('TOGGLE_ALL_TODOS', toggleAllTodosSaga)
}

function* toggleAllTodosSaga() {
  try {
    yield call(() => toggleAllTodosDB())
  } catch (e) {
    console.log(e)
  }
}
