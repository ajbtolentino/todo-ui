import { CircularProgress } from "@mui/material";
import { useTodo } from "../hooks/useTodo";
import { Dashboard } from "./Dashboard";
import { Add } from "./Todo/Add";
import { List } from "./Todo/List";

export const Todo = () => {
    return (
    <>
        <div className="dashboard container">
            <div className="wrapper">
                <Dashboard />
            </div>
        </div>
        <div className="add container">
            <div className="wrapper">
                <Add/>
            </div>
        </div>
        <div className="list container">
            <List />
        </div>
    </>);
};