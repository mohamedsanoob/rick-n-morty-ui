import React, { useEffect, useRef, useState } from "react";
import './LoginPage.css';
import { useAuth } from '../../../../context/AuthContext';
import { Grid, TextField, Button } from "@mui/material";

function LoginPage() {

    const { setIsLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(null);
    const emailInputRef = useRef(null)

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
   
    return (

        <div className="login-page">
            <Grid container spacing={5} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                <h2 style={{ textAlign: "center", marginBottom: "50px" }}>Login</h2>
                <Grid item width={"30%"}>
                    <TextField id="standard-basic" label="Enter your email" variant="standard" onChange={(e) => setEmail(e.target.value)} fullWidth />
                </Grid>
                <Grid item width={"30%"}>
                    <TextField id="standard-basic" label="Enter your password" variant="standard" onChange={(e) => setPassword(e.target.value)} fullWidth />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" onClick={handleLogin}>
                        Log in
                    </Button>
                    {err && <p style={{ color: "red" }}>{err}</p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default LoginPage;