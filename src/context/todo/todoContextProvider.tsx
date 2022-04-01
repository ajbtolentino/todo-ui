import axios from "axios";
import { useState } from "react";
import { ITodo } from "../../models/ITodo";
import { TodoContext } from "./todoContext";

export const TodoContextProvider: React.FC<{}> = (props) => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (text: string) => {
        const ids = todos.map(todo => todo.id);
        const maxId = ids.length ? Math.max(...ids) : 0;

        setTodos([{
            id: maxId + 1,
            text: text,
            completed: false
        },
        ...todos]);
    };

    const deleteTodo = (id: number) => {
       const updatedList = todos.filter(todo => todo.id !== id);

       setTodos([...updatedList]);
    };

    const updateTodo = (id: number, text: string) => {
        const updatedList = todos.map(todo => {
            if(todo.id !== id) return todo;

            return {
                ...todo,
                text: text
            };
        });

        setTodos([...updatedList]);
    };

    const toggleCompleted = (id: number) => {
        const updatedTasks = todos.map(task => {
            if(task.id !== id) return task;

            return {
                ...task,
                completed: !task.completed
            };
        });

        setTodos([...updatedTasks]);
    };
      
    return(
        <TodoContext.Provider
            value={{
                todos: todos,
                addTodo: addTodo,
                deleteTodo: deleteTodo,
                updateTodo: updateTodo,
                toggleCompleted: toggleCompleted
            }}>
                {props.children}
        </TodoContext.Provider>
    )
}