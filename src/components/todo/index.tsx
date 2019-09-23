import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import Button from '../Button/index'
import {
  toggleAllTodos,
  addUserId,
  fetchTodos,
  removeError,
} from '../../actions/todoActions'
import auth from '../Auth/index'
import Header from './todoComponents/Header'
import VisibleTodoList from './todoComponents/VisibleTodoList'
import Footer from './todoComponents/Footer'
import { Todos } from '../../types/index'

interface Props {
  todos: Todos
  toggleAllTodos: any
  history: any
  addUserId: any
  fetchTodos: any
  errors?: any
  removeError: any
}

const TodoMain: React.FC<Props> = props => {
  const {
    todos,
    toggleAllTodos,
    history,
    addUserId,
    fetchTodos,
    errors,
  } = props

  useEffect(() => {
    const userId = auth.getUserId()
    if (userId) {
      addUserId(userId)
      fetchTodos(userId)
    }
  }, [])

  const activeTodosCount = todos.filter(t => !t.completed).length

  return (
    <div>
      <section className="todoapp">
        <Header />
        <section className="main">
          {todos.length ? (
            <div>
              <input
                className="toggle-all"
                type="checkbox"
                checked={!activeTodosCount}
                onChange={() => {}}
              />
              <label onClick={() => toggleAllTodos()} htmlFor="toggle-all" />
            </div>
          ) : null}
          <VisibleTodoList />
        </section>
        <Footer activeTodosCount={activeTodosCount} />
      </section>
      {errors.length ? (
        <Div>
          <ErrorDiv>{errors[0]}</ErrorDiv>
          <div onClick={() => removeError()}>
            <Button history={history} text={'Ok'} />
          </div>
        </Div>
      ) : null}
      <div
        onClick={() => {
          auth.logout(() => {
            props.history.push('/')
          })
        }}>
        <Button history={history} text={'Logout'} />
      </div>
    </div>
  )
}

export default connect(
  (state: any) => ({
    todos: state.todos,
    errors: state.errors,
  }),
  dispatch =>
    bindActionCreators(
      { toggleAllTodos, addUserId, fetchTodos, removeError },
      dispatch
    )
)(TodoMain)

const ErrorDiv = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-size: medium;
  font-weight: 600;
  color: red;
`

const Div = styled.div`
  height: 86px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #4d4d4d;
`
