import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoContext } from "../context/todo/todoContext";
import { ITodo } from "../models/ITodo";
import * as ActionCreators from "../redux/actions/todo/TodoActionCreators";
import { RootState } from "../redux/store/RootState";

export const useTodo = () => {
    //React Context
    const context = useContext(TodoContext);
    const todos = context.todos;
    
    //React Redux
    // const todos = useSelector<RootState, ITodo[]>(state => state.todo.todos);
    // const dispatch = useDispatch();

    const addTodo = (text: string) => {
        // dispatch(ActionCreators.AddTodoAction(text));
        context.addTodo!(text);
    };

    const updateTodo = (id: number, text: string) => {
        // dispatch(ActionCreators.UpdateTodoAction(id, text));
        context.updateTodo!(id, text);
    };

    const deleteTodo = (id: number) => {
        // dispatch(ActionCreators.DeleteTodoAction(id));
        context.deleteTodo!(id);
    };

    const toggleCompleted = (id: number) => {
        // dispatch(ActionCreators.ToggleCompletedAction(id));
        context.toggleCompleted!(id);
    };

    return {
        todos: todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleCompleted
    };
};