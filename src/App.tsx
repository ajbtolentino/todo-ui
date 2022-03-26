import { Grid } from '@mui/material';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Todo } from './components/Todo';
import { TodoContextProvider } from './context/todo/todoContextProvider';

function App() { 
  return (
    <TodoContextProvider>
      <Grid container 
          direction={"column"} 
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}>
        <Grid item>
          <Dashboard />
        </Grid>
        <Grid item container
            m={1} 
            alignItems={"flex-start"}
            justifyContent={"center"}>
              <Todo />
        </Grid>
      </Grid>
    </TodoContextProvider>
  );
}

export default App;
