import findKey from 'lodash/findKey'
import React from 'react'
import Todo from './Todo'

const VisibleTodoList = props => {
  const {
    todos,
    filters,
    handleEditTodoOnChange,
    handleEditTodoOnDoubleClick,
    handleBlur,
    handleEditTodoKeyPress,
  } = props

  const filter = findKey(filters, f => f)

  return (
    <ul className="todo-list">
      {todos.map((todo, i) => {
        if (filter === 'active' && todo.completed) return false
        if (filter === 'completed' && !todo.completed) return false

        return (
          <Todo
            key={i}
            todo={todo}
            handleEditTodoOnChange={handleEditTodoOnChange}
            handleEditTodoOnDoubleClick={handleEditTodoOnDoubleClick}
            labelText={todo.text}
            handleBlur={handleBlur}
            handleEditTodoKeyPress={handleEditTodoKeyPress}
          />
        )
      })}
    </ul>
  )
}

export default VisibleTodoList
