import { Box, Container, Grid } from '@mui/material';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Todo } from './components/Todo';
import { TodoContextProvider } from './context/todo/todoContextProvider';

function App() { 
  return (
    <TodoContextProvider>
      <Todo />
    </TodoContextProvider>
  );
}

export default App;
