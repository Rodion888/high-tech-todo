const Types = {
    ADD_TODO: "ADD_TODO",
    DELETE_TODO: "DELETE_TODO",
    TOGGLE_TODO: "TOGGLE_TODO",
    CLEAR_COMPLETED: "CLEAR_COMPLETED",
    TOGGLE_ALL_TODOS: "TOGGLE_ALL_TODOS",
    CHANGE_TODO: "CHANGE_TODO"
};

export const addTodo = todo => ({
    type: Types.ADD_TODO,
    payload: {
        todo
    }
});

export const deleteTodo = id => ({
    type: Types.DELETE_TODO,
    payload: {
        id
    }
});

export const toggleTodo = id => ({
    type: Types.TOGGLE_TODO,
    payload: {
        id
    }
});

export const clearCompleted = () => ({
    type: Types.CLEAR_COMPLETED
});

export const toggleAllTodos = () => ({
    type: Types.TOGGLE_ALL_TODOS
});

export const changeTodo = changedTodo => ({
    type: Types.CHANGE_TODO,
    payload: {
        changedTodo
    }
});
