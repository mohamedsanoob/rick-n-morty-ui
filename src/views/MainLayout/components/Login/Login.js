// import React, { useContext } from "react";
import './LoginPage.css';
import { useAuth } from '../../../../context/AuthContext';

function LoginPage() {
    const { setIsLoggedIn } = useAuth();
    // const { currentLang, setCurrentLang } = useContext(LanguageContext);
    // console.log("contextdata", LanguageContext)

    return (
        <div className="login-page">
            <div className="section">
                <div className="login-box">
                    <h2>Login</h2>
                    <div>
                        <div className="labels">
                            <label htmlFor="email">Email</label>
                            <input type="email" required placeholder="Enter your email" />
                        </div>
                        <div className="labels">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button onClick={()=>setIsLoggedIn(true)} className="login-btn">
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginPage;