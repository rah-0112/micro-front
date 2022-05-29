import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Avatar, Box, Button, Container, Icon, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

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

                        <Stack
                            direction="row"
                            spacing={{ xs: 2, sm: 6, lg: 8 }}
                        >
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
                        </Stack>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </header>
    );
};

export default Header;
