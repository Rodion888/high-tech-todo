import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleAllTodos } from './actions/todoActions'
import Header from './components/Header'
import VisibleTodoList from './components/VisibleTodoList'
import Footer from './components/Footer'

// import {
//   readTodosFromLocalStorage,
//   updateTodosInLocalStorage,
// } from './utils/local-storage';

const Main = props => {
  const { todos, toggleAllTodos } = props
  const activeTodosCount = todos.filter(t => !t.completed).length

  return (
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
  )
}

export default connect(
  state => ({
    todos: state.todos,
  }),
  dispatch => bindActionCreators({ toggleAllTodos }, dispatch)
)(Main)
