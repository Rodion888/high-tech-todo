import React from 'react'
import Filters from './Filters'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { clearCompleted } from '../../../actions/todoActions'

const ClearCompletedButton = ({ display, clearCompleted }) => {
  if (!display) return null

  return (
    <button className="clear-completed" onClick={() => clearCompleted()}>
      Clear completed
    </button>
  )
}

const Footer = props => {
  const { activeTodosCount, clearCompleted, todos } = props

  const todosCount = todos.length
  const completedTodosCount = todosCount - activeTodosCount
  const display = !!todos.length

  if (!display) return null

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodosCount}</strong>
        <span>{activeTodosCount === 1 ? ' item' : ' items'} left</span>
      </span>
      <Filters />
      <ClearCompletedButton
        display={completedTodosCount}
        clearCompleted={clearCompleted}
      />
    </footer>
  )
}

export default connect(
  state => ({
    todos: state.todos,
  }),
  dispatch => bindActionCreators({ clearCompleted }, dispatch)
)(Footer)
