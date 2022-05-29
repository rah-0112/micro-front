import { Container } from "@mui/material";
import React, { useState } from "react";

const StudentView = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    console.log(user);
    return <Container>Hello</Container>;
};

export default StudentView;
