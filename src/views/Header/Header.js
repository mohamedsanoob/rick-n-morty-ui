import React from "react";
import './Header.css'
import { useAuth } from "../../context/AuthContext";

function Header() {
    const { isLoggedIn, setIsLoggedIn } = useAuth(useAuth);

    return (
        <div className="navbar">
            <div className="title">
                <h2>Rick & Morty</h2>
            </div>
            <div className="logo">
                {isLoggedIn && <button onClick={() => setIsLoggedIn(false)}>
                    Log out
                </button>}
            </div>
        </div>
    )
}

export default Header;