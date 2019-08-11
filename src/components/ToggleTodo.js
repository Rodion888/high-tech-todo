import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleTodo } from '../actions/todoActions'

const ToggleTodo = props => {
  const { todo, toggleTodo } = props
  const todoId = todo.id
  return (
    <input
      className="toggle"
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodo(todoId)}
    />
  )
}

export default connect(
  null,
  dispatch => bindActionCreators({ toggleTodo }, dispatch)
)(ToggleTodo)
