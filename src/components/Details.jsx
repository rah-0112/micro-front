import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const Details = () => {
    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
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
    return (
        <Grid
            container
            mt={8}
            gap={5}
            direction="column"
            pl={{ md: 13, xs: 4 }}
            pr={{ md: 13, xs: 4 }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Grid item xs={12}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 600,
                        fontFamily: "Verdana",
                    }}
                    component={motion.div}
                    animate={{
                        opacity: [0, 1],
                    }}
                >
                    User Guidelines
                </Typography>
            </Grid>
            <Grid
                item
                sx={{ display: "flex", flexDirection: "column" }}
                xs={10}
                ml={{ md: 10, xs: 1 }}
                mb={5}
                variants={list}
                initial="hidden"
                animate="visible"
                component={motion.div}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        fontFamily: "sans-serif",
                    }}
                    pb={3}
                    variants={item}
                    component={motion.div}
                >
                    Instructions For Admins
                </Typography>
                <motion.span variants={item}>
                    1. Register an account.
                </motion.span>
                <motion.span variants={item}> 2. Create a course.</motion.span>
                <motion.span variants={item}>
                    3. Give the course unique ID to your students
                </motion.span>
                <motion.span variants={item}>
                    4. Lecturer do not need upload student's face photo, which
                    will be done by students.
                </motion.span>
                <motion.span variants={item}>
                    5. After all student enrolled, select a course and create
                    the attendance.
                </motion.span>
                <motion.span variants={item}>
                    6. Ensure that the students upload their face photo,
                    otherwise there is no attendance.
                </motion.span>
            </Grid>
            <Grid
                item
                sx={{ display: "flex", flexDirection: "column" }}
                xs={10}
                ml={{ md: 10, xs: 1 }}
                mb={5}
                variants={list}
                initial="hidden"
                animate="visible"
                component={motion.div}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        fontFamily: "sans-serif",
                    }}
                    pb={3}
                    variants={item}
                    component={motion.div}
                >
                    Instructions For Students
                </Typography>
                <motion.span variants={item}>
                    1. Register an account.
                </motion.span>
                <motion.span variants={item}> 2. Create a course.</motion.span>
                <motion.span variants={item}>
                    3. Give the course unique ID to your students
                </motion.span>
                <motion.span variants={item}>
                    4. Lecturer do not need upload student's face photo, which
                    will be done by students.
                </motion.span>
                <motion.span variants={item}>
                    5. After all student enrolled, select a course and create
                    the attendance.
                </motion.span>
                <motion.span variants={item}>
                    6. Ensure that the students upload their face photo,
                    otherwise there is no attendance.
                </motion.span>
            </Grid>
        </Grid>
    );
};

export default Details;
