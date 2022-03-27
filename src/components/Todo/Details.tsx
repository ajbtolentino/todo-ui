import { Card, CardActions, CardContent, Typography, TextField, ClickAwayListener, IconButton, Grow, Fade, Collapse, InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTodo } from "../../hooks/useTodo";
import { ITodo } from "../../models/ITodo";
import DeleteIcon from '@mui/icons-material/Delete';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';

export const Details = (props: ITodo) => {
    const { getTodos, deleteTodo, updateTodo } = useTodo();
    
    /** Todo states */
    const [text, setText] = useState<string>(props.text);
    const [completed, setCompleted] = useState<boolean>(props.completed);

    /** UI states */
    const [editMode, setEditMode] = useState<boolean>(false);
    const [showOtherActions, setShowOtherActions] = useState<boolean>(false);

    useEffect(() => {
        updateTodo!(props.id, text, completed, "");
    }, [completed]);

    /** Update state of text based on user input */
    const onChangeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    /** Update todo when user clicks away from input */
    const onClickAwayHandler = (e: MouseEvent | TouchEvent) => {
        updateTodo!(props.id, text, completed, "");
        setEditMode(false);
    };

    /** Toggle edit mode when user clicks on the component */
    const onToggleEdit = (e: React.MouseEvent<HTMLSpanElement>) => {
        setEditMode(!editMode);
    }

    /** Toggle completed state when user clicks on the complete/pending button */
    const onToggleComplete = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCompleted(!completed);
    }

    /** Delete todo when user clicks on the delete button */
    const onDeleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        deleteTodo!(props.id).then(() => getTodos!());
    }

    /** Show or hide the card action buttons */
    const handleMouseEvent = (action: "showButtons" | "hideButtons") => 
                             (e: React.MouseEvent<HTMLDivElement>) => {
        setShowOtherActions(action === "showButtons");
    };

    return (
        <Grow in={true} timeout={500}>
            <Card style={{backgroundColor: completed ? "mediumaquamarine" : "khaki"}}
                onMouseOver={handleMouseEvent("showButtons")} 
                onMouseLeave={handleMouseEvent("hideButtons")}>
                <CardContent>
                {
                    /** Show label if state is readonly */
                    !editMode && 
                    <Typography style={{overflowWrap: "anywhere", whiteSpace: "pre-line"}} 
                                onClick={onToggleEdit}> 
                        {props.text}
                    </Typography>
                }
                {
                    /** Show text field if state is editable */
                    editMode &&
                    <ClickAwayListener onClickAway={onClickAwayHandler}>
                        <InputBase autoFocus 
                                multiline 
                                fullWidth
                                style={{
                                    paddingBottom: 0
                                }}
                                autoComplete="off"
                                value={text} 
                                size={"small"}
                                placeholder={"Enter task"} 
                                onChange={onChangeTextHandler}/>
                    </ClickAwayListener>
                }
                </CardContent>
                <Fade in={showOtherActions}>
                    <CardActions style={{justifyContent: "space-between"}}>
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