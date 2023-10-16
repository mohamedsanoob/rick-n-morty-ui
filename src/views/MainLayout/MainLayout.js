import React from "react";

import MainPage from "./components/MainPage/MainPage";
import LoginPage from "./components/Login/Login";
import { useAuth } from "../../context/AuthContext";

function MainLayout() {

    const { isLoggedIn } = useAuth();

    return (
        <div>
            {isLoggedIn === true ? <MainPage /> : <MainPage />}
        </div>
    )
}

export default MainLayout;