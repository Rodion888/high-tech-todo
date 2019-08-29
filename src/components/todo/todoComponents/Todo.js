import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { deleteTodoDB } from '../../../api/index'
import { deleteTodo } from '../../../actions/todoActions'
import ToggleTodo from './ToggleTodo'
import EditInput from './EditInput'

const Todo = props => {
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

  const removeTodo = id => {
    deleteTodoDB(id).then(() => deleteTodo(id))
  }

  return (
    <li className={className}>
      <div className="view">
        <ToggleTodo todo={todo} />
        <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
        <button className="destroy" onClick={() => removeTodo(todo.id)} />
      </div>
      <EditInput todo={todo} resetLiClassName={resetLiClassName} />
    </li>
  )
}

const getLiClassName = ({ completed, editing }) => {
  return classNames({
    completed,
    editing,
  })
}

export default connect(
  null,
  dispatch => bindActionCreators({ deleteTodo }, dispatch)
)(Todo)
