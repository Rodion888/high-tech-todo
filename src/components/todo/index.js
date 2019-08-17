import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppLogout from '../LogoutButton/index'
import { toggleAllTodos } from '../../actions/todoActions'
import Header from './todoComponents/Header'
import VisibleTodoList from './todoComponents/VisibleTodoList'
import Footer from './todoComponents/Footer'

// import {
//   readTodosFromLocalStorage,
//   updateTodosInLocalStorage,
// } from './utils/local-storage';

const TodoMain = props => {
  const { todos, toggleAllTodos, history } = props
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
  dispatch => bindActionCreators({ toggleAllTodos }, dispatch)
)(TodoMain)
