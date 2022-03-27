import { Box, CircularProgress, Container } from "@mui/material";
import { useTodo } from "../hooks/useTodo";
import { Dashboard } from "./Dashboard";
import { Add } from "./Todo/Add";
import { List } from "./Todo/List";

export const Todo = () => {
    const { loading } = useTodo();

    return (
    <>
        <Container style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Box m={1} width={1/2} textAlign={"center"}>
                <Dashboard />
            </Box>
        </Container>
        <Container style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Box m={1} width={1/2} textAlign={"center"}>
                <Add/>
            </Box>
        </Container>
        <Container style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            <List />
        </Container>
        {
            /** Loading indicator */
            loading &&
            <Box width={1} 
                margin={1}
                flexDirection={"column"} 
                display={"flex"} 
                alignItems="center"
                justifyContent={"center"}>
                <CircularProgress />
            </Box>
        }
    </>);
};