import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getNewId } from '../../../utils/utils'
import { addTodo } from '../../../actions/todoActions'
import { Todos, UserId } from '../../../types'

interface Props {
  todos: Todos
  addTodo: any
  userId: UserId
}

const Header: React.FC<any> = (props: Props) => {
  const [value, setValue] = useState('')

  const handleKeyPress = (e: any) => {
    const { todos, addTodo, userId } = props
    if (e.key === 'Enter' && value) {
      const newTodo = {
        id: getNewId(todos),
        text: value,
        completed: false,
      }
      addTodo(newTodo, userId)
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
  (state: any) => ({
    todos: state.todos,
    userId: state.userId,
  }),
  dispatch => bindActionCreators({ addTodo }, dispatch)
)(Header)
