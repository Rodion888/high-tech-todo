import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppLogout from '../logoutButton/index'
import {
  toggleAllTodos,
  addUserId,
  fetchTodos,
} from '../../actions/todoActions'
import auth from '../Auth/index'
import Header from './todoComponents/Header'
import VisibleTodoList from './todoComponents/VisibleTodoList'
import Footer from './todoComponents/Footer'
import { Todos } from '../../types/index'

interface Props {
  todos: Todos
  toggleAllTodos: any
  history: any
  addUserId: any
  fetchTodos: any
}

const TodoMain: React.FC<Props> = props => {
  const { todos, toggleAllTodos, history, addUserId, fetchTodos } = props

  useEffect(() => {
    const userId = auth.getUserId()
    if (userId) {
      addUserId(userId)
      fetchTodos(userId)
    }
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
  (state: any) => ({
    todos: state.todos,
  }),
  dispatch =>
    bindActionCreators({ toggleAllTodos, addUserId, fetchTodos }, dispatch)
)(TodoMain)
