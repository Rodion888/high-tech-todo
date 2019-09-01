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

const TodoMain = props => {
  const {
    todos,
    toggleAllTodos,
    history,
    addUserId,
    fetchTodos,
    error,
    removeError,
  } = props

  useEffect(() => {
    const userId = auth.getUserId()
    if (userId) {
      addUserId(userId)
      fetchTodos(userId)
    }
  }, [])

  const activeTodosCount = todos.filter(t => !t.completed).length
  console.log('rerror', error)
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
      {error.length ? (
        <Div>
          <ErrorDiv>{error[0]}</ErrorDiv>
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
  state => ({
    todos: state.todos,
    error: state.error,
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
