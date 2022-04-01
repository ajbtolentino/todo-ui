import { ITodo } from "../../models/ITodo"
import * as ActionTypes from "../actions/todo/TodoActionTypes";

export interface TodoState {
    todos: ITodo[];
};

const initialState: TodoState = {
    todos: []
};

export const TodoReducer = (state: TodoState = initialState, action: ActionTypes.TodoActionTypes) => {
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
        case ActionTypes.UPDATE_TODO:
            const updatedList = state.todos.map((todo: ITodo) => {
                if(todo.id !== action.id) return todo;

                return {
                    ...todo,
                    text: action.text
                }
            });

            return {
                ...state,
                todos: [...updatedList]
            }
        case ActionTypes.DELETE_TODO:
            const filteredList = state.todos.filter(todo => todo.id !== action.payload);

            return {
                ...state,
                todos: [...filteredList]
            }
        case ActionTypes.TOGGLE_COMPLETED:
            const toggleList = state.todos.map(todo => {
                if(todo.id !== action.payload) return todo;

                return {
                    ...todo,
                    completed: !todo.completed
                }
            });

            return {
                ...state,
                todos: [...toggleList]
            }
        default:
                return state;
    }
}
