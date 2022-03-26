import { Grid, Typography } from "@mui/material";
import { TodoContextProvider } from "../context/todo/todoContextProvider";
import { Add } from "./Todo/Add";
import { List } from "./Todo/List";

export const Todo = () => {
    return (
        <>
            <Add/>
            <List />
        </>
    );
};