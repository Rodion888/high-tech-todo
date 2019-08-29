import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addTodoToDB } from '../../../api/index'
import { getNewId } from '../../../utils/utils'
import { addTodo } from '../../../actions/todoActions'

const Header = props => {
  const [value, setValue] = useState('')

  const handleKeyPress = e => {
    const { todos, addTodo, userId } = props
    if (e.key === 'Enter' && value) {
      const newTodo = {
        id: getNewId(todos),
        text: value,
        completed: false,
      }

      addTodoToDB(newTodo, userId).then(() => {
        addTodo(newTodo)
        setValue('')
      })
    }
  }

  return (
    <header>
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={e => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
        value={value}
      />
    </header>
  )
}

export default connect(
  state => ({
    todos: state.todos,
    userId: state.userId,
  }),
  dispatch => bindActionCreators({ addTodo }, dispatch)
)(Header)
