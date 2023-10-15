import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <AuthContext.Provider value={{
            isLoggedIn, setIsLoggedIn
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}