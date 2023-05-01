import React from "react";
import { Route, Routes } from "react-router";
import Login from "../LogIn/Login";
import SignUp from "../SignUp/SignUp";

const MainComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="signup" element={<SignUp />}/>
        </Routes>
    );
}

export default MainComponent;