import React, { useEffect, useState } from "react";
import { Card, 
        CardActions, 
        CardContent, 
        Typography,
        ClickAwayListener, 
        IconButton, 
        Grow, 
        Fade, 
        InputBase } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import { useTodo } from "../../hooks/useTodo";
import { ITodo } from "../../models/ITodo";

export const Details = (props: ITodo) => {
    const { deleteTodo, updateTodo, toggleCompleted } = useTodo();
    
    /** Todo states */
    const [text, setText] = useState<string>(props.text);
    const [completed, setCompleted] = useState<boolean>(props.completed);

    /** UI states */
    const [showOtherActions, setShowOtherActions] = useState<boolean>(false);

    /** Make sure that the component's states are up-to-date */
    useEffect(() => {
        setText(props.text);
        setCompleted(props.completed);
    }, [props.completed, props.text]);

    /** Show or hide the card action buttons */
    const handleMouseEvent = (action: "showButtons" | "hideButtons") => () => {
        setShowOtherActions(action === "showButtons");
    };

    /** Update todo when user clicks on the complete/pending button */
    const onToggleComplete = () => {
        toggleCompleted(props.id);
    };

    /** Delete todo when user clicks on the delete button */
    const onDeleteHandler = () => {
        deleteTodo(props.id);
    };

    return (
        <Grow in={true} timeout={500}>
            <Card className={completed ? "completed" : "pending"}
                onMouseOver={handleMouseEvent("showButtons")} 
                onMouseLeave={handleMouseEvent("hideButtons")}>
                <CardContent>
                    <Typography className="textLabel"> 
                        {text}
                    </Typography>
                </CardContent>
                <Fade in={showOtherActions}>
                    <CardActions className="actions">
                        <IconButton size="small" onClick={onToggleComplete} >
                            {completed ? <LibraryAddCheckIcon /> : <LibraryAddCheckOutlinedIcon />}
                        </IconButton>
                        <IconButton size="small" onClick={onDeleteHandler} >
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Fade>
            </Card>
        </Grow>
    );
};