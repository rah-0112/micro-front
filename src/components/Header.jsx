import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Avatar, Button, Stack } from "@mui/material";
import logo from "../assets/logo.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Header = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );

    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        console.log(user.user.token);
        localStorage.clear();
        history.push("/");
        setUser(null);
    };

    useEffect(() => {
        const token = user?.user.token;

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);

    return (
        <header>
            <CssBaseline />
            <ElevationScroll>
                <AppBar color="primary">
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            ml: { xs: 0, sm: 10 },
                            mr: { xs: 0, sm: 16 },
                        }}
                    >
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            to="/"
                            sx={{
                                mr: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".05rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            <img src={logo} alt="logo" width={35} height={35} />
                            &nbsp;ATTENDY
                        </Typography>

                        {user ? (
                            <Stack
                                direction="row"
                                spacing={{ xs: 2, sm: 6, lg: 8 }}
                            >
                                <Avatar
                                    alt={user.user.result.name}
                                    src={user.user.result.imageUrl}
                                >
                                    {user.user.result.name.charAt(0)}
                                </Avatar>
                                <Typography variant="h6">
                                    {user.user.result.name}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={logout}
                                >
                                    Log out
                                </Button>
                            </Stack>
                        ) : (
                            <Button
                                color="inherit"
                                variant="outlined"
                                sx={{
                                    fontWeight: 550,
                                    letterSpacing: ".06rem",
                                }}
                                component={Link}
                                to="/auth"
                            >
                                Sign in
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </header>
    );
};

export default Header;
