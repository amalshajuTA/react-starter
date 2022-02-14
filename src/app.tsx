
import React from "react";
import authStore from "./store/authStore";
import './styles/main.scss';
import Login from "./pages/login";
import Register from "./pages/register";


const App = () => {
   
    return (
        <div>
            <Login/>
            <Register />
        </div>
            
    );
};

export default App;