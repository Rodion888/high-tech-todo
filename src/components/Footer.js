import React from 'react'
import Filters from './Filters'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { clearCompleted } from '../actions/todoActions'

const ClearCompletedButton = ({ display, clearCompleted }) => {
  if (!display) return null

  return (
    <button className="clear-completed" onClick={() => clearCompleted()}>
      Clear completed
    </button>
  )
}

const Footer = props => {
  const {
    display,
    activeTodosCount,
    completedTodosCount,
    filters,
    handleFilters,
    clearCompleted,
  } = props

  if (!display) return null

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodosCount}</strong>
        <span>{activeTodosCount === 1 ? ' item' : ' items'} left</span>
      </span>
      <Filters filters={filters} handleFilters={handleFilters} />
      <ClearCompletedButton
        display={completedTodosCount}
        clearCompleted={clearCompleted}
      />
    </footer>
  )
}

export default connect(
  null,
  dispatch => bindActionCreators({ clearCompleted }, dispatch)
)(Footer)
