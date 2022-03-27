import { useEffect } from "react";
import { useTodo } from "../../hooks/useTodo";
import { Details } from "./Details";

export const List = () => {
    const { todos } = useTodo();

    return(
    <>
        {
            /** Load all tasks if there are any */
            todos.length > 0 && 
            todos.map(todo => 
                <div key={todo.id} className="todo">
                    <Details {...todo} />
                </div>)
        }
        {
            /** Show an empty message */
            !todos.length && <h2 style={{textAlign: "center"}}>You don't have any tasks!</h2>
        }
    </>
    );
};