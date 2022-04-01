import { useEffect, useState } from "react";
import { useTodo } from "../../hooks/useTodo";
import { ITodo } from "../../models/ITodo";
import { Details } from "./Details";

export const List = () => {
    const { todos, filter } = useTodo();
    const [currentTodos, setCurrentTodos] = useState<ITodo[]>(todos);
    
    useEffect(() => {
        switch(filter) {
            case "COMPLETED":
                setCurrentTodos([...todos.filter(todo => todo.completed)]);
                break;
            case "PENDING":
                setCurrentTodos([...todos.filter(todo => !todo.completed)]);
                break;
            default:
                setCurrentTodos(todos);
        }

    }, [todos, filter]);

    return(
    <>
        {
            /** Load all tasks if there are any */
            currentTodos.length > 0 && 
            currentTodos.map(todo => 
                <div key={todo.id} className="todo">
                    <Details {...todo} />
                </div>)
        }
        {
            /** Show an empty message */
            !currentTodos.length && <h2 style={{textAlign: "center"}}>You don't have any tasks!</h2>
        }
    </>
    );
};