import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useTodo } from "../hooks/useTodo";

export const Dashboard = () => {
    const { todos, filterBy } = useTodo();

    return (
       <Card className="card">
            <CardContent>
                <Grid container className="grid">
                    <Grid item xs={4}>
                        <Typography>All Tasks</Typography>
                        <Button onClick={() => filterBy("ALL")} >{todos.length}</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>Pending</Typography>
                        <Button onClick={() => filterBy("PENDING")} >{todos.filter(_ => !_.completed).length}</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>Completed</Typography>
                        <Button onClick={() => filterBy("COMPLETED")} >{todos.filter(_ => _.completed).length}</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}