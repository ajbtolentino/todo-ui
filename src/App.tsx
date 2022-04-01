import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Auth/Login';
import { PrivateRoute } from './components/Auth/PrivateRoute';
import { Todo } from './components/Todo';
import { AuthContextProvider } from './context/auth/authContextProvider';
import { TodoContextProvider } from './context/todo/todoContextProvider';

function App() { 
  return (
    <AuthContextProvider>
      <TodoContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<PrivateRoute/>}>
              <Route path="todo" element={<Todo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TodoContextProvider>
    </AuthContextProvider>
  );
}

export default App;
