import { Action } from "redux";
import { ITodo } from "../../models/ITodo";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export interface AddTodo extends Action {
    type: typeof ADD_TODO;
    payload: string;
};

export interface DeleteTodo extends Action {
    type: typeof DELETE_TODO;
    payload: number;
};

export interface ToggleCompleted extends Action {
    type: typeof TOGGLE_COMPLETED;
    payload: number;
}

export type TodoActionTypes = AddTodo | DeleteTodo | ToggleCompleted;