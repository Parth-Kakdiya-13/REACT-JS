import './App.css'; // Your custom styles
import { Login } from './components/Login';
import { ContextProvider } from './components/context/userContext';

const LoginPage = () => {


  return (
    <ContextProvider>
      <div>
        <Login />
      </div>
    </ContextProvider>
  );
};

export default LoginPage;
