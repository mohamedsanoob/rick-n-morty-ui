import React from "react";

import MainPage from "./components/MainPage/MainPage";
import LoginPage from "./components/Login/Login";
import { useAuth } from "../../context/AuthContext";

function MainLayout({results}) {
    console.log(results)
    const { isLoggedIn } = useAuth();
    return <div>
        {
            isLoggedIn === true ?
                <MainPage results={results}/> :
                <LoginPage />
        }
    </div>
}

export default MainLayout;