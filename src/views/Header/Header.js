import React from "react";
import { useAuth } from "../../context/AuthContext";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

function Header() {
    const { isLoggedIn, setIsLoggedIn } = useAuth(useAuth);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="h5" sx={{ flexGrow: 1 }}>
                        Ricky & Morty
                    </Typography>
                    {isLoggedIn && <Button onClick={() => setIsLoggedIn(false)} color="inherit">
                        Log out
                    </Button>}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;