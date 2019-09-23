import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleTodo } from '../../../actions/todoActions'
import { Todo } from '../../../types'

interface Props {
  todo: Todo
  toggleTodo: any
}

const ToggleTodo: React.FC<any> = (props: Props) => {
  const { todo, toggleTodo } = props
  const todoId = todo.id

  return (
    <input
      className="toggle"
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodo(todoId, todo)}
    />
  )
}

export default connect(
  null,
  dispatch => bindActionCreators({ toggleTodo }, dispatch)
)(ToggleTodo)
