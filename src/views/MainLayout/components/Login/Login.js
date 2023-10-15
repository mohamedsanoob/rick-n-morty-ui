import React, { useEffect, useRef, useState } from "react";
import './LoginPage.css';
import { useAuth } from '../../../../context/AuthContext';

function LoginPage() {
    const { setIsLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(null);
    const emailInputRef = useRef(null)

    useEffect(() => {
        emailInputRef.current.focus();
    }, [])

    const handleLogin = () => {
        if (!email || !password) {
            setErr('Email and Password are required')
            return;
        }

        if (!email.includes('@')) {
            setErr('Email must contain the @ symbol.');
            return;
        }
        if (password.length < 8) {
            setErr('Password must be at least 8 characters long.');
            return;
        }

        // if (email !== 'admin@gmail.com' || password !== 'Admin@1234') {
        //     setErr('Invalid email or password.');
        //     return;

        // }


        setIsLoggedIn(true);
        setErr(null);
    }
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
                            <input type="email"
                                required placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                                ref={emailInputRef}
                            />
                        </div>
                        <div className="labels">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button onClick={handleLogin} className="login-btn">
                            LOGIN
                        </button>
                        {err && <p style={{ color: "red" }}>{err}</p>}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginPage;