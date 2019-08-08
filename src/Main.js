import React from 'react';
import { connect } from 'react-redux';

import {
  addTodo, deleteTodo, toggleTodo, clearCompleted, toggleAllTodos, changeTodo
} from './actions';
import { getNewId } from './utils/utils';
import Header from './components/Header';
import VisibleTodoList from './components/VisibleTodoList';
import Footer from './components/Footer';

import './index.css';

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

  addTodo = text => {
    const { todos, addTodo } = this.props;
    const updatedTodos = {
      id: getNewId(todos),
      text,
      completed: false,
    };
    addTodo(updatedTodos);
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
    const { filters, editing, editingId } = this.state;
    const {
      todos, deleteTodo, toggleTodo, clearCompleted, toggleAllTodos, changeTodo
    } = this.props;
    const activeTodosCount = this.activeTodosCount();
    const todosCount = todos.length;
    const completedTodosCount = todosCount - activeTodosCount;
    return (
      <section className="todoapp">
        <Header addTodo={this.addTodo} />
        <section className="main">
          {todos.length ? (
            <input
              className="toggle-all"
              type="checkbox"
              onClick={() => toggleAllTodos()}
              checked={!activeTodosCount}
              onChange={() => { }}
            />
          ) : null}
          <VisibleTodoList
            todos={todos}
            filters={filters}
            editing={editing}
            editingId={editingId}
            handleToggleTodo={todoId => toggleTodo(todoId)}
            handleRemove={todoId => deleteTodo(todoId)}
            handleEditTodoFinished={changedTodo => changeTodo(changedTodo)}
            handleEditTodoOnDoubleClick={this.handleEditTodoOnDoubleClick}
          />
        </section>
        <Footer
          display={!!todos.length}
          activeTodosCount={activeTodosCount}
          completedTodosCount={completedTodosCount}
          filters={this.state.filters}
          handleFilters={this.handleFilters}
          handleClearCompleted={() => clearCompleted()}
        />
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  toggleTodo: id => dispatch(toggleTodo(id)),
  clearCompleted: () => dispatch(clearCompleted()),
  toggleAllTodos: () => dispatch(toggleAllTodos()),
  changeTodo: changedTodo => dispatch(changeTodo(changedTodo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
