import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getTodosDB } from '../../api/index'
import AppLogout from '../LogoutButton/index'
import {
  toggleAllTodos,
  addUserId,
  todosFromFirestore,
} from '../../actions/todoActions'
import auth from '../Auth/index'
import Header from './todoComponents/Header'
import VisibleTodoList from './todoComponents/VisibleTodoList'
import Footer from './todoComponents/Footer'

const TodoMain = props => {
  const {
    todos,
    toggleAllTodos,
    history,
    addUserId,
    todosFromFirestore,
  } = props

  useEffect(() => {
    const userId = auth.getUserId()
    if (userId) {
      addUserId(userId)
    }
    getTodosDB(userId).then(todos => todosFromFirestore(todos))
  }, [])

  const activeTodosCount = todos.filter(t => !t.completed).length

  return (
    <div>
      <section className="todoapp">
        <Header />
        <section className="main">
          {todos.length ? (
            <div>
              <input
                className="toggle-all"
                type="checkbox"
                checked={!activeTodosCount}
                onChange={() => {}}
              />
              <label onClick={() => toggleAllTodos()} htmlFor="toggle-all" />
            </div>
          ) : null}
          <VisibleTodoList />
        </section>
        <Footer activeTodosCount={activeTodosCount} />
      </section>
      <AppLogout history={history} />
    </div>
  )
}

export default connect(
  state => ({
    todos: state.todos,
  }),
  dispatch =>
    bindActionCreators(
      { toggleAllTodos, addUserId, todosFromFirestore },
      dispatch
    )
)(TodoMain)

// 1) запросы к базе в файл api.js
// 2) запросы api должны быть в экшенах
