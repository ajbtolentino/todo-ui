import * as ActionTypes from "./TodoActionTypes";

export const AddTodoAction = (text: string) : ActionTypes.AddTodo => {
    return {
        type: ActionTypes.ADD_TODO,
        payload: text
    }
};

export const DeleteTodoAction = (id: number) : ActionTypes.DeleteTodo => {
    return {
        type: ActionTypes.DELETE_TODO,
        payload: id
    }
};

export const ToggleCompletedAction = (id: number) : ActionTypes.ToggleCompleted => {
    return {
        type: ActionTypes.TOGGLE_COMPLETED,
        payload: id
    }
};