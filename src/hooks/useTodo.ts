import { useContext } from "react";
import { TodoContext } from "../context/todo/todoContext";

export const useTodo = () => {
    return useContext(TodoContext);
};