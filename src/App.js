import AppRouter from "./app-router/AppRouter"
import AuthContextProvider from "./context/AuthContext";
import './App.css';

import { ToastContainer } from 'react-toastify';



const App = () => {
  return (
    <div>
        <AuthContextProvider>

            <AppRouter/>
            <ToastContainer />
            
        </AuthContextProvider>
    </div>
  );
};

export default App;
