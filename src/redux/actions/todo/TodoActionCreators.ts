import { ITodo } from "../../../models/ITodo";
import { AddTodo, ADD_TODO, DeleteTodo, DELETE_TODO, ToggleCompleted, TOGGLE_COMPLETED, UpdateTodo, UPDATE_TODO } from "./TodoActionTypes";

export const AddTodoAction = (text: string) : AddTodo => {
    return {
        type: "ADD_TODO",
        payload: text
    }
};

export const UpdateTodoAction = (todo: ITodo) : UpdateTodo => {
    return {
        type: UPDATE_TODO,
        payload: todo
    }
};

export const DeleteTodoAction = (id: number) : DeleteTodo => {
    return {
        type: DELETE_TODO,
        payload: id
    }
};

export const ToggleCompletedAction = (id: number) : ToggleCompleted => {
    return {
        type: TOGGLE_COMPLETED,
        payload: id
    }
};