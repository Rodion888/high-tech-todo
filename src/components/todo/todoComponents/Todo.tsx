import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { deleteTodo } from '../../../actions/todoActions'
import ToggleTodo from './ToggleTodo'
import EditInput from './EditInput'
import { Todo } from '../../../types'

interface Props {
  todo: Todo
  deleteTodo: any
  completed: boolean
}

const TodoComponent: React.FC<any> = (props: Props) => {
  const {
    todo,
    deleteTodo,
    todo: { completed },
  } = props

  const [className, setClassName] = useState(getLiClassName({ completed }))

  useEffect(() => {
    setClassName(getLiClassName({ completed }))
  }, [completed])

  const handleDoubleClick = () => {
    setClassName(getLiClassName({ completed, editing: true }))
  }

  const resetLiClassName = () => {
    setClassName(getLiClassName({ completed }))
  }

  return (
    <li className={className}>
      <div className="view">
        <ToggleTodo todo={todo} />
        <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
        <button className="destroy" onClick={() => deleteTodo(todo.id)} />
      </div>
      <EditInput todo={todo} resetLiClassName={resetLiClassName} />
    </li>
  )
}

const getLiClassName = ({ completed, editing }: any) => {
  return classNames({
    completed,
    editing,
  })
}

export default connect(
  null,
  dispatch => bindActionCreators({ deleteTodo }, dispatch)
)(TodoComponent)
