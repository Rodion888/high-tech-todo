import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FiltersComponent from './FiltersComponent'
import { clearCompleted } from '../../../actions/todoActions'
import { Todos } from '../../../types'

interface Props {
  display: boolean
  clearCompleted: any
  activeTodosCount: number
  todos: Todos
}

const ClearCompletedButton: React.FC<any> = ({
  display,
  clearCompleted,
}: Props) => {
  if (!display) return null

  return (
    <button className="clear-completed" onClick={() => clearCompleted()}>
      Clear completed
    </button>
  )
}

const Footer: React.FC<any> = (props: Props) => {
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
      <FiltersComponent />
      <ClearCompletedButton
        display={completedTodosCount}
        clearCompleted={clearCompleted}
      />
    </footer>
  )
}

export default connect(
  (state: any) => ({
    todos: state.todos,
  }),
  dispatch => bindActionCreators({ clearCompleted }, dispatch)
)(Footer)
