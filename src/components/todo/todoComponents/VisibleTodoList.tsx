import React from 'react'
import { connect } from 'react-redux'
import findKey from 'lodash/findKey'

import TodoComponent from './Todo'
import { Todos, Filters } from '../../../types'

interface Props {
  todos: Todos
  filters: Filters
}

const VisibleTodoList: React.FC<any> = (props: Props) => {
  const { todos, filters } = props

  const filter = findKey(filters, f => f)

  return (
    <ul className="todo-list">
      {todos.map((todo: any, i: number) => {
        if (filter === 'active' && todo.completed) return false
        if (filter === 'completed' && !todo.completed) return false

        return <TodoComponent key={i} todo={todo} />
      })}
    </ul>
  )
}

export default connect(
  (state: any) => ({
    todos: state.todos,
    filters: state.filters,
  }),
  null
)(VisibleTodoList)
