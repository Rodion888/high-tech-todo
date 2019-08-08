const defaultState = {
    todos: [
        { id: 1, text: 'hello', completed: false },
        { id: 2, text: 'snickers', completed: true }
    ]
};

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { todos: [...state.todos, action.payload.todo] };
        case 'DELETE_TODO':
            return { todos: state.todos.filter(t => t.id !== action.payload.id) };
        case 'TOGGLE_TODO':
            return {
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                )
            }
        case 'CLEAR_COMPLETED':
            return { todos: state.todos.filter(t => !t.completed) }
        case 'TOGGLE_ALL_TODOS':
            const activeTodosCount = state.todos.filter(t => !t.completed).length;
            if (activeTodosCount !== 0) {
                return { todos: state.todos.map(todo => ({ ...todo, completed: true })) }
            } else {
                return { todos: state.todos.map(todo => ({ ...todo, completed: false })) }
            }
        case 'CHANGE_TODO':
            return {
                todos: state.todos.map(
                    todo => (todo.id !== action.payload.changedTodo.id ? todo : action.payload.changedTodo)
                )
            }
        default:
            return state;
    }
};

export default rootReducer;