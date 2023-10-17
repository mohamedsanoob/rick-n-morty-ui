import React from "react";
import MainPage from "./components/MainPage/MainPage";
import { useAuth } from "../../context/AuthContext";
import LoginPage from "./components/Login/LoginPage";

function MainLayout() {
    
    const { isLoggedIn } = useAuth();

    return (
        <div>
            {isLoggedIn === true ? <MainPage /> : <LoginPage />}
        </div>
    )
}

export default MainLayout;