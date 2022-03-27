import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useTodo } from "../../hooks/useTodo";
import { Details } from "./Details";

export const List = () => {
    const { todos, loading, getTodos } = useTodo()

    useEffect(() => {
        if(getTodos) getTodos();
    }, []);

    return(
    <>
        {
            /** Load all tasks if there are any */
            todos.length > 0 && 
            todos.map(todo => 
                <Box key={todo.id} style={{width: 250, margin: 10}}>
                    <Details {...todo} />
                </Box>)
        }
        {
            /** Show an empty message */
            !loading && !todos.length && 
            <h2 style={{textAlign: "center"}}>You don't have any tasks!</h2>
        }
    </>
    );
};