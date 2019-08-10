import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleAllTodos } from './actions/todoActions'
import Header from './components/Header'
import VisibleTodoList from './components/VisibleTodoList'
import Footer from './components/Footer'

// import {
//   readTodosFromLocalStorage,
//   updateTodosInLocalStorage,
// } from './utils/local-storage';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filters: {
        all: true,
        active: false,
        completed: false,
      },
    }
  }

  handleFilters = activatedFilterName => {
    this.setState({
      filters: {
        all: false,
        active: false,
        completed: false,
        [activatedFilterName]: true,
      },
    })
  }

  activeTodosCount = () => {
    const { todos } = this.props
    return todos.filter(t => !t.completed).length
  }

  componentDidMount() {
    const filter = window.location.hash.slice(2)
    if (filter) this.handleFilters(filter)
  }

  render() {
    const { filters } = this.state
    const { todos, toggleAllTodos } = this.props
    const activeTodosCount = this.activeTodosCount()
    const todosCount = todos.length
    const completedTodosCount = todosCount - activeTodosCount
    return (
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
          <VisibleTodoList
            todos={todos}
            filters={filters}
            handleEditTodoOnDoubleClick={this.handleEditTodoOnDoubleClick}
          />
        </section>
        <Footer
          display={!!todos.length}
          activeTodosCount={activeTodosCount}
          completedTodosCount={completedTodosCount}
          filters={this.state.filters}
          handleFilters={this.handleFilters}
        />
      </section>
    )
  }
}

export default connect(
  state => ({
    todos: state.todos,
  }),
  dispatch => bindActionCreators({ toggleAllTodos }, dispatch)
)(Main)
