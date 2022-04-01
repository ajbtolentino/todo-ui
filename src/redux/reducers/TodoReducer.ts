import { ITodo } from "../../models/ITodo"
import { ADD_TODO, AddTodo, DeleteTodo, DELETE_TODO, UPDATE_TODO, UpdateTodo, TOGGLE_COMPLETED, ToggleCompleted } from "../actions/todo/TodoActionTypes";

export interface TodoState {
    todos: ITodo[];
};

const initialState: TodoState = {
    todos: []
};

export const TodoReducer = (state: TodoState = initialState, 
                            action: AddTodo | DeleteTodo | UpdateTodo | ToggleCompleted) => {
    
    if(action.type === "ADD_TODO") {
        const ids = state.todos.map(todo => todo.id);
        const maxId = ids.length ? Math.max(...ids) : 0;

        return {
            ...state,
            todos: [{
                id: maxId + 1,
                completed: false,
                text: action.payload
            }, ...state.todos]
        }
    }

    if(action.type === UPDATE_TODO) {
        const updatedTodos = state.todos.map(todo => {
            if(todo.id !== action.payload.id) return todo;

            return {
                ...todo,
                text: action.payload.text
            };
        })

        return {
            ...state,
            todos: [...updatedTodos]
        };
    }

    if(action.type === TOGGLE_COMPLETED) {
        const toggleTodos = state.todos.map(todo => {
            if(todo.id !== action.payload) return todo;

            return {
                ...todo,
                completed: !todo.completed
            };
        })

        return {
            ...state,
            todos: [...toggleTodos]
        };
    }

    if(action.type === "DELETE_TODO") {
        const filteredList = state.todos.filter(todo => todo.id !== action.payload);

        return {
            ...state,
            todos: [...filteredList]
        };
    }

    return state;
};