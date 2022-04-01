import { Card, CardContent, Grid, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        login!();

        navigate("/todo");
    };

    return (
        <form onSubmit={onFormSubmit}>
        <div className="login container">
            <Card className="wrapper">
                <CardContent>
                    <Grid container flexDirection={"column"} spacing={2}>
                        <Grid item>
                            <Typography textAlign={"center"} variant="h4" component="div">Login</Typography>
                        </Grid>
                        <Grid item>
                            <TextField fullWidth label="Email" variant="standard"/>
                        </Grid>
                        <Grid item>
                            <TextField fullWidth type={"password"} label="Password" variant="standard"/>
                        </Grid>
                        <Grid item>
                            <Button type={"submit"} sx={{width:1}} variant="contained">Login</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    </form>
    );
}