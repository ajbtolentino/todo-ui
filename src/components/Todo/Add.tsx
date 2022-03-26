import { Grid, TextField, Button, Box, CircularProgress, LinearProgress, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import { useTodo } from "../../hooks/useTodo";

export const Add = () => {
    const { addTask } = useTodo();
    
    const [text, setText] = useState<string>('');

    const onChangeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(text && addTask) addTask(text);

        setText("");
    };

    return(
        <Box m={1/2}>
            <Card sx={{width: 200}}>
                <CardContent style={{textOverflow:"ellipsis"}} >
                    <form onSubmit={onFormSubmit}>
                        <TextField fullWidth 
                                    autoComplete="off" 
                                    size={"small"}
                                    value={text} 
                                    variant={"outlined"} 
                                    placeholder="Enter task"
                                    onChange={onChangeTextHandler} />
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};