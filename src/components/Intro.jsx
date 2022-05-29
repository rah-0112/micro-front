import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Intro = () => {
    const line =
        "An accurate count of attendance! Attendance tracking system with facial recognition.";
    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    };

    const item = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.02,
            },
        },
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "90vh",
                minWidth: "100%",
            }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Grid
                container
                xs={11}
                sm={6}
                textAlign="center"
                alignItems="center"
                justifycontent="center"
                gap={4}
                component={motion.div}
                variants={list}
                initial="hidden"
                animate="visible"
            >
                <Grid item xs={12} variants={item} component={motion.div}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "Verdana",
                            fontWeight: 700,
                            letterSpacing: ".1rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Welcome to Attendy app!
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        variant="h6"
                        xs={8}
                        component={motion.h6}
                        variants={sentence}
                        initial="hidden"
                        animate="visible"
                    >
                        {line.split("").map((char, index) => {
                            return (
                                <motion.span
                                    key={char + "-" + index}
                                    variants={letter}
                                >
                                    {char}
                                </motion.span>
                            );
                        })}
                    </Typography>
                </Grid>
                <Grid item xs={12} variants={item} component={motion.div}>
                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        component={Link}
                        to="/auth"
                    >
                        Get Started
                    </Button>
                </Grid>
                <Grid item xs={12} variants={item} component={motion.div}>
                    <Typography variant="h6" xs={8} sx={{}}>
                        First time user?{" "}
                        <Link
                            to="/details"
                            style={{
                                textDecoration: "none",
                                color: "#2196f3",
                            }}
                        >
                            User GuideLines
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Intro;
