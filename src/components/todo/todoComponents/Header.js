import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getNewId } from '../../../utils/utils'
import { addTodo } from '../../../actions/todoActions'

const Header = props => {
  const [value, setValue] = useState('')

  const handleKeyPress = e => {
    const { todos, addTodo } = props
    if (e.key === 'Enter' && value) {
      const newTodo = {
        id: getNewId(todos),
        text: value,
        completed: false,
      }
      addTodo(newTodo)
      setValue('')
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
  }),
  dispatch => bindActionCreators({ addTodo }, dispatch)
)(Header)
