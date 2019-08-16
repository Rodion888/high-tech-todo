import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import get from 'lodash/get'

import { changeTodo } from '../../../actions/todoActions'

const EditInput = props => {
  const [value, setValue] = useState(get(props, 'todo.text', ''))

  const onBlur = () => {
    const { todo, changeTodo, resetLiClassName } = props
    changeTodo({
      ...todo,
      text: value,
    })
    resetLiClassName()
  }

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onBlur()
    }
  }

  return (
    <input
      className="edit"
      ref={input => input && input.focus()}
      value={value}
      onChange={e => setValue(e.target.value)}
      onBlur={onBlur}
      onKeyPress={onKeyPress}
    />
  )
}

export default connect(
  null,
  dispatch => bindActionCreators({ changeTodo }, dispatch)
)(EditInput)
