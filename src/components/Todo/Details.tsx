import { Card, CardActions, CardContent, Typography, TextField, ClickAwayListener, IconButton, Grow, Collapse } from "@mui/material";
import React, { useState } from "react";
import { useTodo } from "../../hooks/useTodo";
import { ITodo } from "../../models/ITodo";
import DeleteIcon from '@mui/icons-material/Delete';

export const Details = (props: ITodo) => {
    const { deleteTask, updateTask } = useTodo();
    
    const [text, setText] = useState<string>(props.text);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [showButtons, setShowButtons] = useState<boolean>(false);

    const handleTask = (action: "edit" | "update" | "delete") => 
                        (e: MouseEvent | 
                            TouchEvent |  
                            React.MouseEvent<HTMLSpanElement> |
                            React.MouseEvent<HTMLButtonElement> | 
                            React.ChangeEvent<HTMLInputElement>) => {
        switch(action) {
            case "edit":
                setIsEdit(true);
                setShowButtons(false);
                break;
            case "update":
                updateTask!(props.id, text);
                setIsEdit(false);
                break;
            case "delete":
                deleteTask!(props.id);
                break;
        }
    }

    const handleButtons = (action: "showButtons" | "hideButtons") => 
                            (e: React.MouseEvent<HTMLDivElement> |
                                React.MouseEvent<HTMLSpanElement>) => {
        switch(action) {
            case "showButtons":
                setShowButtons(true);
                break;
            case "hideButtons":
                setShowButtons(false);
                break;
        }
    }

    const onChangeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <Grow in={true} timeout={500}>
            <Card sx={{minWidth: 200, maxWidth: 250}} 
                onMouseEnter={handleButtons("showButtons")} 
                onMouseLeave={handleButtons("hideButtons")}>
                <CardContent>
                    {
                        !isEdit && 
                        <Typography style={{overflowWrap: "anywhere"}} 
                                    onClick={handleTask("edit")}> 
                            {props.text}
                        </Typography>
                    }
                    {
                        isEdit &&
                        <ClickAwayListener onClickAway={handleTask("update")}>
                            <TextField autoFocus 
                                    multiline 
                                    fullWidth
                                    autoComplete="off"
                                    value={text} 
                                    size={"small"}
                                    placeholder={"Enter task"} 
                                    variant="outlined"
                                    onChange={onChangeTextHandler}/>
                        </ClickAwayListener>
                    }
                </CardContent>
                <Collapse in={showButtons}>
                    <CardActions>
                        <IconButton size="small" onClick={handleTask("delete")} >
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Collapse>
            </Card>
        </Grow>
    );
};