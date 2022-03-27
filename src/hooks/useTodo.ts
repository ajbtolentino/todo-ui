import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoContext } from "../context/todo/todoContext";
import { ITodo } from "../models/ITodo";
import * as ActionCreators from "../redux/actions/TodoActionCreators";
import { RootState } from "../redux/store/rootState";

export const useTodo = () => {
    // const todoContext = useContext(TodoContext);
    const todos = useSelector<RootState, ITodo[]>(state => state.todo.todos);
    const dispatch = useDispatch();

    const addTodo = (text: string) => {
        // if(todoContext.addTodo) todoContext.addTodo(text);
        dispatch(ActionCreators.AddTodoAction(text));
    }

    const updateTodo = (id: number, text: string, completed: boolean, category: string) => {
        // if(todoContext.updateTodo) todoContext.updateTodo(id, text, completed, category);
    }

    const deleteTodo = (id: number) => {
        // if(todoContext.deleteTodo) todoContext.deleteTodo(id);
        dispatch(ActionCreators.DeleteTodoAction(id));
    }

    const toggleCompleted = (id: number) => {
        // if(todoContext.toggleCompleted) todoContext.toggleCompleted(id);
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