import { CircularProgress, Grow, LinearProgress, Typography, Zoom } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { TransitionGroup } from "react-transition-group";
import { useTodo } from "../../hooks/useTodo";
import { Details } from "./Details";

export const List = () => {
    const { tasks, loading, getTasks } = useTodo()

    useEffect(() => {
        getTasks!();
    }, [])

    return(<>
        {
            tasks.length > 0 && tasks.map(p => <Box key={p.id} m={1/2}><Details {...p} /></Box>)
        }
        {
            !loading && !tasks.length && 
            <Box width={"1"} 
                flexDirection={"column"} 
                display={"flex"} 
                justifyContent="center" 
                height={"50vh"}>
                <Typography variant="h4" textAlign={"center"}>
                    You don't have any tasks!
                </Typography>
            </Box>
        }
        {loading && <Box m={2} sx={{width: 1}} textAlign={"center"}><CircularProgress /></Box>}
    </>);
};