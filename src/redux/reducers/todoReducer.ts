import { ITodo } from "../../models/ITodo"
import * as ActionTypes from "../actions/TodoActionTypes";

export interface TodoState {
    todos: ITodo[];
};

const initialState: TodoState = {
    todos: []
};

export const todoReducer = (state: TodoState = initialState, action: ActionTypes.TodoActionTypes) => {
    switch(action.type) {
        case ActionTypes.ADD_TODO:
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
        case ActionTypes.DELETE_TODO:
            const updatedTodos = state.todos.filter(todo => todo.id !== action.payload)

            return {
                ...state,
                todos: [...updatedTodos]
            };
        case ActionTypes.TOGGLE_COMPLETED:
            const updatedList = state.todos.map(todo => {
                if(todo.id !== action.payload) return todo;

                return {
                    ...todo,
                    completed: !todo.completed
                }
            });

            return {
                ...state,
                todos: [...updatedList]
            };
        default:
                return state;
    }
}