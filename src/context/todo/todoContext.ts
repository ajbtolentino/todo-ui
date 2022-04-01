import React from "react";
import { ITodo } from "../../models/ITodo";

interface ITodoContext {
    todos: ITodo[];
    addTodo?: (text: string) => void;
    deleteTodo?: (id: number) => void;
    updateTodo?: (id: number, text: string) => void;
    toggleCompleted?: (id: number) => void;
};

export const TodoContext = React.createContext<ITodoContext>({
    todos: []
});