import { useDispatch, useSelector } from "react-redux";
import { ITodo } from "../models/ITodo";
import * as ActionCreators from "../redux/actions/TodoActionCreators";
import { RootState } from "../redux/store/RootState";

export const useTodo = () => {
    const todos = useSelector<RootState, ITodo[]>(state => state.todo.todos);
    const dispatch = useDispatch();

    const addTodo = (text: string) => {
        dispatch(ActionCreators.AddTodoAction(text));
    }

    const updateTodo = (id: number, text: string) => {
        dispatch(ActionCreators.UpdateTodoAction(id, text));
    }

    const deleteTodo = (id: number) => {
        dispatch(ActionCreators.DeleteTodoAction(id));
    }

    const toggleCompleted = (id: number) => {
        dispatch(ActionCreators.ToggleCompletedAction(id));
    }

    return {
        todos: todos,
        // loading: todoContext.loading,
        // getTodos: todoContext.getTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleCompleted
    };
};