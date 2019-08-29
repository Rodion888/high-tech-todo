import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleTodoDB } from '../../../api/index'
import { toggleTodo } from '../../../actions/todoActions'

const ToggleTodo = props => {
  const { todo, toggleTodo } = props
  const todoId = todo.id

  const toggle = id => {
    toggleTodoDB(id, todo).then(() => toggleTodo(id))
  }

  return (
    <input
      className="toggle"
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggle(todoId)}
    />
  )
}

export default connect(
  null,
  dispatch => bindActionCreators({ toggleTodo }, dispatch)
)(ToggleTodo)
